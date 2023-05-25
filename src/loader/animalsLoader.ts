import axios from 'axios';
import { IAnimal } from '../models/IAnimal';
import { useState } from 'react';

const getAnimals = async () => {
  const res = await axios.get('https://animals.azurewebsites.net/api/animals');
  const animalsLS = localStorage.setItem('animals', JSON.stringify(res.data));
  return animalsLS;
};

export interface Loader {
  animals: IAnimal[];
}

export const animalsLoader = async () => {
  if (localStorage.getItem('animals')) {
    const animals: IAnimal[] = JSON.parse(
      localStorage.getItem('animals') || '[]'
    );
    const data: Loader = { animals };
    data.animals = animals;
    return data;
  } else {
    await getAnimals();
  }
};
