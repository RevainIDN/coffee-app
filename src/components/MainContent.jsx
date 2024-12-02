import '../styles/MainContent.css';
import { useEffect, useState } from 'react';
import Title from './Title';
import Buttons from './Buttons';
import Card from './Card';

export default function MainContent() {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [filter, setFilter] = useState('all');

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
				const data = await response.json();
				setProducts(data);
			} catch (error) {
				console.error('Ошибка при загрузке данных:', error);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		if (filter === 'all') {
			setFilteredProducts(products);
		} else if (filter === 'available') {
			setFilteredProducts(products.filter(product => product.available));
		}
	}, [filter, products]);

	return (
		<>
			<div className='main-content'>
				<Title />
				<Buttons setFilter={setFilter} currentFilter={filter} />
				<div className="cards">
					{filteredProducts.map(product => (
						<Card key={product.id} {...product} />
					))}
				</div>
			</div>
		</>
	)
}