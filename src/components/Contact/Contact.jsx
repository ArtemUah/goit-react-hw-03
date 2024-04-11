import { FaPhoneAlt } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import css from '../Contact/Contact.module.css';

export default function ({contact}) {
    return (<div className={css.container}>
    <div>
        <p><FaPhoneAlt/> {contact.name}</p>
        <p><IoIosContact/> {contact.number}</p>
    </div>
    <button type='button' className={css.btn}>Delete</button>
    </div>)
}