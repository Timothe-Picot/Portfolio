import '../styles/Footer.css'
import cv from '../assets/CV_Timothé_Picot.pdf'

function Footer() {
	return (
		<footer>
			<div className="footer-container">
				<div className="contact-info">
					<h4>Contact</h4>
					<p>Téléphone : 0764169827</p>
					<p>Email : timothe.picot29@gmail.com</p>
				</div>
				<div className="cv-download">
					<a href={cv} download={cv}className="cv-button">Télécharger  mon CV</a>
				</div>
				</div>
		</footer>
	)
}

export default Footer