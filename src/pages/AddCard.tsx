import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ICard } from '../types/ICard';
import Card from '../components/Card/Card';
import List from '../components/List';
import { v4 as uuidv4 } from 'uuid';
import styles from '../styles/AddCard.module.css';

const schema = yup
  .object({
    name: yup
      .string()
      .min(3, 'Less than 3 characters')
      .max(16, 'More than 3 characters')
      .required('Name is required'),
    description: yup
      .string()
      .min(10, 'Less than 10 characters')
      .required('Description is required'),
    // date: yup
    //   .date()
    //   .transform((value, originalValue) => originalValue)
    //   .required('Date is required'),
    date: yup.string().required('Date is required'),
    type: yup.string().required('Type is required'),
    special: yup.string().required('Special is required'),
    availability: yup.string().required('Availability is required'),
    file: yup.string().required('Image is required'),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export default function App() {
  console.log('render');
  const [isSubmission, setIsSubmission] = useState(false);

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
      <div>
        <label htmlFor="name">Product Name</label>
        <br />
        <input type="text" id="name" placeholder="Name" {...register('name')} />
        <br />
        <p className={styles.errorFormField}>{errors.name && errors.name.message}</p>
      </div>

      <div>
        <label htmlFor="description">Product Description</label>
        <br />
        <input
          type="text"
          id="description"
          placeholder="Description"
          {...register('description')}
        />
        <br />
        <p className={styles.errorFormField}>{errors.description && errors.description.message}</p>
      </div>

      <div>
        <label htmlFor="date">Date of product appearance</label>
        <br />
        <input type="date" id="date" {...register('date')} />
        <br />
        <p className={styles.errorFormField}>{errors.date && errors.date.message}</p>
      </div>

      <div>
        <label htmlFor="type">Choose a type:</label>
        <br />
        <select id="type" defaultValue="--Please choose an option--" {...register('type')}>
          <option value="Classic">Classic</option>
          <option value="Electric">Electric</option>
          <option value="Steam">Steam</option>
        </select>
        <br />
        <p className={styles.errorFormField}>{errors.type && errors.type.message}</p>
      </div>

      <div>
        <input type="checkbox" id="special" value="Special!!!" {...register('special')} />
        <label htmlFor="special">There is a special offer for the product</label>
        <br />
        <p className={styles.errorFormField}>{errors.special && errors.special.message}</p>
      </div>

      <div>
        <input type="radio" id="availability" value="Availability" {...register('availability')} />
        <label htmlFor="availability">Available</label>
      </div>
      <div>
        <input
          type="radio"
          id="not-availability"
          value="NotAvailability"
          {...register('availability')}
        />
        <label htmlFor="not-availability">Not available</label>
        <br />
        <p className={styles.errorFormField}>
          {errors.availability && errors.availability.message}
        </p>
      </div>

      <div>
        <label htmlFor="file">Choose a profile picture:</label>
        <br />
        <input type="file" id="avatar" accept="image/png, image/jpeg" {...register('file')} />
        <br />
        <span className={styles.errorFormField}>{errors.file && errors.file.message}</span>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
      <List
        classNameList={styles.cards__list}
        items={JSON.parse(localStorage.getItem('cards') ?? '[]')}
        renderItem={(card: ICard) => <Card key={card.id} card={card} />}
      />
    </form>
  );
}
