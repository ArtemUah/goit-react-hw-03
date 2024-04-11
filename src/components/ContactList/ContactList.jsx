import Contact from "../Contact/Contact"
import css from '../ContactList/ContactList.module.css'

export default function ({contactList}) {
    return (<ul className={css.container}>
        {contactList.map(contact =>{
            return (<li key={contact.id}>
                <Contact contact={contact}/>
            </li>)
        })}
    </ul>)
}