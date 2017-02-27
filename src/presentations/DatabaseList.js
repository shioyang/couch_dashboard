import React, { PropTypes } from 'react'
import Database from './Database'
import FlatButton from 'material-ui/FlatButton'
import './DatabaseList.css'

const DatabaseList = ({ databases, onDatabaseClick, docs, onDocClick }) => (
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
            <tr><th>key</th><th>value</th><th></th></tr>
          </thead>
          <tbody>
            <tr>
              <td>id</td>
              <td>{d['id']}</td>
              <td><FlatButton onClick={
                  () => onDocClick({name: 'host'}, {id: d['id']})
                }>Edit</FlatButton></td>
            </tr>
          </tbody>
        </table>
      )}
      {docs && docs.length === 0 &&
        <span className='noResults'>No Results</span>
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
  })),
  onDocClick: PropTypes.func
}

export default DatabaseList