import style from './input.module.css'


export default function Input() {
    return (
        <div>
            {/* <label htmlFor="default"> Default Input</label> */}
            <input className={style.default} type="text" name="default" placeholder="Default" />
        </div>
    )
}