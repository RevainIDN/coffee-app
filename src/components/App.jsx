import { useEffect } from 'react'
import '../styles/App.css'
import Title from './Title';
import Buttons from './Buttons';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, filterProducts } from '../store/productsSlice';

export default function App() {
  const dispatch = useDispatch()
  const { products, filteredProducts, filterControl } = useSelector(state => state.products)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
        const data = await response.json();
        dispatch(setProducts(data))
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (filterControl === 'all') {
      dispatch(filterProducts(products))
    } else if (filterControl === 'available') {
      dispatch(filterProducts(products.filter(product => product.available)))
    }
  }, [filterControl, products]);

  return (
    <div className='main-content'>
      <Title />
      <Buttons currentFilter={filterControl} />
      <div className="cards">
        {filteredProducts.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}