import React, { PropTypes } from 'react'
import Database from './Database'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import './DatabaseList.css'

const DatabaseList = ({ databases, onDatabaseClick, docs, onDocClick, docDetail }) => (
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
          <tbody>
            <tr>
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
    <div className='docDetailArea'>
      {docDetail && Object.keys(docDetail).length !== 0 &&
        <table>
          <tbody>
            {Object.keys(docDetail).map(k => 
              <tr key={k}>
                <td className='labelField'><label>{k}:</label></td>
                <td className='valueField'><TextField id={k} defaultValue={docDetail[k]} /></td>
              </tr>
            )}
          </tbody>
        </table>
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
  onDocClick: PropTypes.func,
  docDetail: PropTypes.shape({ })
}

export default DatabaseList