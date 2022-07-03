import React from 'react';
import './Gallery.css';

const Gallery = () => {
    return (        
        <section className="gallery-section">
        <div className="gallery-container">
            <div className="gallery">
                <div className="image">
                    <img src="https://img.freepik.com/free-psd/top-view-spoons-bowls-with-spices_23-2148688483.jpg" alt="gallery image 1!"/>
                </div>
                <div className="image">
                    <img src="https://img.freepik.com/free-photo/spices-mix-isolated-white-background-top-view_106006-449.jpg" alt="gallery image 2!"/>
                </div>
                <div className="image">
                    <img src="https://img.freepik.com/free-photo/set-spices-herbs-indian-cuisine-pepper-salt-paprika-basil-top-view_73989-7695.jpg" alt="gallery image 3!"/>
                </div>
                <div className="image">
                    <img src="https://img.freepik.com/free-photo/various-spices-bowls-white-top-view-with-copy-space_96696-224.jpg" alt="gallery image 4!"/>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Gallery;