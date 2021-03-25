import React from 'react'
import Card from './Card'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const cards = [
    {
        id: 1,
        title:'Fatz web',
        image: image1,
        url: 'https://faztweb.com',
        /* text: 'Holaaa soy daniel' */
    },
    {
        id: 2,
        title:'Fatz blog',
        image: image2,
        url: 'https://blog.faztweb.com'
    },
    {
        id: 3,
        title:'Fatz youtube',
        image: image3,
        url: 'https://youtube.com/fatztech'
    }
]

function Cards() {
    console.log(cards)
    return (
        <div className="container d-flex justify-content-center h-100 align-items-center">
            <div className="row">
                {
                    cards.map(card =>(
                        <div className="col-md-4" key={card.id}>
                            <Card title={card.title} imageSource={card.image} url={card.url} text={card.text}/>
                         </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cards
