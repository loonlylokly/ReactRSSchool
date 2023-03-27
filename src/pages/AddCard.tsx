import Checkbox from '../components/Form/Checkbox/Checkbox';
import FileUpload from '../components/Form/FileUpload/FileUpload';
import InputDate from '../components/Form/InputDate/InputDate';
import InputText from '../components/Form/InputText/InputText';
import Radio from '../components/Form/Radio/Radio';
import SelectOptions from '../components/Form/SelectOptions/SelectOptions';
import Submit from '../components/Form/Submit/Submit';
import React from 'react';
import styles from '../styles/AddCard.module.css';
import FormValidator from '../components/Form/FormValidator';
import { IStateFormCard } from '../types/IStateFormCard';

class AddCard extends React.Component<unknown, IStateFormCard> {
  nameRef;
  describeRef;
  submitRef;
  nameErrorText: string;
  validator;
  submitted: boolean;

  constructor(props: unknown) {
    super(props);
    this.nameRef = React.createRef<HTMLInputElement>();
    this.describeRef = React.createRef<HTMLInputElement>();
    this.submitRef = React.createRef<HTMLInputElement>();
    this.nameErrorText = '';
    this.validator = new FormValidator([
      {
        field: 'name',
        method: 'isEmpty',
        validWhen: false,
        message: 'Name is required.',
      },
    ]);
    this.state = {
      name: '',
      validation: this.validator.valid(),
    };
    this.submitted = false;
  }

  isCorrectName = (name: string) => {
    console.log(name.length, name.length > 0 && name.length < 17);
    return name.length > 0 && name.length < 17;
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const values = { name: this.nameRef.current?.value as string };
    const validation = this.validator.validate(values);
    this.setState({
      name: this.nameRef.current?.value as string,
      validation: validation,
    });
    this.submitted = true;

    if (this.validator.resultValidation) {
      const cards = JSON.parse(localStorage.getItem('cards') || '[]');
      cards.push({
        cardName: values.name,
      });
      console.log(cards);
      localStorage.setItem('cards', JSON.stringify(cards));
    }
  };

  render() {
    // const validation = this.submitted ? this.validator.validate(this.state) : this.state.validation;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Product Name</label>
          <span className={styles.errorFormField}> {this.state.validation.name.message}</span>
          <br />
          <input type="text" id="name" placeholder="Name" name="name" ref={this.nameRef} />
        </div>
        <Submit />
      </form>
    );
  }
}

export default AddCard;
