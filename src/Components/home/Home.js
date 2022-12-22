import { Link } from "react-router-dom";
import Content from "../partials/Content";
import Header from "../partials/Header";
import Shelf from "../partials/Shelf";
import propTypes from 'prop-types';

const Home = ({books, updateShelf}) => {

	const shelvies = [
		{slug: 'currentlyReading', title: "Currently Reading"},
		{slug: 'read', title: "Read"},
		{slug: 'wantToRead', title: "Want to Read"}
	]

	const shelviesUI = shelvies.map(shelf => (
		<Shelf handleShelf={updateShelf}
			   key={shelf.slug} 
			   books={books.filter(b => b.shelf === shelf.slug)} 
			   shelf_slug={shelf.slug} title={shelf.title}		
		/>
	));

	return (
		<div className="app">
			<div className="list-books">
				<Header />
				<Content>{shelviesUI}</Content>
			</div>
			<div className="open-search">
				<Link to="/search">Add a book</Link>
			</div>
		</div>
	);
}

Home.propTypes = {
	books: propTypes.array.isRequired,
	updateShelf: propTypes.func.isRequired
}

export default Home;