import { IValid } from 'types/IValid';
import { IValidation } from '../../types/IValidation';

class FormValidator {
  validations: IValidation[];
  validator: Record<string, (data: string) => boolean>;
  resultValidation: boolean;
  constructor(validations: IValidation[]) {
    // validations is an array of validation rules specific to a form
    this.validations = validations;
    this.resultValidation = true;
    this.validator = {};
  }

  isEmpty = (str: string) => {
    return str.length === 0;
  };

  validate(state: Record<string, string>) {
    const resultValidation = this.valid();
    this.resultValidation = true;
    this.validator['isEmpty'] = this.isEmpty;

    this.validations.forEach((rule) => {
      if (this.validator[rule.method](state[rule.field].toString())) {
        resultValidation[rule.field] = { isInvalid: true, message: rule.message };
        this.resultValidation = false;
      }
    });

    return resultValidation;
  }

  valid = () => {
    const validation = this.validations.reduce((acc: Record<string, IValid>, rule) => {
      acc[rule.field] = { isInvalid: false, message: '' };
      return acc;
    }, {});

    return validation;
  };
}

export default FormValidator;
