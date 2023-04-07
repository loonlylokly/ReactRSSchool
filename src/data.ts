import { ICard } from 'types/ICard';

export const myCards: ICard[] = [
  {
    id: '1',
    title: 'Village Hi-fi',
    type: 'Classic',
    availability: 'Available',
    special: 'Special!!!',
    description: 'description_1',
    image: '1.png',
  },
  {
    id: '2',
    title: 'Holy Minimalism',
    type: 'Classic',
    availability: 'Available',
    special: 'not special',
    description: 'description_2',
    image: '2.png',
  },
  {
    id: '3',
    title: 'Boiling Baroque',
    type: 'Classic',
    availability: 'Not Available',
    special: 'not special',
    description: 'description_3',
    image: '3.png',
  },
  {
    id: '4',
    title: 'Steam kettle',
    type: 'Classic',
    availability: 'Available',
    special: 'not special',
    description: 'description_4',
    image: '4.png',
  },
  {
    id: '5',
    title: 'Techno Future',
    type: 'Classic',
    availability: 'Not Available',
    special: 'Special!!!',
    description: 'description_5',
    image: '5.png',
  },
];

export const validationRules = [
  {
    field: 'name',
    method: 'isCorrectText',
    validWhen: true,
    message: 'Name is required and capitalized',
  },
  {
    field: 'descript',
    method: 'isCorrectText',
    validWhen: true,
    message: 'Description is required and capitalized',
  },
  {
    field: 'date',
    method: 'isCorrectDate',
    validWhen: true,
    message: 'Date is required or older',
  },
  {
    field: 'type',
    method: 'isCorrectType',
    validWhen: true,
    message: 'Type is required.',
  },
  {
    field: 'checkbox',
    method: 'isCorrectCheckbox',
    validWhen: true,
    message: 'Special is required.',
  },
  {
    field: 'availability',
    method: 'isCorrectAvailability',
    validWhen: true,
    message: 'Availability is required.',
  },
  {
    field: 'file',
    method: 'isCorrectFile',
    validWhen: true,
    message: 'File is required.',
  },
];
