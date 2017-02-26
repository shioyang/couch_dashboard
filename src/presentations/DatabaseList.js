import React, { PropTypes } from 'react'
import Database from './Database'

const DatabaseList = ({ databases, onDatabaseClick, docs }) => (
  <div>
    <ul>
      {databases.map(db =>
        <Database
          key={db.name}
          {...db}
          onClick={() => onDatabaseClick(db)}
        />
      )}
    </ul>
    <div>
      {docs && docs.map(d => 
        <table>
          <thead>
            <tr><th>ID</th><th>key</th></tr>
          </thead>
          <tbody>
            <tr><td>{d.id}</td><td>{d.key}</td></tr>
          </tbody>
        </table>
      )}
    </div>
  </div>
)

DatabaseList.propTypes = {
  databases: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onDatabaseClick: PropTypes.func.isRequired,
  docs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired
  }))
}

export default DatabaseList