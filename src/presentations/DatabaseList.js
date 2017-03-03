import React, { PropTypes } from 'react'
import Database from './Database'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Dialog from 'material-ui/Dialog'
import { Field, reduxForm } from 'redux-form'
import './DatabaseList.css'

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

const DatabaseList = ({ databases, onDatabaseClick, docs, selectedDb, onDocClick, docDetail, onDocDetailSubmit, onAddValueClick, dialog, onOkClick, onCancelClick,
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
    <div className='docInfoListArea'>
      {docs && docs.length !== 0 &&
        <div>
          {docs.map(d => 
            <FlatButton key={d.id} label={d['id']} onTouchTap={() => onDocClick({name: selectedDb.name}, {_id: d['id']}) } />
          )}
        </div>
      }
      {docs && docs.length === 0 &&
        <span className='noResults'>No Results</span>
      }
    </div>
    <div className='docDetailArea'>
      {docs && docs.length !== 0 &&
       docDetail && Object.keys(docDetail).length !== 0 &&
        <form onSubmit={handleSubmit((values) => onDocDetailSubmit({name: selectedDb.name}, docDetail, values))}>
          <table>
            <tbody>
              {Object.keys(docDetail).map(k => 
                <tr key={k}>
                  <td className='valueField'><Field name={k} component={renderTextField} label={k} disabled={k === '_id' || k === '_rev'} /></td>
                </tr>
              )}
              <tr>
                <td><FloatingActionButton mini={true} onTouchTap={() => onAddValueClick('AddValueDialog')}><ContentAdd /></FloatingActionButton></td>
              </tr>
            </tbody>
          </table>
          <div className='actionButtons'>
            <RaisedButton type='submit' primary={true} style={{margin: '0 5px'}} disabled={pristine || submitting}>Save</RaisedButton>
            <RaisedButton style={{margin: '0 5px'}} onClick={reset} disabled={pristine || submitting}>Reset</RaisedButton>
          </div>
          <Dialog title='Add Value Dialog'
                  actions={[
                    <FlatButton label='Cancel' onTouchTap={() => onCancelClick()} />,
                    <FlatButton label='Add' onTouchTap={() => onOkClick()} keyboardFocused={true} />
                  ]}
                  modal={false}
                  open={dialog.open}
                  onRequestClose={() => onCancelClick()} >
            <TextField id='test1' name='test1' />
          </Dialog>
        </form>
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
  selectedDb: PropTypes.shape({ }),
  onDocClick: PropTypes.func,
  docDetail: PropTypes.shape({ }),
  onDocDetailSubmit: PropTypes.func,
  onAddValueClick: PropTypes.func,
  onOkClick: PropTypes.func,
  onCancelClick: PropTypes.func
}

export default reduxForm({
  form: 'databaseListForm'
})(DatabaseList)