import * as Yup from 'yup';

import { ptShort } from 'yup-locale-pt';

Yup.setLocale(ptShort);

const birthdateRegex = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/;

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required().min(8).max(64),
  email: Yup.string().required().email(),
  birthdate: Yup.string()
    .required()
    .matches(birthdateRegex, 'Forneça uma data válida no formato: DD/MM/AAAA'),
  phone: Yup.string().required().length(11, `Deve ter 11 dígitos`),
  username: Yup.string().required().min(6).max(24),
  password: Yup.string().required().min(8).max(24),
});

export default validationSchema;
