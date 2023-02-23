import React from 'react'
import movie from '../../movie.json'

const Movie = (props) => {
  return (
    <div className='movie'>
        <img src={props.img} alt="" />
        <p>{props.title}</p>
        <p>Year : {props.Year}</p>
    </div>
  )
}

export default Movie