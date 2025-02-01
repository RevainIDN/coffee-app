import '../styles/Card.css';

export default function Card({ product }) {
	return (
		<div className='card'>
			{product.popular && <div className='popular'>Popular</div>}
			<img className='image' src={product.image} alt={product.name} />
			<div className='product-info'>
				<h1 className='product-title'>{product.name}</h1>
				<p className='price'><small>{product.price}</small></p>
			</div>
			{product.votes >= 1 &&
				<div className='product-rate'>
					<img className='star' src={`${import.meta.env.BASE_URL}Star_fill.svg`} alt="Star" />
					<p className='rating'>{product.rating}</p>
					<p className='votes'><small>({product.votes} votes)</small></p>
					{product.available === false && <p className='sold'>Sold out</p>}
				</div>}
			{product.votes === 0 &&
				<div className='product-no-rate'>
					<img className='empty-star' src={`${import.meta.env.BASE_URL}Star.svg`} alt="Empty star" />
					<p className='votes'><small>No ratings</small></p>
				</div>}
		</div>
	)
}