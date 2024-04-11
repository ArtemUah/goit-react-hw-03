import { useId } from 'react';
import { nanoid } from 'nanoid';
import { Formik, Field, Form} from "formik";
import css from '../ContactForm/ContactForm.module.css';

export default function ({onContactsChange}) {
    const nameId = useId();
    const numberId = useId();
    const handleSubmit = (values, actions) => {
        onContactsChange(values);
        actions.resetForm();

    };

    return (<Formik initialValues={{id:nanoid(), name: '', number: ''}} onSubmit={handleSubmit}>
        <Form className={css.form}>
        <div className={css.container}><label className={css.label} htmlFor={nameId}>Name</label>
        <Field className={css.input} name='name' id={nameId}/></div>
       <div className={css.container}> <label  htmlFor={numberId}>Number</label>
        <Field className={css.input} name='number' id={numberId}/></div>
        <button className={css.btn} type='submit'>Add contact</button>
        </Form>
    </Formik>)
}