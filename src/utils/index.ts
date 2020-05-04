import { State } from '../components/PasswordGenerator.container';
type Options = Omit<State, 'password'>;

const getRandomNumber = (length = 10): number => {
  return Math.floor(Math.random() * length);
};

const specialCharacters: Array<string> = [
  '~',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '-',
  '+',
  '+',
];

const getSpecialCharacter = (): string => {
  const index = getRandomNumber(specialCharacters.length);
  return specialCharacters[index];
};

const getUppercaseCharacter = (): string => {
  const charCode = getRandomNumber(26);
  return String.fromCharCode(charCode + 65);
};

const getLowercaseCharacter = (): string => {
  const charCode = getRandomNumber(26);
  return String.fromCharCode(charCode + 97);
};

const shuffle = (original: string): string => {
  let newString = original.split('');
  return newString.sort(() => Math.random() - 0.5).join('');
};

const hasSpecialCharacter = (password: string): boolean => {
  return !!specialCharacters.find(
    (character: string) => password.indexOf(character) >= 0
  );
};

const hasLowercase = (password: string): boolean => {
  const regex = RegExp(/[a-z]+/);
  return regex.test(password);
};

const hasUppercase = (password: string): boolean => {
  const regex = RegExp(/[A-Z]+/);
  return regex.test(password);
};

const hasNumber = (password: string): boolean => {
  const regex = RegExp(/\d+/);
  return regex.test(password);
};

const allOptionsSatisfied = (options: Options, password: string): boolean => {
  const satisfiedOptions: Array<Boolean> = [];
  const { specialCharacter, lowercase, uppercase, numeric, length } = options;

  if (specialCharacter) {
    satisfiedOptions.push(hasSpecialCharacter(password));
  }
  if (lowercase) {
    satisfiedOptions.push(hasLowercase(password));
  }
  if (uppercase) {
    satisfiedOptions.push(hasUppercase(password));
  }
  if (numeric) {
    satisfiedOptions.push(hasNumber(password));
  }
  satisfiedOptions.push(password.length === length);

  return satisfiedOptions.every((option) => option);
};

const getNewCharacter = (functions: Array<Function>): string => {
  const i = getRandomNumber(functions.length);
  return functions[i]();
};

export const generatePassword = (options: Options): string => {
  const { specialCharacter, lowercase, uppercase, numeric } = options;
  let password = '';
  const functions = [];

  if (specialCharacter) {
    functions.push(getSpecialCharacter);
  }

  if (lowercase) {
    functions.push(getLowercaseCharacter);
  }

  if (uppercase) {
    functions.push(getUppercaseCharacter);
  }

  if (numeric) {
    functions.push(getRandomNumber);
  }

  while (!allOptionsSatisfied(options, password)) {
    password += getNewCharacter(functions);
  }

  return shuffle(password);
};
