import { FC } from 'react';
import { FieldValues } from 'react-hook-form';

type RadioProps = {
  ids: string[];
  register: () => FieldValues;
  values: string[];
  labels: string[];
  error?: string;
  styles?: Record<string, string>;
};

const Radio: FC<RadioProps> = ({ ids, register, values, labels, error, styles }) => {
  return (
    <div>
      {ids.map((item, index) => (
        <div key={item}>
          <input
            type="radio"
            id={ids[index]}
            value={values[index]}
            {...(register ? register() : {})}
          />
          <label htmlFor={ids[index]}>{labels[index]}</label>
        </div>
      ))}
      <p className={styles && styles.error}>{error}</p>
    </div>
  );
};

export default Radio;
