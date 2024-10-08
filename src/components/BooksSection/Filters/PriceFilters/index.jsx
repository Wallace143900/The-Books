import { PriceInput } from "./PriceInput";
import style from "./style.module.scss";

export const PriceFilters = ({min, setMin, max, setMax}) => {
    return (
        <div className={style.priceFilters}>
            <h2 className="title2">Filtrar por preço</h2>
            <PriceInput id="min" label="Mínimo (R$)" value={min} setValue={setMin} />
            <PriceInput id="min" label="Máximo (R$)" value={max} setValue={setMax} />
        </div>
    )
}