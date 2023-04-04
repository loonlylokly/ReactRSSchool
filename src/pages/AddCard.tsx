import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ICard } from '../types/ICard';
import Card from '../components/Card/Card';
import List from '../components/List';
import { v4 as uuidv4 } from 'uuid';
import styles from '../styles/AddCard.module.css';

interface IFormInput {
  name: string;
  description: string;
  date: Date;
  type: string;
  special: string;
  availability: string;
  file: FileList | '';
}

export default function App() {
  const [isSubmission, setIsSubmission] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
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
        <input
          type="text"
          id="name"
          placeholder="Name"
          {...register('name', {
            required: 'Name is required',
            minLength: {
              value: 5,
              message: 'This input exceed minLength.',
            },
            maxLength: {
              value: 16,
              message: 'This input exceed maxLength.',
            },
          })}
        />
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
          {...register('description', {
            required: 'Description is required',
            minLength: {
              value: 5,
              message: 'This input exceed minLength.',
            },
            maxLength: {
              value: 16,
              message: 'This input exceed maxLength.',
            },
          })}
        />
        <br />
        <p className={styles.errorFormField}>{errors.description && errors.description.message}</p>
      </div>

      <div>
        <label htmlFor="date">Date of product appearance</label>
        <br />
        <input type="date" id="date" {...register('date', { required: 'Date is required' })} />
        <br />
        <p className={styles.errorFormField}>{errors.date && errors.date.message}</p>
      </div>

      <div>
        <label htmlFor="type">Choose a type:</label>
        <br />
        <select
          id="type"
          defaultValue="--Please choose an option--"
          {...register('type', { required: 'Type is required' })}
        >
          <option value="Classic">Classic</option>
          <option value="Electric">Electric</option>
          <option value="Steam">Steam</option>
        </select>
        <br />
        <p className={styles.errorFormField}>{errors.type && errors.type.message}</p>
      </div>

      <div>
        <input
          type="checkbox"
          id="special"
          value="Special!!!"
          {...register('special', { required: 'Special is required' })}
        />
        <label htmlFor="special">There is a special offer for the product</label>
        <br />
        <p className={styles.errorFormField}>{errors.special && errors.special.message}</p>
      </div>

      <div>
        <input
          type="radio"
          id="availability"
          value="Availability"
          {...register('availability', { required: 'Availability is required' })}
        />
        <label htmlFor="availability">Available</label>
      </div>
      <div>
        <input
          type="radio"
          id="not-availability"
          value="NotAvailability"
          {...register('availability', { required: 'Availability is required' })}
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
        <input
          type="file"
          id="avatar"
          accept="image/png, image/jpeg"
          {...register('file', { required: 'Image is required' })}
        />
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
