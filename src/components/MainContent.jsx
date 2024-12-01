import '../styles/MainContent.css';
import Title from './Title';
import Buttons from './Buttons';
import Card from './Card';

export default function MainContent() {
	return (
		<>
			<div className='main-content'>
				<Title />
				<Buttons />
				<div className='cards'>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</>
	)
}