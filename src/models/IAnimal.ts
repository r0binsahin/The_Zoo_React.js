export interface IAnimal {
  id: number;
  name: string;
  latinName: string;
  yearOfBirth: number;
  shortDescription: string;
  imageUrl: string;
  isFed: boolean;
  lastFed: string;
  longDescription: string;
  medicine: string;
  isHungry: boolean;
}

export const defaultAnimal: IAnimal = {
  id: 0,
  name: '',
  latinName: '',
  yearOfBirth: 0,
  shortDescription: '',
  longDescription: '',
  imageUrl: '',
  medicine: '',
  isFed: false,
  lastFed: '',
  isHungry: false,
};
