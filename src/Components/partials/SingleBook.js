const SingleBook = ({book, onShelfChange}) => {

	const handleBookShelfChange = (e) => {
		onShelfChange(book, e.target.value)
	}

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
							<option value="none" disabled>
								Move to..
							</option>
							<option value="currentlyReading">
								Currently Reading
							</option>
							<option selected value="wantToRead">Want to Read</option>
							<option value="read">Read</option>
							<option value="none">None</option>
						</select>
					</div>
				</div>
				<div className="book-title">
					{book.title}
				</div>
				<div className="book-authors">
					{book.authors && book.authors[0]}
				</div>
			</div>
		</li>
	);
}

export default SingleBook;