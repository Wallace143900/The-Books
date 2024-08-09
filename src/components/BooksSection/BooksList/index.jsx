import { BookCard } from "./BookCard"

export const BooksList = ({bookList, search}) => {
    return (
        <div>
            <span>Livros listados: {bookList.length}</span>
            {search ? <p>Resultado de busca para: {search}</p> : null}
            {bookList.length > 0 ? (
            <ul>
                {bookList.map(book => (
                    <BookCard key={book.id} book={book} />
                ))}
            </ul>
            ) : (
                <p>Nenhum Resultado encontrado.</p>
            )}
        </div>
    )
}