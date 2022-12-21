import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { search, getAll } from "../../BooksAPI";
import Books from "../partials/Books";

const Search = ({books, updateShelf}) => {

	let unmounted = false;

	const [searchQuery, setSearchQuery] = useState("")
	const [searchedBooks, setSearchedBooks] = useState(books)

	const searchResult = async () => {
		search(searchQuery, 30).then((data) => {
			setSearchedBooks(data)
		})
	}

	const booksData = async () => {
		await getAll().then((res) => {
			setSearchedBooks(res)
		})
	}

	const handleSearchQuery = (eve) => {
		setSearchQuery(eve.target.value)
	}

	useEffect(() => {
		if(!unmounted) {
			if(searchQuery !== "") {
				searchResult()
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

export default Search;