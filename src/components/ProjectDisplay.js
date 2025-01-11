import { projectList } from '../datas/ProjectList.js'
import { useState } from 'react'
import ProjectItem from './ProjectItem.js'
import Categories from './Categories.js'

function ProjectDisplay() {
    const categories = [];
	const [activeCategory, setActiveCategory] = useState('')
	projectList.forEach(project => {
        if (!categories.includes(project.category)) {
            categories.push(project.category);
        }
    });
    return (
        <div className='project-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='project-list'>
				{projectList.map(({ id, cover, name, date, desc, learnt, languages, link, linkimg, category }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id}>
							<ProjectItem
								id={id}
								cover={cover}
								name={name}
								date={date}
								desc={desc}
								learnt={learnt}
								languages={languages}
								link={link}
								linkimg={linkimg}
								category={category}
							/>
						</div>
					) : null
				)}
			</ul>
		</div>
    )
}
        
export default ProjectDisplay