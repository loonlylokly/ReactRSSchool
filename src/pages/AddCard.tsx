import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import { ICard } from '../types/ICard';
// import Card from '../components/Card/Card';
// import List from '../components/List';
import { v4 as uuidv4 } from 'uuid';
import styles from '../styles/AddCard.module.css';
import TextField from '../components/TextField/TextField';
import Radio from '../components/Radio/Radio';
import Select from '../components/Select/Select';

const schema = yup
  .object({
    name: yup.string().min(3, 'Less than 3 characters').required('Name is required'),
    type: yup.string().min(3, 'Less than 10 characters').required('Type is required'),
    species: yup.string().min(3, 'Less than 10 characters').required('Species is required'),
    origin: yup.string().min(3, 'Less than 10 characters').required('Origin is required'),
    location: yup.string().min(3, 'Less than 10 characters').required('Location is required'),
    gender: yup.string().required('Gender is required'),
    status: yup.string().required('Status is required'),
    file: yup.string().required('Image is required'),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export default function App() {
  console.log('render');
  const [isSubmission, setIsSubmission] = useState(false);
  const gender = ['Female', 'Male', 'Genderless', 'unknown'];

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
    const blob = new Blob([data.file[0]], { type: 'file/image' });
    console.log(data.file[0]);
    const cards = JSON.parse(localStorage.getItem('cards') || '[]');
    cards.push({ ...data, image: URL.createObjectURL(blob), id: uuidv4() });
    localStorage.setItem('cards', JSON.stringify(cards));
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
        register={() => register('file')}
        styles={{ error: styles.errorFormField }}
        error={errors.file && errors.file.message}
      />
      <div>
        <button type="submit">Submit</button>
      </div>
      {/* <List
        classNameList={styles.cards__list}
        items={JSON.parse(localStorage.getItem('cards') ?? '[]')}
        renderItem={(card: ICard) => <Card key={card.id} card={card} />}
      /> */}
    </form>
  );
}
