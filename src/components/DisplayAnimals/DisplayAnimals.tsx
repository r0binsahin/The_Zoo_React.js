import { SyntheticEvent } from 'react';
import { IAnimal } from '../../models/IAnimal';
import '../DisplayAnimals/DisplayAnimals.scss';

interface AnimalsProps {
  animal: IAnimal;
}

export const DisplayAnimals = ({ animal }: AnimalsProps) => {
  const handleError = (e: SyntheticEvent<HTMLImageElement>) => {
    const img = e.target as HTMLImageElement;
    img.src =
      'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg';
  };

  return (
    <>
      <div className={animal.isFed ? 'animalBox fed' : 'animalBox'}>
        <h1 className='animalBox__name'>{animal.name}</h1>
        {animal.isHungry && !animal.isFed && (
          <p className='animalBox__starving'>Svälter! 😢</p>
        )}
        {animal.isFed && <p className='animalBox__full'>Mätt som plätt! 😀</p>}
        <div className='animalBox__img'>
          <img
            src={animal.imageUrl}
            onError={handleError}
            alt={'bild på djuret'}
          />
        </div>

        <p className='animalBox__shortDesc'>{animal.shortDescription}</p>
      </div>
    </>
  );
};
