// import React from 'react'
// import "./Home.css";
// // import harryPotter from "./images/HarryPotterAndThePhilosopherStone.jpg"
// // import Card from '@mui/material/Card';
// // import CardActions from '@mui/material/CardActions';
// // import CardContent from '@mui/material/CardContent';
// // import CardMedia from '@mui/material/CardMedia';
// // import Button from '@mui/material/Button';
// // import Typography from '@mui/material/Typography';
// // test

// const Home = () => {
//   return (
//     <div className='home-container'>
//       <div className='rec-container'>

//         <h1>Recommended Books!</h1>

//         <div className='card-container'>
//           {/* <Card sx={{ maxWidth: 345 }}>
//             <CardMedia component="img" className='card-img' height="300" image={harryPotter} alt="Harry Potter"/>
//             <CardContent>
//               <Typography variant="h5" component="div" className='typography'>
//                 Harry Potter and The Philosophers Stone
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//               Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four,
//               Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated
//               by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus
//               Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft
//               and Wizardry. An incredible adventure is about to begin!
//               </Typography>
//             </CardContent>
//             <CardActions>
//               <Button size="small">Share</Button>
//               <Button size="small">Learn More</Button>
//             </CardActions>
//           </Card> */}
//         </div>

//       </div>

//       <div className='discount-container'>

//         <h1>Discouted Books!</h1>

//         <div className='card-container'>
//           {/* <Card sx={{ maxWidth: 345 }}>
//             <CardMedia component="img" className='card-img' height="300"  image={harryPotter} alt="Harry Potter"/>
//             <CardContent>
//               <Typography variant="h5" component="div" className='typography'>
//                 Harry Potter and The Philosophers Stone
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//               Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four,
//               Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated
//               by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus
//               Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft
//               and Wizardry. An incredible adventure is about to begin!
//               </Typography>
//             </CardContent>
//             <CardActions>
//               <Button size="small">Share</Button>
//               <Button size="small">Learn More</Button>
//             </CardActions>
//           </Card> */}
//         </div>

//       </div>

//       <div className='holiday-container'>
        
//         <h1>Holiday Books!</h1>

//         <div className='card-container'>
//           {/* <Card sx={{ maxWidth: 345 }}>
//             <CardMedia component="img" className='card-img' height="300"  image={harryPotter} alt="Harry Potter"/>
//             <CardContent>
//               <Typography variant="h5" component="div" className='typography'>
//                 Harry Potter and The Philosophers Stone
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//               Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four,
//               Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated
//               by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus
//               Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft
//               and Wizardry. An incredible adventure is about to begin!
//               </Typography>
//             </CardContent>
//             <CardActions>
//               <Button size="small">Share</Button>
//               <Button size="small">Learn More</Button>
//             </CardActions>
//           </Card> */}
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Home

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

const Home = ({ handleAddProducts }) => {
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
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />
  };

  useEffect(() => {
    Axios.post('http://localhost:5000/home').then((response) => {
      response.data.map((books) => {
        setBookArr((prevState) => [...prevState, {
          bookID: books.bookID,
          title: books.title,
          price: ((books.price*(1-books.discount)).toFixed(2)),
          genre: books.genre,
          isbn: books.isbn,
          publication_date: books.publication_date,
          publisherID: books.publisherID,
          age_level: books.age_level,
          src: books.src,
          start_sale_date:books.start_sale_date,
          end_sale_date: books.end_sale_date,
          discount: books.discount

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
          genre: books.genre,
          isbn: books.isbn,
          publication_date: books.publication_date,
          publisherID: books.publisherID,
          age_level: books.age_level,
          src: books.src,
        }])
      })
    }).catch(error => {
      console.log(error.response)
    });
  }, [])

  return (

    <>
    <div className='banner-content'>

      <img 
      src='/images/banner.jpg'
      className='banner'
      
      />

    <div className='banner-information'>
      <h1 className='slogan'>Holidays Are Here And So Are Our books</h1>
      <Link to='/holiday'><button className='holiday-btn'>Shop Holiday Books</button></Link>
    </div>
    </div>
    
    <div className="App">
      <h2> Limited Time Offer On These Books </h2>
        <Slider {...settings}>
          {bookArr.map((item) => (
            
          ((item.start_sale_date<=date && date<=item.end_sale_date)  ?
            
              
            <div style={{ width:300 }} className="card" >
              <div className="card-top">
                <img src={item.src} />
                <h1> {item.title} </h1>
              </div>
            <div className="card-bottom">
              <h3>  <s>{(item.price*(1+item.discount)).toFixed(2)}</s> Now: {item.price}</h3>
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
          :null 
          )
        ))} 
      </Slider>
      
      <br /> <br />
      
    </div>
    </>
  );
}

export default Home

