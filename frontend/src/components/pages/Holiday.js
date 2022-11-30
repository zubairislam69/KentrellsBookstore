import React from 'react';
import { useState, useEffect, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Axios from "axios";
import "./Books.css";
import "../../App.css"
import "./Home.css"
import Modal from '../Modal';
import { Link } from 'react-router-dom';


function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

const Holiday = ({ handleAddProducts }) => {
  const [bookArr, setBookArr] = useState([])
  const [fantasyArr, setFantasyArr] = useState([])
  let date = new Date();
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let yyyy = date.getFullYear();

    date = yyyy + '-' + mm + '-' + dd;


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    variableWidth: true,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />
  };

  useEffect(() => {
    Axios.post('http://localhost:5000/holiday').then((response) => {
      response.data.map((books) => {
        setBookArr((prevState) => [...prevState, {
          bookID: books.bookID,
          title: books.title,
          price: books.price,
          genre: books.genre,
          isbn: books.isbn,
          publication_date: books.publication_date,
          publisherID: books.publisherID,
          age_level: books.age_level,
          src: books.src

        }])
      })
    }).catch(error => {
      console.log(error.response)
    });

  }, [])

  console.log("setBookArr")

  console.log(bookArr)

  return (

    <>
    
    
    <div className="App">
      <h2> Holiday Books </h2>
        <Slider {...settings}>
          {bookArr.map((item) => (
                        

              
            <div style={{ width:300 }} className="card" >
              <div className="card-top">
                <img src={item.src} />
                <h1> {item.title} </h1>
              </div>
            <div className="card-bottom">
              <h3> {item.price}</h3>
              <p className="category"> {item.genre} </p>
            </div>
            <Modal
              handleAddProducts={handleAddProducts}
              src={item.src}
              title={item.title}
              price= {item.price}
              date={item.publication_date}
              genre={item.genre}
              age={item.age_level}
              isbn={item.isbn}
              bookID = {item.bookID}
            />
            <button
              className="card-button"
              onClick={() => handleAddProducts(item)} >
                Add To Cart
            </button>
          </div> 
          
        ))} 
      </Slider>
      
      <br /> <br />
      
    </div>
    </>
  );
}

export default Holiday
