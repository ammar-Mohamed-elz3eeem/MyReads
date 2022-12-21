import { getAll, update } from "./BooksAPI";
import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Components/home/Home";
import { Route, Routes } from "react-router-dom";
import Search from "./Components/search/Search";

function NewApp() {
  	const [books, setBooks] = useState([])

	const booksData = async () => {
		await getAll().then((res) => {
			setBooks(res)
		})
	}

	const updateShelf = async (book, shelf) => {
		await update(book, shelf);
		booksData();
	}

	useEffect(() => {
		let unMounted = false;
		if (!unMounted) {
			booksData()
		}
		return () => {
			unMounted = true
		}
	}, [])

  return (
    <Routes>
      <Route exact path="/" element={<Home updateShelf={updateShelf} books={books} />}></Route>
      <Route exact path="/search" element={<Search updateShelf={updateShelf} books={books} />}></Route>
    </Routes>
  );
}

export default NewApp;