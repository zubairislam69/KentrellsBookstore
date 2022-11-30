import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import CardItem from './CardItem'
import './Cards.css'
import './search.css'


const Search = () => {
  const [search, setSearch] = useState("")
  const [bookArr, setBookArr] = useState([])
  const [booksFound, setBooksFound] = useState([])

  const [authorSearch, setAuthorSearch] = useState(false);
  const [titleSearch, setTitleSearch] = useState(false);
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
      {booksFound.map((item) => (
        <CardItem
          title={item.title}
          id={item.id}
          price={item.price}
          age={item.age_level}
          genre={item.genre}
          publicationDate={item.publication_date}
          isbn={item.isbn}
          src={item.src}
          
        />
      ))}
      
      </div>

      
      </>
  )
}

export default Search