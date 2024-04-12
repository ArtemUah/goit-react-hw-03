import { FaPhoneAlt } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import css from '../Contact/Contact.module.css';

export default function ({contact, onDeleteContact}) {
    return (<div className={css.container} >
    <div>
        <p className={css.text}><FaPhoneAlt/> {contact.name}</p>
        <p className={css.text}><IoIosContact/> {contact.number}</p>
    </div>
    <button type='button' className={css.btn} onClick={()=>onDeleteContact(contact.id)}>Delete</button>
    </div>)
}