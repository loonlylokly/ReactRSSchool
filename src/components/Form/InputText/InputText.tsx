import React from 'react';

type IInputText = {
  id: string;
  title: string;
  placeholder: string;
  ref: React.RefObject<HTMLInputElement>;
  onChange: () => void;
};

class InputText extends React.Component<IInputText> {
  render() {
    const { id, title, placeholder, ref, onChange } = this.props;

    return (
      <div>
        <label htmlFor={id}>{title}</label>
        <input
          type="text"
          id={id}
          placeholder={placeholder}
          name={id}
          ref={ref}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default InputText;
