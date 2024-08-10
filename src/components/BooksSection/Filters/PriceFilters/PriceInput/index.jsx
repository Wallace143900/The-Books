import style from "./style.module.scss";

export const PriceInput = ({id, value, label,  setValue}) => {
    return (
        <div className={style.inputBox}>
            <label className="label" htmlFor={id}>{label}</label>
            <input className="input-small" type="number" name={id} id={id} value={value} onChange={(e) => setMin(e.target.value)} min="1" />
        </div>
    )
}