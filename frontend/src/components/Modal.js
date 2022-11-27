import React from 'react'
import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import "./Modal.css"
import Axios from "axios";

export default function Modal (props) {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal)
    }

    const [bookArr, setBookArr] = useState([])

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

    }, [])


    const {bookID, title, genre, author, price, src, age, isbn, date, handleAddProducts} = props;


    const [addToCart, setCart] = useState([])

    const handleClick = (props) => {
        setCart([...addToCart,props])
        console.log(addToCart);
    }
    
    if (modal) {
        document.body.classList.add('active-modal')
    } else{
        document.body.classList.remove('active-modal')

    }
    return (
        <>
        
        <button 
        className="btn-modal"

        onClick={toggleModal}>
            Learn More
        </button>
        {modal && ( 
            ReactDOM.createPortal(
            <>
                <div className="modal">
                <div className="overlay">
                    <div className="modal-content">
                    <img 
                    src={props.src}
                    alt="" 
                    className="modal-image" 
                    />
                    <div className="modal-text">
                        <h1 >Title: {title}</h1>
                        <h3>Genre: {genre}</h3>
                        <h3>price: {price}</h3>
                        <h3>age range: {age}</h3>
                        <h5>Date Of Publication: {date}</h5>
                        <h5>ISBN: {isbn}</h5>
                        <button
                            onClick={() => handleAddProducts(props)} >
                            Add To Cart
                        </button>

                    </div>
    
                    <button className="close-modal"
                    onClick={toggleModal}
                    >Close</button>
                </div>
            </div>
        </div>
        </>, document.body

        ))}
        

        </>
    )
}


// return (
//     <>

//         <button
//             className="btn-modal"

//             onClick={toggleModal}>
//             Learn More
//         </button>
//         {modal && (
//             ReactDOM.createPortal(
//                 <>
//                     <div className="modal">
//                         <div className="overlay">
//                             <div className="modal-content">
//                                 <img
//                                     src={props.src}
//                                     alt=""
//                                     className="modal-image"
//                                 />
//                                 <div className="modal-text">
//                                     <h1 >Title: {text}</h1>
//                                     <h3>Genre: {genre}</h3>
//                                     <h3>price: {price}</h3>
//                                     <h3>age range: {age}</h3>
//                                     <h5>Date Of Publication: {date}</h5>
//                                     <h5>ISBN: {isbn}</h5>
//                                     <button
//                                         onClick={() => handleAddProducts(props)} >
//                                         Add To Cart
//                                     </button>

//                                 </div>

//                                 <button className="close-modal"
//                                     onClick={toggleModal}
//                                 >Close</button>
//                             </div>
//                         </div>
//                     </div>
//                 </>, document.body

//             ))}


//     </>
// )