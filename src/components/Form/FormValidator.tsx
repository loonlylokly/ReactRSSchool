import { IValid } from 'types/IValid';
import { IValidation } from '../../types/IValidation';

class FormValidator {
  validations: IValidation[];
  validator: Record<string, (data: string) => boolean | ((data: boolean) => boolean)>;
  resultValidation: boolean;
  constructor(validations: IValidation[]) {
    this.validations = validations;
    this.resultValidation = true;
    this.validator = {};
  }

  isCorrectText = (str: string) => {
    return str.length > 0 && str[0] === str[0].toUpperCase();
  };

  isCorrectDate = (date: string) => {
    const today = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
    return date.length > 0 && date < today;
  };

  isCorrectType = (str: string) => {
    return ['Classic', 'Electric', 'Steam'].findIndex((item) => item === str) !== -1;
  };

  isCorrectCheckbox = (str: string) => {
    return str === 'true';
  };

  isCorrectAvailability = (str: string) => {
    return str.split(' ')[0] === 'true' || str.split(' ')[1] === 'true';
  };

  isCorrectFile = (str: string) => {
    return str !== '';
  };

  validate(values: Record<string, string>) {
    const resultValidation = this.validDefault();
    this.validator['isCorrectText'] = this.isCorrectText;
    this.validator['isCorrectDate'] = this.isCorrectDate;
    this.validator['isCorrectType'] = this.isCorrectType;
    this.validator['isCorrectCheckbox'] = this.isCorrectCheckbox;
    this.validator['isCorrectAvailability'] = this.isCorrectAvailability;
    this.validator['isCorrectFile'] = this.isCorrectFile;

    this.validations.forEach((rule) => {
      if (this.validator[rule.method](values[rule.field]) !== rule.validWhen) {
        resultValidation[rule.field] = { isInvalid: true, message: rule.message };
        this.resultValidation = false;
      }
    });

    return resultValidation;
  }

  validDefault = () => {
    const validation = this.validations.reduce((acc: Record<string, IValid>, rule) => {
      acc[rule.field] = { isInvalid: false, message: '' };
      return acc;
    }, {});

    return validation;
  };
}

export default FormValidator;
