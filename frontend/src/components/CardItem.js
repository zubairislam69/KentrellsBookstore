import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';

function CardItem(props, {handleAddProducts }) {
    console.log("props")
    console.log(props)
        
    return (
        <>
            <li className='cards__item'>                
                <Link className='cards__item__link'>
                    <div className='cards__item__info'>
                        <img className='cards__item__img'
                        src={props.src}
                        />
                        <h5 className='cards__item__text'>{props.title}</h5>
                        <h6 className='cards__item__text'>{props.price}</h6>
                        <Modal
                            handleAddProducts = {handleAddProducts}
                            src={props.src}
                            title={props.title}
                            price={props.price}
                            date={props.publicationDate}
                            genre={props.genre}
                            age={props.age}
                            isbn={props.isbn}
                            bookID = {props.id}
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
