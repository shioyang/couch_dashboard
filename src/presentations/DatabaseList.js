import React, { PropTypes } from 'react'
import Database from './Database'
import './DatabaseList.css'

const DatabaseList = ({ databases, onDatabaseClick, docs }) => (
  <div className='databaseList'>
    <div className='dbNameListArea'>
      {databases.map(db =>
        <Database
          key={db.name}
          {...db}
          onClick={() => onDatabaseClick(db)}
        />
      )}
    </div>
    <div className='docInfoListArea'>
      {docs && docs.length !== 0 && docs.map(d => 
        <table key={d.id}>
          <thead>
            <tr><th>key</th><th>value</th></tr>
          </thead>
          <tbody>
            <tr><td>id</td><td>{d['id']}</td></tr>
          </tbody>
        </table>
      )}
      {docs && docs.length === 0 &&
        <span>No Results</span>
      }
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