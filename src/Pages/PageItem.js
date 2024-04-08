import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Header from '../Components/Header';


function ContactForm(props) {
  
  const [state, handleSubmit] = useForm("xgejqvod");
  const { id } = props;

  if (state.succeeded) {
      return <p className='FormThx'>Спасибо за заказ!</p>;
  }
  
  return (
    <div>
      <Header/>
      <div className='BForma'>
      <form onSubmit={handleSubmit}>
      <input type="hidden" name="id" value={id}/>
      <label className='EmailAdressLabel' htmlFor="email">
      <p className='EmailAdresstext'>Введите Email</p>
      </label>
      <input
        className='EmailAdress'
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
       <label className='EmailAdressLabel' htmlFor="email">
          <p className='EmailAdresstext'>Ваши пожелания</p>
      </label>
      <textarea
        className='MessageArea'
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className='Formbuttn' type="submit" disabled={state.submitting}>
        Отправить заявку
      </button>
    </form>
    </div>
    </div>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;


