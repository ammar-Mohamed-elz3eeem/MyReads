import shelfOptions from "../utils/bookShelves";
import propTypes from 'prop-types';

const ShelfChanger = ({books, book, updateShelf}) => {
	const shelf_op = shelfOptions.map(shelfOption => (
		<option key={shelfOption.slug} value={shelfOption.slug} disabled={shelfOption.disabled || false}>{shelfOption.title}</option>
	));

	const changeShelf = (e) => {
		updateShelf(book, e.target.value)
	}
	let shelf = book.shelf

	for (let b of books) {
		if (b.id == book.id) {
			shelf = b.shelf
		}
	}

	return (
		<div className="book-shelf-changer">
			<select onChange={changeShelf} defaultValue={shelf ? shelf : "none"}>
				{shelf_op}
			</select>
		</div>
	);
}

ShelfChanger.propTypes = {
	books: propTypes.array.isRequired,
	book: propTypes.object.isRequired,
	updateShelf: propTypes.func.isRequired
}

export default ShelfChanger;