import { useState } from 'react';
import './App.css';
import { ArticleList, ButtonList } from './components';
import data from './data/data';

function App() {
	const allCategories = [
		'All',
		...new Set(data.map(article => article.category)),
	];

	const [categories, setCategories] = useState(allCategories);
	const [articles, setArticles] = useState(data);

	const filterCategory = (category) => {
		if (category === 'All'){
			setArticles(data)
			return
		}

		const filteredData = data.filter(article => article.category === category);
		setArticles(filteredData)
	}

	return (
		<>
			<div className='title'>
				<h1>
					Programa <span>Blog</span> IN6AM
				</h1>
				<img
					src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMGEP1nuh0ctTnBWKRP9rGmDm5Wi8ZynJHbHTX_rDaGw&s'
					alt='imagen-header'
				/>
			</div>

			<ButtonList categories={categories} filterCategory={filterCategory}/>

			<ArticleList articles={articles}/>
		</>
	);
}

export default App;
