import propTypes from 'prop-types'
import ShelfChanger from './MoveBook';

const SingleBook = ({book, books, onShelfChange}) => {

	return (
		<li>
			<div className="book">
				<div className="book-top">
					<div className="book-cover"
					     style={{
							width: 128,
							height: 193,
							backgroundImage:
								book.imageLinks && `url(${book.imageLinks.thumbnail})`,
							}}></div>
					<ShelfChanger books={books} book={book} updateShelf={onShelfChange} />
				</div>
				<div className="book-title">
					{book.title}
				</div>
				<div className="book-authors">
					{book.authors && book.authors.join(", ")}
				</div>
			</div>
		</li>
	);
}

SingleBook.propTypes = {
	book: propTypes.object.isRequired,
	onShelfChange: propTypes.func.isRequired
}

export default SingleBook;