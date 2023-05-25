import { SyntheticEvent } from 'react';
import { IAnimal } from '../../models/IAnimal';
import { FeedAnimal } from '../FeedAnimal/FeedAnimal';
import './DisplayCurrent.scss';

interface CurrentAnimalProsps {
  animal: IAnimal;
  onFeed: () => void;
}

export const DisplayCurrent = ({ animal, onFeed }: CurrentAnimalProsps) => {
  const handleError = (e: SyntheticEvent<HTMLImageElement>) => {
    const img = e.target as HTMLImageElement;
    img.src =
      'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg';
  };
  return (
    <>
      {' '}
      <div className='currentWrapper'>
        <div
          className={animal.isFed ? 'currentAnimalBox fed' : 'currentAnimalBox'}
        >
          <h2 className='currentAnimalBox__name'>{animal.name}</h2>
          {animal.isHungry && !animal.isFed && (
            <p className='currentAnimalBox__warning'>Mata omgående!</p>
          )}
          <div className='currentAnimalBox__img'>
            <img
              src={animal.imageUrl}
              onError={handleError}
              alt={`bild på ${animal.name}`}
            />
          </div>

          <p className='currentAnimalBox__bYear'>
            Födelse år: {animal.yearOfBirth}
          </p>
          <p className='currentAnimalBox__meds'>mediciner: {animal.medicine}</p>
          <p className='currentAnimalBox__longDesc'>{animal.longDescription}</p>
          <FeedAnimal animal={animal} onFeed={onFeed}></FeedAnimal>
        </div>
      </div>
    </>
  );
};
