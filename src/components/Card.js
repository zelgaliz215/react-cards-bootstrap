import React from 'react'


function Card({title, imageSource, url}) {
    return (
        <div className="card text-center bg-dark">
            <img src={imageSource} alt=""/>
            <div className="card-body text-light">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente adipisci nisi architecto neque eligendi ad nulla necessitatibus, a aliquid ullam! </p>
            <a href={url} className="btn btn-outline-secondary rounded-1" target="_blank">
                Go to this website
            </a>
            
            </div>
        </div>
    )
}

export default Card
