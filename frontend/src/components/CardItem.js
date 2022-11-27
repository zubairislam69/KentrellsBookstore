import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';

function CardItem(props) {

    const { handleAddProducts } = props;
    const { id, text, label, author, price, src, age, isbn, date } = props;
    
    return (
        <>
            <li className='cards__item'>
                
            
                <Link className='cards__item__link'>
                    <figure className='cards__item__pic-wrap' data-category={label}>
                        <img
                            className='cards__item__img'
                            alt='Travel Image'
                            src={src}
                        />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{text}</h5>
                        <h6 className='cards__item__text'>{id}</h6>
                        <Modal
                            handleAddProducts = {handleAddProducts}
                            src={src}
                            text={text}
                            price={price}
                            date={date}
                            genre={label}
                            age={age}
                            isbn={isbn}

                        />

                        <button
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
