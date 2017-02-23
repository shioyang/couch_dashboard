import React, { PropTypes } from 'react'

const Database = ({ onClick, name }) => (
  <li onClick={onClick} >{name}</li>
)

Database.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default Database