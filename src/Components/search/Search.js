import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { search } from "../../BooksAPI";
import Books from "../partials/Books";
import propTypes from 'prop-types';

const Search = ({books, updateShelf}) => {

	const [searchQuery, setSearchQuery] = useState("")
	const [searchedBooks, setSearchedBooks] = useState([])

	const handleSearchQuery = (eve) => {
		setSearchQuery(eve.target.value)
	}

	useEffect(() => {
		let unmounted = false;
		
		const searchResult = async () => {
			search(searchQuery, 30).then((data) => {
				setSearchedBooks(data)
			})
		}
		
		if(!unmounted) {
			if(searchQuery !== "") {
				searchResult()
			} else {
				setSearchedBooks([])
			}
		}

		return () => {
			unmounted = true
		}
	}, [searchQuery])

	return (
		<div className="search-books">
			<div className="search-books-bar">
				<Link className="close-search" to="/">Close</Link>
				<div className="search-books-input-wrapper">
					<input
						type="text"
						placeholder="Search by title, author, or ISBN"
						value={searchQuery}
						onChange={handleSearchQuery}
					/>
            	</div>
			</div>
			<div className="search-books-results">
				{searchedBooks.length > 0 && <Books books={searchedBooks} handleShelfUpdate={updateShelf}></Books>}
			</div>
		</div>
	);
}

Search.propTypes = {
	books: propTypes.array.isRequired,
	updateShelf: propTypes.func.isRequired
}

export default Search;