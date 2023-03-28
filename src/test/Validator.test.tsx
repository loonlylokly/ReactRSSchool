import FormValidator from '../components/Form/FormValidator';
import { validationRules } from '../data';
import { describe, it } from 'vitest';

describe('FormValidator', () => {
  const validator = new FormValidator(validationRules);
  it('check text validator', () => {
    expect(validator.isCorrectText('Name')).toBe(true);
  });
  it('check text validator', () => {
    expect(validator.isCorrectText('name')).toBe(false);
  });
  it('check date validator', () => {
    expect(validator.isCorrectDate(new Date().toJSON().slice(0, 10).replace(/-/g, '-'))).toBe(
      false
    );
  });
  it('check type validator', () => {
    expect(validator.isCorrectType('Electric')).toBe(true);
  });
  it('check type validator', () => {
    expect(validator.isCorrectType('TEST')).toBe(false);
  });
  it('check checkbox validator', () => {
    expect(validator.isCorrectCheckbox('true')).toBe(true);
  });
  it('check checkbox validator', () => {
    expect(validator.isCorrectCheckbox('false')).toBe(false);
  });
  it('check availability validator', () => {
    expect(validator.isCorrectAvailability('true false')).toBe(true);
  });
  it('check availability validator', () => {
    expect(validator.isCorrectAvailability('false true')).toBe(true);
  });
  it('check availability validator', () => {
    expect(validator.isCorrectAvailability('false false')).toBe(false);
  });
  it('check availability validator', () => {
    expect(validator.isCorrectAvailability('true true')).toBe(true);
  });
  it('check availability validator', () => {
    expect(validator.isCorrectAvailability('sfsjfsjkdf')).toBe(false);
  });
  it('check file validator', () => {
    expect(validator.isCorrectFile('test')).toBe(true);
  });

  const defaultValidRes = {
    name: { isInvalid: false, message: '' },
    descript: { isInvalid: false, message: '' },
    date: { isInvalid: false, message: '' },
    type: { isInvalid: false, message: '' },
    checkbox: { isInvalid: false, message: '' },
    availability: { isInvalid: false, message: '' },
    file: { isInvalid: false, message: '' },
  };
  it('check method validDefault', () => {
    expect(validator.validDefault()).toStrictEqual(defaultValidRes);
  });
  const validationData = {
    name: 'Name',
    descript: 'Desc',
    date: 'adadasda',
    type: 'Classic',
    checkbox: 'true',
    availability: 'false false',
    test: 'teeest',
  };
  const validationRes = {
    name: { isInvalid: false, message: '' },
    descript: { isInvalid: false, message: '' },
    date: { isInvalid: true, message: 'Date is required or older' },
    type: { isInvalid: false, message: '' },
    checkbox: { isInvalid: false, message: '' },
    availability: { isInvalid: true, message: 'Availability is required.' },
    file: { isInvalid: false, message: '' },
  };
  it('check method validate', () => {
    expect(validator.validate(validationData)).toStrictEqual(validationRes);
  });
});
