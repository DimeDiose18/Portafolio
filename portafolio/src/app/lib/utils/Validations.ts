const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegex = /^[a-z]+$/i;

export const validationByName = (name: string) => {
    if (!nameRegex.test(name)) {
      return 'Name must have only letters';
    }
    if (name.length < 3) {
      return 'Name must have 3 letters';
    }
    return '';
  };

  export const validationByEmail = (email: string) => {
    if (!emailRegex.test(email)) {
      return 'Email is not valid';
    } 
    return '';
  };

  export const validationByMessage = (message: string) => {
    if (!message) {
      return 'Message is required';
    } 
    if (message.length < 10) {
        return 'Message must have 10 letters';
    }
    return ''
  }