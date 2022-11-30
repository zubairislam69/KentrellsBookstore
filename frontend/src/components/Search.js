import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import CardItem from './CardItem'

const Search = () => {
  const [search, setSearch] = useState("")
  const [bookArr, setBookArr] = useState([])
  const [booksFound, setBooksFound] = useState([])

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

  useEffect(() => {
    let results2 = bookArr.filter(x => x.title.toLowerCase().includes(search.toLowerCase()));
    console.log("results2");
    console.log(results2);
    if (!search) {
      setBooksFound([])
    } else {
      setBooksFound(results2)
    }
  }, [search])

  return (
      <>
        <form >
          <label className='search--input' >Search Here: </label>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          /> 


              Filter By: 
              <input type= "checkbox" /> Author
              <input type="checkbox" /> Title
              <input type="checkbox" /> Low Price
              <input type="checkbox" /> High Price


        
      </form>
      
      {/* <div className="card" >
        <div className="card-top">

          <h1> {item.title} </h1>
        </div>
      </div> */}
      {booksFound.map((item) => (
        <CardItem
          title={item.title}
          id={item.id}
          price={item.price}
          age={item.age_level}
          genre={item.genre}
          publicationDate={item.publication_date}
          isbn={item.isbn}
          
        />
      ))}
      
      </>
  )
}

export default Search