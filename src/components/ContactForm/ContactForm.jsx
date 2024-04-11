import { useId } from 'react';
import { Formik, Field, Form} from "formik";
import css from '../ContactForm/ContactForm.module.css';

export default function () {
    const nameId = useId();
    const emailId = useId();

    return (<Formik initialValues={{id: '', name: '', number: ''}} onSubmit={()=>{}}>
        <Form className={css.form}>
        <div className={css.container}><label className={css.label} htmlFor={nameId}>Name</label>
        <Field className={css.input} name='name' id={nameId}/></div>
       <div className={css.container}> <label  htmlFor={emailId}>Email</label>
        <Field className={css.input} name='email' id={emailId}/></div>
        <button className={css.btn} type='submit'>Add contact</button>
        </Form>
    </Formik>)
}