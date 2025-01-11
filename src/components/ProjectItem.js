import '../styles/ProjectItem.css'


function ProjectItem({ id, cover, name, date, desc, learnt, languages, link, linkimg, category}) {
	const perso = category +' - ' + date;
	const isEven = id % 2 === 0;

	// Function to convert the string into a list
	const renderLearnedList = (learnedString) => {
		const learnedArray = learnedString.split(',');
		return (
		  <p>
			{learnedArray.map((item, index) => (
			  <li key={index}>{item.trim()}</li>
			))}
		  </p>
		);
	  };

	return (
		<div key={id} className={`project-item ${isEven ? 'even' : 'odd'}`}>
			<img className='project-item-cover' src={cover} alt={`${name} cover`} />
			<div className='project-desc'>
				<h3>{name}</h3>
				<p className='project-when'><b>{perso}</b></p>
				<p>{desc}</p>
				<div><b>Lors de ce projet j'ai appris à :</b> {renderLearnedList(learnt)}</div>
				<p><b>Langages utilisés :</b> {languages}</p>
				{link && linkimg && (
				<a className='project-link' href={link}>
					<img src={linkimg} alt='Code source' className='ImgLink'></img>
				</a>
				)}
			</div>
		</div>
	)
}

export default ProjectItem