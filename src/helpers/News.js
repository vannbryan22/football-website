import React from 'react'

function News({imgSrc, text, title, link}) {
    return (
        <a 
        href={link}
        className='news'>
            <div className='news__image'>
                <img src={imgSrc} alt='title'/>
            </div>

            <div className='news__title'>
                {title}
            </div>

            <div className='news__text'>
                {text}
            </div>
        </a>
    )
}

export default News
