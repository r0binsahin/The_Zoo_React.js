import { useLoaderData, useParams } from 'react-router';
import { Loader } from '../loader/animalsLoader';
import { IAnimal, defaultAnimal } from '../models/IAnimal';
import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import { DisplayCurrent } from '../components/DisplayCurrent/DisplayCurrent';
import { Navbar } from '../components/Navbar/Navbar';

export const AnimalPage = () => {
  const { id } = useParams();
  let { animals } = useLoaderData() as Loader;

  const [currentAnimal, setCurrentAnimal] = useState<IAnimal>(defaultAnimal);

  let isHungry = false;
  useEffect(() => {
    if (id) {
      const theAnimal = animals.find((animal) => {
        const now = DateTime.now();
        const lastFedTime = DateTime.fromISO(animal.lastFed);

        const hoursSinceLastFed = now.diff(lastFedTime, 'hours').hours;

        isHungry = !animal.isFed && hoursSinceLastFed >= 4;

        if (animal.id === +id) {
          return { animal, isHungry };
        }
      });
      if (theAnimal) setCurrentAnimal(theAnimal);
    }
  }, [id]);

  const onFeed = () => {
    if (currentAnimal) {
      const updatedAnimal: IAnimal = {
        ...currentAnimal,
        isFed: true,
        lastFed: DateTime.now().toUTC().toString(),
        isHungry: false,
      };

      const updatedAnimals = animals.map((animal) =>
        animal.id === currentAnimal.id ? updatedAnimal : animal
      );

      localStorage.setItem('animals', JSON.stringify(updatedAnimals));
      animals = updatedAnimals;
      setCurrentAnimal(updatedAnimal);
    }
  };
  if (currentAnimal === undefined) {
    return <h2>Välj ett djur</h2>;
  } else
    return (
      <>
        <Navbar></Navbar>
        <DisplayCurrent onFeed={onFeed} animal={currentAnimal}></DisplayCurrent>
      </>
    );
};
