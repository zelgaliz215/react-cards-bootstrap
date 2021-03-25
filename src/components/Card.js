import React from 'react'
import PropTypes from 'prop-types';

function Card({title, imageSource, url,text }) {
    return (
        <div className="card text-center bg-dark animate__animated animate__fadeInUp">
         
            <div className="overflow">
                <img src={imageSource} alt="" className="card-img-top"/>
            </div>

            <div className="card-body text-light">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">{text?text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente adipisci nisi architecto neque eligendi ad nulla necessitatibus, a aliquid ullam!'} </p>
            <a href={url} className="btn btn-outline-secondary rounded-1" target="_blank">
                Go to this website
            </a>
            
            </div>
        </div>
    )
}

Card.propTypes ={
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    imageSource: PropTypes.string,
    text: PropTypes.string
}

export default Card
