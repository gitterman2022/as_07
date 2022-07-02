import React from 'react';
import category from '../../../database/category.json';
import './Category.css';

const Category = () => {
  return (
    <div>
            <h5 className="categoryTitle">Spicy Blog!</h5>
            <p>Spices are seed, fruit, root, bark, or other plant substance primarily used for flavoring or coloring food. Spices are distinguished from herbs, which are the leaves, flowers, or stems of plants used for flavoring or as a garnish. Spices are sometimes used in medicine, religious rituals, cosmetics or perfume production and we provide the best information about spice in the world!</p>
            <h5 className="categoryTitle">Explore Topics</h5>
            {
                category.map(item =>
                    <div className="categoryCard">
                        <p>{item.category}</p>
                        <p>{item.numberOfPost}</p>
                    </div>
                )
            }
        </div>
  );
};

export default Category;