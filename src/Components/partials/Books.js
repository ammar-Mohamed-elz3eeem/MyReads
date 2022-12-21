import SingleBook from "./SingleBook";

const Books = ({books, handleShelfUpdate}) => {

	const data = books.map(book => (
		<SingleBook onShelfChange={handleShelfUpdate} key={book.id} book={book} />
	));

	return (
		<ol className="books-grid">{data}</ol>
	);
}

export default Books;