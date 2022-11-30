import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';

function CardItem(props) {
    const { handleAddProducts } = props;
    const {genre, id, title, price, src, age, isbn, publicationDate } = props;
    
    return (
        <>
            <li className='cards__item'>                
                <Link className='cards__item__link'>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{title}</h5>
                        <h6 className='cards__item__text'>{id}</h6>
                        <Modal
                            handleAddProducts = {handleAddProducts}
                            src={src}
                            title={title}
                            price={price}
                            date={publicationDate}
                            genre={genre}
                            age={age}
                            isbn={isbn}
                            bookID = {id}
                        />
                        <button className="card-button"
                            onClick={() => handleAddProducts(props)} >
                            Add To Cart
                        </button>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default CardItem;
