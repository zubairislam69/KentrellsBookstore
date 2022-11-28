import React, { useState, useEffect, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Axios from "axios";
import CardItem from "../CardItem";
import "./Books.css"
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


const Books = (props) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />
  };
  const { id, text, label, author, price, src, age, isbn, date, handleAddProducts } = props;

  const [bookArr, setBookArr] = useState([])
  const [fantasyArr, setFantasyArr] = useState([])



  console.log("bookArr")
  console.log(bookArr)

  useEffect(() => {
    Axios.post('http://localhost:5000/books').then((response) => {

      response.data.map((books) => {

        setBookArr((prevState) => [...prevState, {
          bookID: books.bookID,
          title: books.title,
          price: books.price,
          genre: books.genre,
          ISBN: books.ISBN,
          publication_date: books.publication_date,
          publisherID: books.publisherID,
          age_level: books.age_level
        }])
      })


    }).catch(error => {
      console.log(error.response)
    });

    Axios.post('http://localhost:5000/fantasy').then((response) => {

      response.data.map((books) => {

        setFantasyArr((prevState) => [...prevState, {
          bookID: books.bookID,
          title: books.title,
          price: books.price,
          genre: books.genre,
          ISBN: books.ISBN,
          publication_date: books.publication_date,
          publisherID: books.publisherID,
          age_level: books.age_level
        }])
      })


    }).catch(error => {
      console.log(error.response)
    });
    

  }, [])

  console.log("fantasyArr")
  console.log(fantasyArr)
  return (
    <div className="App">
      <h2> All Books </h2>
      <Slider {...settings}>
        {bookArr.map((item) => (
          <div className="card" >
            <div className="card-top">
             
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
              price={item.price}
              date={item.publication_date}
              genre={item.genre}
              age={item.age_level}
              isbn={item.ISBN}
              bookID = {item.bookID}

            />

            <button
              onClick={() => handleAddProducts(item)} >
              {/* // onClick={() => setProduct((prevState) =>
                            //     [...prevState, { title: item.title, price: item.price, id: item.bookID }])} >*/ }


              Add To Cart
            </button>
          </div>

        ))}
  
      </Slider>
      
      <br /> <br />
      <h2> Fantasy </h2>

      <Slider {...settings}>
      {fantasyArr.map((item) => (
        <div className="card" >
          <div className="card-top">
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
            price={item.price}
            date={item.publication_date}
            genre={item.genre}
            age={item.age_level}
            isbn={item.ISBN}
            bookID={item.bookID}

          />

          <button
            onClick={() => handleAddProducts(item)} >
            {/* // onClick={() => setProduct((prevState) =>
                            //     [...prevState, { title: item.title, price: item.price, id: item.bookID }])} >*/ }


            Add To Cart
          </button>
        </div>

      ))}
      </Slider>
    </div>
  );
}

export default Books

