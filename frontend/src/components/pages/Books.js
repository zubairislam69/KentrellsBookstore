import React from 'react'
import CardItem from '../CardItem';
import { useState, useEffect } from 'react';
import Cards from '../Cards';
import '../Cards.css';
import Axios from "axios";
import Modal from '../Modal'


function Books() {

  const [bookArr, setBookArr] = useState([])

  useEffect(() => {
    Axios.post('http://localhost:5000/books').then((response) => {

      response.data.map((books) => {

        setBookArr((prevState) => [...prevState, {
          bookID: books.bookID,
          title: books.title,
          price: books.price,
          genre: books.genre,
          isbn: books.isbn,
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
                <CardItem
                  src="images/img-2.jpg"
                  text={books.title}
                  age={books.age_level}
                  label={books.genre}
                  price={books.price}
                  date={books.publication_date}
                  isbnid={books.isbn}

                  
                />)

            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default Books;


