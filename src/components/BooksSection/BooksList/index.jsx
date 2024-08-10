import { BookCard } from "./BookCard";
import styles from "./style.module.scss";

export const BooksList = ({bookList, search}) => {
    return (
        <div className={styles.booksListBox}>
            <span className="paragraph bold">Livros listados: {bookList.length}</span>
            {search ? <p className="paragraph">Resultado de busca para: {search}</p> : null}
            {bookList.length > 0 ? (
            <ul className={styles.booksList}>
                {bookList.map(book => (
                    <BookCard key={book.id} book={book} />
                ))}
            </ul>
            ) : (
                <p className="paragraph">Nenhum Resultado encontrado.</p>
            )}
        </div>
    )
}