import { useLoaderData } from 'react-router';
import { Loader } from '../loader/animalsLoader';
import { Link } from 'react-router-dom';
import { DateTime } from 'luxon';
import { useEffect, useState } from 'react';
import { DisplayAnimals } from '../components/DisplayAnimals/DisplayAnimals';
import { Navbar } from '../components/Navbar/Navbar';

export const AnimalList = () => {
  const { animals } = useLoaderData() as Loader;

  const [updatedAnimals, setUpdatedAnimals] = useState(animals);
  let isHungry = false;
  useEffect(() => {
    const now = DateTime.now();

    const updated = animals.map((animal) => {
      const lastFedTime = DateTime.fromISO(animal.lastFed);
      const hoursSinceLastFed = now.diff(lastFedTime, 'hours').hours;
      isHungry = !animal.isFed && hoursSinceLastFed >= 4;

      if (hoursSinceLastFed >= 3) {
        return { ...animal, isFed: false, isHungry };
      } else {
        return animal;
      }
    });

    localStorage.setItem('animals', JSON.stringify(updated));
    setUpdatedAnimals(updated);
  }, [animals]);

  return (
    <>
      <Navbar></Navbar>
      <div className='wrapper'>
        {updatedAnimals.map((animal) => (
          <Link to={`/animals/${animal.id}`}>
            <DisplayAnimals key={animal.id} animal={animal}></DisplayAnimals>
          </Link>
        ))}
      </div>
    </>
  );
};
