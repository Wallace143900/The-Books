export const BookCard = ({book}) => {
    return (
        <li>
            <div>
                <h2 className="title2">{book.name}</h2>
                <p className="paragraph">{book.category}</p>
            </div>
            <span className="paragraph bold">{book.price}</span>
        </li>
    )
}