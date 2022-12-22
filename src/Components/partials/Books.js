import SingleBook from "./SingleBook";
import propTypes from 'prop-types'

const Books = ({books, handleShelfUpdate}) => {

	const data = books.map(book => (
		<SingleBook onShelfChange={handleShelfUpdate} key={book.id} book={book} />
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