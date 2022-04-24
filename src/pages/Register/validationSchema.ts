import * as Yup from 'yup';

import { ptShort } from 'yup-locale-pt';

Yup.setLocale(ptShort);

const birthdateRegex =
  /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

export const validationSchema = Yup.object().shape({
  fullName: Yup.string().required().min(3),
  email: Yup.string().required().email(),
  birthdate: Yup.string()
    .matches(birthdateRegex, 'Forneça uma data válida no formato: dd/mm/aaaa')
    .required(),
  phone: Yup.string().required().length(11, `Deve ter 11 dígitos`),
  username: Yup.string().required().min(6).max(20),
  password: Yup.string().required().min(6).max(20),
});
