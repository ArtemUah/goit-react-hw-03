import {useId} from 'react';
import css from '../SearchBox/SearchBox.module.css';

export default function ({onInputChange}) {
    const filterId=useId();
return (<div className={css.container}>
    <label htmlFor={filterId}>Find contacts by name</label>
    <input id={filterId} onChange={(e)=>onInputChange(e.target.value)}/>
</div>)
}