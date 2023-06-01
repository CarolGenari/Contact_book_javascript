import validator from 'validator';

export default class Login {
  constructor(formClass) {
    this.form = document.querySelector(formClass);    
    this.error = [];

  }

  init() {
    this.events();
  }

  events() {    
    if(!this.form) return;
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.validate();
    });
  }

  validate() {
    const el = this.form;
    const emailInput = el.querySelector('input[name="email"]'); 
    const passwordInput = el.querySelector('input[name="password"]');   
    const error = false;    

    if(!validator.isEmail(emailInput.value)) this.error.push('Email inválido.');
   
    if(passwordInput.value.length < 8 ) this.error.push('Senha deve conter 8 ou mais caracteres.');
    
    if(!error) el.submit();
  }
}