import style from "./style.module.scss";

export const BookCard = ({book}) => {
    return (
        <li className={style.bookCard}>
            <div>
                <h2 className="title2">{book.name}</h2>
                <p className="paragraph">{book.category}</p>
            </div>
            <span className="paragraph bold">{book.price.toLocaleString('pt-br', {style: 'currency', currency:"BRL"})}</span>
        </li>
    )
}