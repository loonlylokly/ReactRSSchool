import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Character } from '../types/Character';
import Card from '../components/Card/Card';
import List from '../components/List';
import { v4 as uuidv4 } from 'uuid';
import styles from '../styles/AddCard.module.css';
import TextField from '../components/TextField/TextField';
import Radio from '../components/Radio/Radio';
import Select from '../components/Select/Select';
import { cardsSlice } from '../store/cardsSliece';
import { useAppDispatch, useAppSelector } from '../hooks/redux';

const schema = yup
  .object({
    name: yup.string().min(3, 'Less than 3 characters').required('Name is required'),
    type: yup.string().min(3, 'Less than 10 characters').required('Type is required'),
    species: yup.string().min(3, 'Less than 10 characters').required('Species is required'),
    origin: yup.string().min(3, 'Less than 10 characters').required('Origin is required'),
    location: yup.string().min(3, 'Less than 10 characters').required('Location is required'),
    gender: yup.string().required('Gender is required'),
    status: yup.string().required('Status is required'),
    image: yup.mixed().required('Image is required'),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export default function AddCard() {
  const [isSubmission, setIsSubmission] = useState(false);
  const { addCard } = cardsSlice.actions;
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.cards.cards);
  const gender = ['Female', 'Male', 'Genderless', 'unknown'];
  console.log(cards);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const images = data.image as FileList;
    dispatch(
      addCard({
        card: {
          ...data,
          image: URL.createObjectURL(images[0]),
          id: uuidv4(),
        },
      })
    );

    setIsSubmission(true);
    setTimeout(setIsSubmission, 3000, false);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {isSubmission && <span className={styles.success}>successfully submitted!</span>}
      <TextField
        id="name"
        type="text"
        label="Character Name"
        placeholder="Name"
        register={() => register('name')}
        styles={{ error: styles.errorFormField }}
        error={errors.name && errors.name.message}
      />
      <Select
        id={'status'}
        label={'Choose a status:'}
        values={['Alive', 'Dead', 'unknown']}
        register={() => register('status')}
        styles={{ error: styles.errorFormField }}
        error={errors.status && errors.status.message}
      />
      <TextField
        id="type"
        type="text"
        label="Character Type"
        placeholder="Type"
        register={() => register('type')}
        styles={{ error: styles.errorFormField }}
        error={errors.type && errors.type.message}
      />
      <Radio
        ids={gender}
        values={gender}
        labels={gender}
        register={() => register('gender')}
        styles={{ error: styles.errorFormField }}
        error={errors.gender && errors.gender.message}
      />
      <TextField
        id="species"
        type="text"
        label="Character Species"
        placeholder="Human"
        register={() => register('species')}
        styles={{ error: styles.errorFormField }}
        error={errors.species && errors.species.message}
      />
      <TextField
        id="origin"
        type="text"
        label="Character Origin"
        placeholder="Earth"
        register={() => register('origin')}
        styles={{ error: styles.errorFormField }}
        error={errors.origin && errors.origin.message}
      />
      <TextField
        id="location"
        type="text"
        label="Character Location"
        placeholder="Earth"
        register={() => register('location')}
        styles={{ error: styles.errorFormField }}
        error={errors.location && errors.location.message}
      />
      <TextField
        id="avatar"
        type="file"
        label="Choose a profile picture:"
        accept="image/png, image/jpeg"
        register={() => register('image')}
        styles={{ error: styles.errorFormField }}
        error={errors.image && errors.image.message}
      />
      <div>
        <button type="submit">Submit</button>
      </div>
      <List
        classNameList={styles.cards__list}
        items={cards || []}
        renderItem={(card: Character) => (
          <Card key={card.id} card={card} onClick={() => {}} popup={false} />
        )}
      />
    </form>
  );
}
