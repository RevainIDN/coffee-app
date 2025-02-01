import '../styles/Buttons.css';
import { useDispatch } from 'react-redux';
import { setFiltrationControl } from '../store/productsSlice';

export default function Buttons({ currentFilter }) {
	const dispatch = useDispatch()

	return (
		<div className='buttons-cont'>
			<button
				className={`button ${currentFilter === 'all' ? 'active' : ''}`}
				onClick={() => dispatch(setFiltrationControl('all'))}
			>
				All Products
			</button>
			<button
				className={`button ${currentFilter === 'available' ? 'active' : ''}`}
				onClick={() => dispatch(setFiltrationControl('available'))}
			>
				Available Now
			</button>
		</div>
	)
}