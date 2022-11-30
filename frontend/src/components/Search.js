import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import CardItem from './CardItem'

const Search = () => {
  const [search, setSearch] = useState("")
  const [bookArr, setBookArr] = useState([])
  const [booksFound, setBooksFound] = useState([])

  const [authorSearch, setAuthorSearch] = useState(false);
  const [titleSearch, setTitleSearch] = useState(false);
  const [lowPriceSearch, setLowPriceSearch] = useState(false);
  const [topPriceSearch, setTopPriceSearch] = useState(false);
  const [checkState1, setCheckState1] = useState(false)
  const [checkState2, setCheckState2] = useState(false)
  const [checkState3, setCheckState3] = useState(false)
  const [checkState4, setCheckState4] = useState(false)

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

  const handleChange1 = (event) => {
    if (event.target.checked && checkState2 || event.target.checked && checkState3
      || event.target.checked && checkState4) {
      setCheckState1(false)

    }
    
    else if (event.target.checked && !checkState2 || event.target.checked && !checkState3
      || event.target.checked && !checkState4) {
      setCheckState1(true)
    }
    else {
      setCheckState1(false)
    }
    setAuthorSearch(current => !current);
  };

  const handleChange2 = (event) => {
    if (event.target.checked && checkState1 || event.target.checked && checkState3 ||
      event.target.checked && checkState4) {
      setCheckState2(false)

    }
    
    else if (event.target.checked && !checkState1 || event.target.checked && !checkState3
      || event.target.checked && !checkState4) {
      setCheckState2(true)

    }
    
    
    else {
      setCheckState2(false)

    }
    setTitleSearch(current => !current);
  };

  const handleChange3 = (event) => {
    if (event.target.checked && checkState1 || event.target.checked && checkState2 ||
      event.target.checked && checkState4) {
      setCheckState3(false)

    }

    else if (event.target.checked && !checkState1 || event.target.checked && !checkState2
      || event.target.checked && !checkState4) {
      setCheckState3(true)

    }


    else {
      setCheckState3(false)

    }
    setLowPriceSearch(current => !current);
  };

  const handleChange4 = (event) => {
    if (event.target.checked && checkState1 || event.target.checked && checkState2 ||
      event.target.checked && checkState3) {
      setCheckState4(false)

    }

    else if (event.target.checked && !checkState1 || event.target.checked && !checkState2
      || event.target.checked && !checkState3) {
      setCheckState4(true)

    }


    else {
      setCheckState4(false)

    }
    setTopPriceSearch(current => !current);
  };


 
  
  return (
      <>
        <form >
          <label className='search--input' >Search Here: </label>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          /> 

        
        
              
                {/* <p>Select your size:</p>
                <div>
                  <input type="radio" name="size" value="XS" id="xs">
                    <label for="xs">XS</label>
                </div>
                <div>
                  <input type="radio" name="size" value="S" id="s">
                    <label for="s">S</label>
                </div>
                <div>
                  <input type="radio" name="size" value="M" id="m">
                    <label for="m">M</label>
                </div>
                <div>
                  <input type="radio" name="size" value="L" id="l">
                    <label for="l">L</label>
                </div>
                <div>
                  <input type="radio" name="size" value="XL" id="xl">
                    <label for="xl">XL</label>
                </div>
                <div>
                  <input type="radio" name="size" value="XXL" id="xxl">
                    <label for="xxl">XXL</label>
                </div> */}
              
              Filter By: 
        <input checked={checkState1} type="checkbox" value={authorSearch} onChange={handleChange1 } /> Author
        <input checked={checkState2} type="checkbox" value={titleSearch} onChange={handleChange2} /> Title
        <input checked={checkState3} type="checkbox" value={lowPriceSearch} onChange={handleChange3} /> Low Price
        <input checked={checkState4} type="checkbox" value={topPriceSearch} onChange={handleChange4} /> Top Price


        
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