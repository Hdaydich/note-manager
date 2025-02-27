export class ValidatorService {
    static min(value, min) {
      if (value.length < min) {
        return `Veuillez tapper au moins ${min} lettre(s)`;
      }
    }
  
    static max(value, max) {
      if (value.length > max) {
        return `Veuillez tapper au plus ${max} lettre(s)`;
      }
    }

    static userNameValidator(value) {
      if (value.split(' ').length>0 ) {
        return `Your userName cannot contain a space `;
      }
    }


  }