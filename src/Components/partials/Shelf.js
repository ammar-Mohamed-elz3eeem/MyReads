import Books from "./Books";
import propTypes from 'prop-types';

const Shelf = ({title, books, shelf_slug, handleShelf}) => {
	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{title}</h2>
			<div className="bookshelf-books">
				<Books BooksIHave={books} books={books} handleShelfUpdate={handleShelf} />
			</div>
		</div>
	);
}

Shelf.propTypes = {
	books: propTypes.array.isRequired,
	handleShelf: propTypes.func.isRequired,
	title: propTypes.string.isRequired,
	shelf_slug: propTypes.string.isRequired
}

export default Shelf;