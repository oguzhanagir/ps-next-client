
import { object, string, number, date, InferType, ref } from 'yup';

let validations = object({
  email: string().email('Geçerli bir email girin !').required('Zorunlu alan.'),
  password: string().min(5,'Şifre 5 karakterden uzun olmalıdır.').required('Zorunlu alan.'),
  confirmPassword: string().oneOf([ref('password')],'Parolalar uyuşmuyor.').required('Zorunlu alan.'),
});

export default validations;