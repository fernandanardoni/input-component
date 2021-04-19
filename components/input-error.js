import style from './input.module.css';

export default function InputError() {
    return (
        <div>
            <input className={style.error} type="text" name="" placeholder="Error"/>
        </div>
    )
}