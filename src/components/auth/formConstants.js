const MIN_PASSWORD_LENGTH = 12;
const PASSWORD_REGEX = '(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}';
const PHONE_REGEX = '^[0-9-+s()]*$';

export {MIN_PASSWORD_LENGTH, PASSWORD_REGEX, PHONE_REGEX};