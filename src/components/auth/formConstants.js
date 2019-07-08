const MIN_PASSWORDLENGTH = 12;
const PASSWORD_REGEX = "(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$";
const PHONE_REGEX = "+[0-9]{2}[0-9]{2}[0-9]{4}[0-9]{4}";


export { MIN_PASSWORDLENGTH, PASSWORD_REGEX, PHONE_REGEX };