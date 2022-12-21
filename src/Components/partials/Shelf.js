import Books from "./Books";

const Shelf = ({title, books, shelf_slug, handleShelf}) => {
	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{title}</h2>
			<div className="bookshelf-books">
				<Books books={books} handleShelfUpdate={handleShelf} />
			</div>
		</div>
	);
}

export default Shelf;