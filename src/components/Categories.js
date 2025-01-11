import '../styles/Categories.css';

function Categories({ setActiveCategory, categories, activeCategory }) {
  return (
    <div className='categories'>
      <button className={activeCategory === '' ? 'active button-all-projects' : 'button-all-projects'} onClick={() => setActiveCategory('')}>Tout les projets</button>
      <div className='category-buttons'>
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? 'active' : ''}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Categories;
