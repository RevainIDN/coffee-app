import '../styles/Card.css';

export default function Card() {
	return (
		<>
			<div className='card'>
				<div className='popular'>Popular</div>
				<img className='image' src="https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg" alt="" />
				<div className='product-info'>
					<h1 className='product-title'>Cappuccino</h1>
					<p className='price'><small>$5.20</small></p>
				</div>
				<div className='product-rate'>
					<img className='star' src="/public/Star_fill.svg" alt="Star" />
					<p className='rating'>4.7</p>
					<p className='votes'><small>(65 votes)</small></p>
					<p className='sold'>Sold out</p>
				</div>
				<div className='product-no-rate'>
					<img className='empty-star' src="/public/Star.svg" alt="Empty star" />
					<p className='votes'><small>No ratings</small></p>
				</div>
			</div>
		</>
	)
}