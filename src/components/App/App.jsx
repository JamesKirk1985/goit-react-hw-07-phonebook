import { ContactForm } from "../PhoneBook/ContactForm/ContactForm";
import { Filter } from "../PhoneBook/Filter/Filter";
import { ContactList } from "../PhoneBook/ContactList/ContactList";
import css from './App.module.css'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/operations";
import { Loader } from "components/Loader/Loader";

export const App = () => { 
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);   
  
    return (    
      <div>
        <Loader  />
        <ContactForm  />        
        <h2 className={css.title}>Contacts</h2>  
        <Filter  />        
        <ContactList />                  
      </div>
    )
    
}
  
