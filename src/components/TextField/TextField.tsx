import { FC } from 'react';
import { FieldValues } from 'react-hook-form';

type TextFieldProps = {
  id: string;
  type: string;
  register: () => FieldValues;
  label: string;
  placeholder?: string;
  accept?: string;
  error?: string;
  styles?: Record<string, string>;
};

const TextField: FC<TextFieldProps> = ({
  id,
  type,
  register,
  placeholder,
  accept,
  label,
  error,
  styles,
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <br />
      <input
        type={type}
        {...(register ? register() : {})}
        id={id}
        placeholder={placeholder}
        accept={accept}
      />
      <br />
      <p className={styles && styles.error}>{error}</p>
    </div>
  );
};

export default TextField;
