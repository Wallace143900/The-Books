import { CategoryFilters } from "./CategoryFilters";
import { PriceFilters } from "./PriceFilters";
import { SearchForm } from "./SearchForm";
import style from "./style.module.scss";

export const Filters = ({cleanFilters, setSearch, setCategory, min, setMin, max, setMax}) => {
    return (
        <div className={style.filterBox}>
            <SearchForm setSearch={setSearch} />
            <CategoryFilters setCategory={setCategory} />
            <PriceFilters min={min} setMin={setMin} max={max} setMax={setMax} />
            <button className="btn" onClick={cleanFilters}>Limpar filtro</button>
        </div>
    )
}