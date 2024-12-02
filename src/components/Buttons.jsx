import '../styles/Buttons.css';

export default function Buttons({ setFilter, currentFilter }) {
	return (
		<>
			<div className='buttons-cont'>
				<button className={`button ${currentFilter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All Products</button>
				<button className={`button ${currentFilter === 'available' ? 'active' : ''}`} onClick={() => setFilter('available')}>Available Now</button>
			</div>
		</>
	)
}