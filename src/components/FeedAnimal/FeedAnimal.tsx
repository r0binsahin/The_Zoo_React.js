import { DateTime } from 'luxon';
import { IAnimal } from '../../models/IAnimal';
import './FeedAnimal.scss';

interface IFeedAnimalProps {
  animal: IAnimal;
  onFeed: () => void;
}

export const FeedAnimal = ({ animal, onFeed }: IFeedAnimalProps) => {
  const handleClick = () => {
    onFeed();
  };

  const formatedDate = DateTime.fromISO(animal.lastFed).toLocaleString(
    DateTime.DATETIME_MED
  );

  return (
    <>
      {animal.isFed && (
        <p className='animalFull'>{animal.name} är mätt och belåten 😊</p>
      )}
      <p className='lastFed'>Matad senast: {formatedDate}</p>
      <button
        className={animal.isFed ? 'feedBtn' : 'feedBtn feed'}
        onClick={handleClick}
        disabled={animal.isFed}
      >
        {animal.isFed ? 'djuret är mätt' : 'Mata djuret'}
      </button>
    </>
  );
};
