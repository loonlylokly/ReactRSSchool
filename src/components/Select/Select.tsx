import { FC } from 'react';
import { FieldValues } from 'react-hook-form';

type SelectProps = {
  id: string;
  register: () => FieldValues;
  values: string[];
  label: string;
  error?: string;
  styles?: Record<string, string>;
};

const Select: FC<SelectProps> = ({ id, register, values, label, error, styles }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <br />
      <select id={id} defaultValue="--Please choose an option--" {...(register ? register() : {})}>
        {values.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <br />
      <p className={styles && styles.error}>{error}</p>
    </div>
  );
};

export default Select;
