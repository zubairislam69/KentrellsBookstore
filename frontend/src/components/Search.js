import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import CardItem from './CardItem'
import './Cards.css'
import './search.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./pages/Books.css"
import Modal from '../components/Modal';

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

const Search = ({ handleAddProducts }) => {

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
  const [search, setSearch] = useState("")
  const [bookArr, setBookArr] = useState([])
  const [booksFound, setBooksFound] = useState([])

  const [authorSearch, setAuthorSearch] = useState(false);
  const [titleSearch, setTitleSearch] = useState(false);
  const [publisherSearch, setPublisherSearch] = useState(false);
  const [lowPriceSearch, setLowPriceSearch] = useState(false);
  const [topPriceSearch, setTopPriceSearch] = useState(false);
  
  const [diffSearch, setDiffSearch] = useState(false);
  const [filter, setFilter] = useState('');


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
          PublisherName: books.PublisherName,
          age_level: books.age_level,
          src: books.src,
          author_name: books.author_name
        }])
      })
    }).catch(error => {
      console.log(error.response)
    });

    let authorResults = bookArr.filter(x => x.author_name.toLowerCase().includes(search.toLowerCase()));
    let titleResults = bookArr.filter(x => x.title.toLowerCase().includes(search.toLowerCase()));
    let lowPriceResults = bookArr.filter(x => x.title.toLowerCase().includes(search.toLowerCase()));
    let topPriceResults = bookArr.filter(x => x.title.toLowerCase().includes(search.toLowerCase()));


    
  }, [])
 
  useEffect(() => {

    let authorResults = bookArr.filter(x => x.author_name.toLowerCase().includes(search.toLowerCase()));
    let publisherResults = bookArr.filter(x => x.PublisherName.toLowerCase().includes(search.toLowerCase()));
    let titleResults = bookArr.filter(x => x.title.toLowerCase().includes(search.toLowerCase()));
    let lowPriceResults = bookArr.filter(x => x.title.toLowerCase().includes(search.toLowerCase()));
    let topPriceResults = bookArr.filter(x => x.title.toLowerCase().includes(search.toLowerCase()));


    if (filter === "author") {

     if (!search) {
        setBooksFound([])
      } else {
        setBooksFound(authorResults)
      }
    }

    else if (filter === "lowPrice") {

      if (!search) {
        setBooksFound([])
      } else {
        setBooksFound(lowPriceResults)
      }
    }

    else if (filter === "topPrice") {

      if (!search) {
        setBooksFound([])
      } else {
        setBooksFound(topPriceResults)
      }
    }

    else if (filter === "title") {

      if (!search) {
        setBooksFound([])
      } else {
        setBooksFound(titleResults)
      }
    }

    else if (filter === "publisher") {

      if (!search) {
        setBooksFound([])
      } else {
        setBooksFound(publisherResults)
      }
    }

  }, [search])



  console.log("filter")
  console.log(filter)

  const handleChange = (event) => {
    setFilter(event.target.value)

    console.log("event.target.value")
    console.log(event.target.checked)

    if (event.target.checked) {
      setDiffSearch(true)
    } else {
      setDiffSearch(false)

    }

    //   if (event.target.checked) {
    //     setDiffSearch(true)

    //   } else {
    //     setDiffSearch(false)

    //   }
    //   setDiffSearch(current => !current);
    // };

 
  }

  console.log("diffSearch")
  console.log(diffSearch)
  
  return (
    <>
      <form>
        <p> Filter By: </p>
        <div>
          <input
            name="search"

            type="radio"
            value="author"
            checked={filter === 'author'}
            onChange={handleChange}
          /> Author {}
          <input
            name="search"

            type="radio"
            value="title"
            checked={filter === 'title'}
            onChange={handleChange}
          /> Title {}

          <input
            name="search"

            type="radio"
            value="publisher"
            checked={filter === 'publisher'}
            onChange={handleChange}
          /> Publisher {}
          <input
            name="search"

            type="radio"
            value="lowPrice"
            checked={filter === 'lowPrice'}
            onChange={handleChange}
          /> Low Price {}

          <input
            name="search"

            type="radio"
            value="topPrice"
            checked={filter === 'topPrice'}
            onChange={handleChange}
          /> Top Price {}
        </div>
      </form>

      <label className='search--input' >Search Here: </label>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      /> 
        <br />
        <br /> 

          

      
      {/* <div className="card" >
        <div className="card-top">

          <h1> {item.title} </h1>
        </div>
      </div> */}
      <div className='search-container'>
        <Slider {...settings}>
        {booksFound.map((item) => (
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
      </div>
    
      </>
      
  )
}

export default Search