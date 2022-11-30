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

  const [selected, setSelected] = useState('yes');
  const [diffSearch, setDiffSearch] = useState(false);

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
  if (diffSearch) {

    console.log("CLCSOOCS")
  }
  useEffect(() => {
    // let results2 = bookArr.filter(x => x.title.toLowerCase().includes(search.toLowerCase()));

    // console.log("results2");
    // console.log(results2);

    // if (!search) {
    //   setBooksFound([])
    // } else {
    //   setBooksFound(results2)
    // }

    // WORKING CODE ABOVE


    let authorResults = bookArr.filter(x => x.author_name.toLowerCase().includes(search.toLowerCase()));
    let titleResults = bookArr.filter(x => x.title.toLowerCase().includes(search.toLowerCase()));
    let lowPriceResults = bookArr.filter(x => x.title.toLowerCase().includes(search.toLowerCase()));
    let topPriceResults = bookArr.filter(x => x.title.toLowerCase().includes(search.toLowerCase()));


    if (diffSearch) {

      console.log("CLCSOOCS")
    }
      // if (!search) {
      //   setBooksFound([])
      // } else {
      //   setBooksFound(authorResults)
      // }
    

    

     
    

    
  }, [search])


  const handleChange = event => {
    if (event.target.checked) {
      setDiffSearch(true)
      setSelected(event.target.value);
      
    } else {
      setDiffSearch(false)

    }
    setDiffSearch(current => !current);
  };

  console.log(diffSearch)
  console.log("diffSearch")
  
  
  return (
      <>
      <form >
        

        Filter By: {" "}
        <input
          value="yes"
          checked={selected === 'yes'}
          type="radio"
          name="search"
          onChange={handleChange}
        /> Author { }
        <input type="radio" name="search" value={titleSearch} /> Title {}
        <input type="radio" name="search" value={lowPriceSearch} /> Low Price {}
        <input type="radio" name="search" value={topPriceSearch} /> Top Price {}

        <br />
        <br /> 

          <label className='search--input' >Search Here: </label>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          /> 


      </form>
      
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