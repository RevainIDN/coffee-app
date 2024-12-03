import '../styles/Card.css';

export default function Card({ name, image, price, rating, votes, popular, available }) {
	return (
		<>
			<div className='card'>
				{popular && <div className='popular'>Popular</div>}
				<img className='image' src={image} alt={name} />
				<div className='product-info'>
					<h1 className='product-title'>{name}</h1>
					<p className='price'><small>{price}</small></p>
				</div>
				{votes >= 1 &&
					<div className='product-rate'>
						<img className='star' src={`${import.meta.env.BASE_URL}Star_fill.svg`} alt="Star" />
						<p className='rating'>{rating}</p>
						<p className='votes'><small>({votes} votes)</small></p>
						{available === false && <p className='sold'>Sold out</p>}
					</div>}
				{votes === 0 &&
					<div className='product-no-rate'>
						<img className='empty-star' src={`${import.meta.env.BASE_URL}Star.svg`} alt="Empty star" />
						<p className='votes'><small>No ratings</small></p>
					</div>}
			</div>
		</>
	)
}