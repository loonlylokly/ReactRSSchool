import Submit from '../components/Form/Submit/Submit';
import React from 'react';
import styles from '../styles/AddCard.module.css';
import FormValidator from '../components/Form/FormValidator';
import { IStateFormCard } from '../types/IStateFormCard';
import { v4 as uuidv4 } from 'uuid';
import List from '../components/List';
import { validationRules } from '../data';

class AddCard extends React.Component<unknown, IStateFormCard> {
  nameRef;
  describeRef;
  submitRef;
  validator;
  submitted;
  dateRef;
  typeRef;
  checkboxRef;
  radioRef1;
  radioRef2;
  fileRef;
  formRef;

  constructor(props: unknown) {
    super(props);
    this.nameRef = React.createRef<HTMLInputElement>();
    this.describeRef = React.createRef<HTMLInputElement>();
    this.dateRef = React.createRef<HTMLInputElement>();
    this.typeRef = React.createRef<HTMLSelectElement>();
    this.checkboxRef = React.createRef<HTMLInputElement>();
    this.radioRef1 = React.createRef<HTMLInputElement>();
    this.radioRef2 = React.createRef<HTMLInputElement>();
    this.fileRef = React.createRef<HTMLInputElement>();
    this.submitRef = React.createRef<HTMLInputElement>();
    this.formRef = React.createRef<HTMLFormElement>();
    this.validator = new FormValidator(validationRules);
    this.state = {
      name: '',
      descript: '',
      date: '',
      type: '',
      checkbox: '',
      availability: '',
      file: '',
      validation: this.validator.validDefault(),
    };
    this.submitted = false;
  }

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const values = {
      name: this.nameRef.current?.value ?? '',
      descript: this.describeRef.current?.value ?? '',
      date: this.dateRef.current?.value ?? '',
      type: this.typeRef.current?.value ?? '',
      checkbox: this.checkboxRef.current?.checked.toString() ?? 'false',

      file: this.fileRef.current?.files?.length
        ? URL.createObjectURL(this.fileRef.current?.files[0])
        : '',

      availability: `${
        this.radioRef1.current ? this.radioRef1.current.checked.toString() : 'false'
      } ${this.radioRef2.current ? this.radioRef2.current.checked.toString() : 'false'}`,
    };
    const validation = this.validator.validate(values);
    this.setState({
      ...values,
      validation: validation,
    });
    this.submitted = true;

    if (this.validator.resultValidation) {
      const cards = JSON.parse(localStorage.getItem('cards') || '[]');
      const availability =
        values.availability === 'true' ? 'Product not available' : 'Product available';
      const special = values.checkbox === 'true' ? 'Special!!!' : 'not special';
      cards.push({
        id: uuidv4(),
        title: values.name,
        type: values.type,
        availability: availability,
        special: special,
        description: values.descript,
        image: values.file,
      });
      console.log(cards);
      localStorage.setItem('cards', JSON.stringify(cards));
      this.formRef.current?.reset();
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} ref={this.formRef}>
        <div>
          <label htmlFor="name">Product Name</label>
          <span className={styles.errorFormField}> {this.state.validation.name.message}</span>
          <br />
          <input type="text" id="name" placeholder="Name" name="name" ref={this.nameRef} />
        </div>
        <div>
          <label htmlFor="desc">Product Description</label>
          <span className={styles.errorFormField}> {this.state.validation.descript.message}</span>
          <br />
          <input
            type="text"
            id="desc"
            placeholder="Description"
            name="desc"
            ref={this.describeRef}
          />
        </div>
        <div>
          <label htmlFor="date">Date of product appearance</label>
          <br />
          <input type="date" id="date" ref={this.dateRef} />
          <br />
          <span className={styles.errorFormField}> {this.state.validation.date.message}</span>
        </div>
        <div>
          <label htmlFor="type">Choose a type:</label>
          <br />
          <select id="type" defaultValue="--Please choose an option--" ref={this.typeRef}>
            <option value="--Please choose an option--">--Please choose an option--</option>
            <option value="Classic">Classic</option>
            <option value="Electric">Electric</option>
            <option value="Steam">Steam</option>
          </select>
          <br />
          <span className={styles.errorFormField}> {this.state.validation.type.message}</span>
        </div>
        <div>
          <input type="checkbox" id="special" value="special" ref={this.checkboxRef} />
          <label htmlFor="special">There is a special offer for the product</label>
          <br />
          <span className={styles.errorFormField}> {this.state.validation.checkbox.message}</span>
        </div>
        <div>
          <input
            type="radio"
            id="availability"
            name="availability"
            value="Availability"
            ref={this.radioRef1}
          />
          <label htmlFor="availability">Available</label>
          <br />
          <span className={styles.errorFormField}>
            {' '}
            {this.state.validation.availability.message}
          </span>
        </div>
        <div>
          <input
            type="radio"
            id="not-availability"
            name="availability"
            value="NotAvailability"
            ref={this.radioRef2}
          />
          <label htmlFor="not-availability">Not available</label>
          <br />
          <span className={styles.errorFormField}>
            {' '}
            {this.state.validation.availability.message}
          </span>
        </div>
        <div>
          <label htmlFor="avatar">Choose a profile picture:</label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
            ref={this.fileRef}
          />
          <br />
          <span className={styles.errorFormField}> {this.state.validation.file.message}</span>
        </div>
        <Submit />
        <List
          items={JSON.parse(localStorage.getItem('cards') ?? '[]')}
          classNameList={`${styles.cards__list}`}
        />
      </form>
    );
  }
}

export default AddCard;
