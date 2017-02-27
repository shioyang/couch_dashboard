import React, { PropTypes } from 'react'
import FlatButton from 'material-ui/FlatButton'

const Database = ({ onClick, name }) => (
  <FlatButton onClick={onClick} >{name}</FlatButton>
)

Database.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default Database