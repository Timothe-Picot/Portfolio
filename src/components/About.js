import '../styles/About.css'
import voban from '../assets/voban.png'
import lonion from '../assets/lonion.png'
import moi from '../assets/moi.jpg'

function About() {
	return (
		<div className="accueil">
			<div className="presentation">
				<div className="presentation-text">
					<h2>Bienvenue sur mon portfolio</h2>
					<p>
					Bonjour, je m’appelle Timothé Picot, j'ai 19 ans et je suis étudiant en BUT informatique à l’IUT de Lannion.
					J'étudie le développement web et je vais vous faire part sur ce site des projets réalisés lors de mes études.</p>
					<p>J'ai pour ambition de continuer mes études en école d'ingénieur après mon BUT ainsi que de trouver une alternance dans le développement web.
					</p>
				</div>
				<div className="presentation-image">
					<img src={moi} alt={`${moi} cover`}></img>
				</div>
			</div>
			<div className="parcours">
				<h2>Mon Parcours Scolaire</h2>
				<div className="parcours-container">
					<div className="parcours-item">
						<a href="https://www.lycee-vauban-brest.ac-rennes.fr/">
							<img src={voban} alt={`${voban} cover`}></img>
						</a>
						<p>Bac général Spécialité Math / NSI</p>
					</div>
					<div className="parcours-item">
						<a href="https://iut-lannion.univ-rennes.fr/informatique">
							<img src={lonion} alt={`${lonion} cover`}></img>
						</a>
						<p>BUT informatique (En Cours)</p>
					</div>
				</div>
			</div>
		</div>
		)
}

export default About