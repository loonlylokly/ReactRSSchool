import { useForm, SubmitHandler } from 'react-hook-form';
import styles from '../styles/AddCard.module.css';

interface IFormInput {
  name: string;
}

export default function App() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Product Name</label>
        <br />
        <input
          type="text"
          id="name"
          placeholder="Name"
          {...register('name', { required: true, maxLength: 16 })}
        />
        <br />
        <span className={styles.errorFormField}>Test</span>
      </div>

      <input type="submit" />
    </form>
  );
}
