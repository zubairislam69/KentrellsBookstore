import React, { useState, useEffect, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Axios from "axios";
import "./Books.css"
import Modal from '../Modal';

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

const Books = ({ handleAddProducts }) => {
  const [bookArr, setBookArr] = useState([])
  const [fantasyArr, setFantasyArr] = useState([])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />
  };

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
          age_level: books.age_level,
          src: books.src
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

  console.log("fantasyArr")
  console.log(fantasyArr)
  return (
    <div className="App">
      <h2> All Books </h2>
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
              price={item.price}
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

      <h2> Fantasy </h2>

      <Slider {...settings}>
        {fantasyArr.map((item) => (
          <div style={{ width:300 }} className="card" >
            <div className="card-top">
              <img src={item.src} />
              <h1> {item.title} </h1>
          </div>
          <div className="card-bottom">
            <h3> {item.price} </h3>
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
            isbn={item.isbn}
            bookID={item.bookID}
          />
          <button className="card-button"
            onClick={() => handleAddProducts(item)} >
              Add To Cart
          </button>
        </div>
        ))}
      </Slider>
    </div>
  );
}

export default Books

