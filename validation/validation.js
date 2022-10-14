
import { object, string, number, date, InferType, ref } from 'yup';


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

let validations = object({
  email: string().email('Geçerli bir email girin !').required('Zorunlu alan.'),
  password: string().min(5,'Şifre 5 karakterden uzun olmalıdır.').required('Zorunlu alan.'),
  confirmPassword: string().oneOf([ref('password')],'Parolalar uyuşmuyor.').required('Zorunlu alan.'),
  phone: string().min(10,'Geçerli bir telefon numarası girin.').required('Zorunlu alan.'),
});

export default validations;