import React from 'react';

type IInputText = {
  id: string;
  title: string;
  placeholder: string;
  ref: React.Ref<HTMLInputElement>;
  // ref: React.RefObject<HTMLInputElement>;
};

class InputText extends React.Component<IInputText> {
  render() {
    const { id, title, placeholder, ref } = this.props;

    return (
      <div>
        <label htmlFor={id}>{title}</label>
        <input type="text" id={id} placeholder={placeholder} name={id} ref={ref} />
      </div>
    );
  }
}

export default InputText;
