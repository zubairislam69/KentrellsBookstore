import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';

function CardItem(props) {
    return (
        <>
            <li className='cards__item'>
                
            
                <Link className='cards__item__link'>
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <img
                            className='cards__item__img'
                            alt='Travel Image'
                            src={props.src}
                        />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.text}</h5>
                        <h6 className='cards__item__text__author'>{props.author}</h6>
                        <Modal
                            src={props.src}
                            text={props.text}
                            price={props.price}
                            date={props.date}
                            genre={props.label}
                            age={props.age}
                            isbn={props.isbnid}

                        />
                    </div>
                </Link>
            </li>
        </>
    );
}

export default CardItem;
