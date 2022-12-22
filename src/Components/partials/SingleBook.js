import shelfOptions from "../utils/bookShelves";

const SingleBook = ({book, onShelfChange}) => {

	const handleBookShelfChange = (e) => {
		onShelfChange(book, e.target.value)
	}

	const shelf_op = shelfOptions.map(shelfOption => (
		<option key={shelfOption.slug} value={shelfOption.slug}>{shelfOption.title}</option>
	));

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
					<div className="book-shelf-changer">
						<select onChange={handleBookShelfChange} value={book.shelf ? book.shelf : "none"}>
							{shelf_op}
						</select>
					</div>
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

export default SingleBook;