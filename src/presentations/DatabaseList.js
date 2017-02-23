import React, { PropTypes } from 'react'
import Database from './Database'

const DatabaseList = ({ databases, onDatabaseClick }) => (
  <ul>
    {databases.map(db =>
      <Database
        key={db.name}
        {...db}
        onClick={() => onDatabaseClick(db)}
      />
    )}
  </ul>
)

DatabaseList.propTypes = {
  databases: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onDatabaseClick: PropTypes.func.isRequired
}

export default DatabaseList