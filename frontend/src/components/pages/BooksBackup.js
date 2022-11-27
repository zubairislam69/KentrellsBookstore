import React from 'react'
import CardItem from '../CardItem';
import { useState, useEffect } from 'react';
import Cards from '../Cards';
import '../Cards.css';
import Axios from "axios";
import Modal from '../Modal'
import Search from '../Search';

function Books({ handleAddProducts }) {

    const [bookArr, setBookArr] = useState([])

    useEffect(() => {
        Axios.post('http://localhost:5000/books').then((response) => {

            response.data.map((books) => {

                setBookArr((prevState) => [...prevState, {
                    bookID: books.bookID,
                    title: books.title,
                    price: books.price,
                    genre: books.genre,
                    ISBN: books.isbn,
                    publication_date: books.publication_date,
                    publisherID: books.publisherID,
                    age_level: books.age_level
                }])
            })


        }).catch(error => {
            console.log(error.response)
        });

    }, [])




    return (
        <>

            <h1>Here</h1>

            <div className="cards__container">
                <div className="cards__wrapper">

                    <ul className="cards__items">
                        {
                            bookArr.map((books) =>
                                <>
                                    <CardItem
                                        handleAddProducts={handleAddProducts}
                                        src="images/img-2.jpg"
                                        id={books.bookID}
                                        text={books.title}
                                        age={books.age_level}
                                        label={books.genre}
                                        price={books.price}
                                        date={books.publication_date}
                                        isbn={books.ISBN}


                                    />
                                </>)

                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Books;
