import SingleBook from "./SingleBook";
import propTypes from 'prop-types'

const Books = ({BooksIHave , books, handleShelfUpdate}) => {

	const data = books.map(book => (
		<SingleBook onShelfChange={handleShelfUpdate} books={BooksIHave} key={book.id} book={book} />
	));

	return (
		<ol className="books-grid">{data}</ol>
	);
}

Books.propTypes = {
	books: propTypes.array.isRequired,
	handleShelfUpdate: propTypes.func.isRequired
}

export default Books;