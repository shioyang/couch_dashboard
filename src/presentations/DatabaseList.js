import React, { PropTypes } from 'react'
import Database from './Database'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { Field, reduxForm } from 'redux-form'
import SelectDoc from '../containers/SelectDoc'
import EditDocDetail from '../containers/EditDocDetail'
import './DatabaseList.css'

const DatabaseList = ({ databases, onDatabaseClick,
                        docsFetching, docs, selectedDb, onDocClick,
                        docDetailFetching,
                        handleSubmit, reset, pristine, submitting }) => (
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
    <SelectDoc />
    <EditDocDetail />
  </div>
)

DatabaseList.propTypes = {
  databases: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onDatabaseClick: PropTypes.func.isRequired,
  docsFetching: PropTypes.bool,
  docs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired
  })),
  selectedDb: PropTypes.shape({ }),
  onDocClick: PropTypes.func,
  docDetailFetching: PropTypes.bool
}

export default reduxForm({
  form: 'databaseListForm'
})(DatabaseList)