import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>check out these EPIC destination</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-9.jpg"
                            text="explore the hidden waterfall deep 
                    inside the Amazon Jungle"
                            author="Me"
                            label='Adventure'
                        />

                        <CardItem
                            src="images/img-2.jpg"
                            text="Travel To the islands of bali in a private cruise"
                            label='Luxury'
                        />
                    </ul>
                    <h2>Genre 2</h2>
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-9.jpg"
                            text="explore the hidden waterfall deep 
                    inside the Amazon Jungle"
                            label='Adventure'
                        />

                        <CardItem
                            src="images/img-2.jpg"
                            text="Travel To the islands of bali in a private cruise"
                            label='Luxury'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards