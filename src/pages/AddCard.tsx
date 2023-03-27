import Checkbox from '../components/Form/Checkbox/Checkbox';
import FileUpload from '../components/Form/FileUpload/FileUpload';
import InputDate from '../components/Form/InputDate/InputDate';
import InputText from '../components/Form/InputText/InputText';
import Radio from '../components/Form/Radio/Radio';
import SelectOptions from '../components/Form/SelectOptions/SelectOptions';
import Submit from '../components/Form/Submit/Submit';
import React from 'react';
import styles from '../styles/AddCard.module.css';

type IStateFormCard = {
  name: string;
};

class AddCard extends React.Component<unknown, IStateFormCard> {
  nameRef;
  describeRef;
  submitRef;
  nameErrorText: string;

  constructor(props: unknown) {
    super(props);
    this.state = {
      name: 'jj',
    };
    this.nameRef = React.createRef<HTMLInputElement>();
    this.describeRef = React.createRef<HTMLInputElement>();
    this.submitRef = React.createRef<HTMLInputElement>();
    this.nameErrorText = '';
  }

  isCorrectName = (name: string) => {
    console.log(name.length, name.length > 0 && name.length < 17);
    return name.length > 0 && name.length < 17;
  };

  handleSubmit = (event: React.FormEvent) => {
    // if (this.isCorrectName(this.nameRef.current?.value as string)) {
    //   this.setState({
    //     name: this.nameRef.current?.value as string,
    //   });
    //   this.nameErrorText = '';
    // } else {
    //   this.nameErrorText = 'name is too long or empty';
    //   console.log(this.nameErrorText);
    // }
    event.preventDefault();
    // const validation = this.validator.validate(this.state);
    // this.setState({ validation });
    // this.submitted = true;

    // if (validation.isValid) {
    //   // handle actual form submission here
    // }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">
            Product Name <span className={styles.errorFormField}>{this.nameErrorText}</span>
          </label>
          <br />
          <input type="text" id="name" placeholder="Name" name="name" ref={this.nameRef} />
        </div>
        <Submit />
      </form>
    );
  }
}

export default AddCard;
