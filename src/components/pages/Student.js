import React from 'react'
import Propsexp from './Propsexp'
import propTypes from 'prop-types'

const Student = (props) => {
  return (
    <div>
        <p>{props.name}</p>
        <p>{props.age}</p>
        <Propsexp name="Exapmle Props"/>
    </div>
  )
}

Student.propTypes={
    name:propTypes.string,
    age:propTypes.number
}

Student.defaultProps = {name:"Saroj Kumar Pandey",age:"0"}

export default Student