import React, { PropTypes } from 'react'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Dialog from 'material-ui/Dialog'
import { Field, reduxForm } from 'redux-form'
import './DocDetailArea.css'

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

const DocDetailArea = ({docs, selectedDb,
                        docDetailFetching, docDetail, onDocDetailSubmit,
                        onAddValueClick, dialog, onOkClick, onCancelClick, onChangeNewKey,
                        handleSubmit, reset, pristine, submitting }) => (
  <div className='docDetailArea'>
    {docs && docs.length !== 0 &&
     docDetail && Object.keys(docDetail).length !== 0 &&
      <form onSubmit={handleSubmit((values) => onDocDetailSubmit({name: selectedDb.name}, docDetail, values))}>
        <table>
          <tbody>
            {Object.keys(docDetail).map(k => 
              <tr key={k}>
                <td className='valueField'>
                  <Field name={k} component={renderTextField} label={k} disabled={k === '_id' || k === '_rev'} />
                </td>
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
                open={dialog.open} >
          <TextField id='keyName' name='keyName' onChange={(event, newValue) => onChangeNewKey(newValue)} />
        </Dialog>
      </form>
    }
  </div>
)

DocDetailArea.propTypes = {
  docs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired
  })),
  selectedDb: PropTypes.shape({ }),
  docDetailFetching: PropTypes.bool,
  docDetail: PropTypes.shape({ }),
  onDocDetailSubmit: PropTypes.func,
  onAddValueClick: PropTypes.func,
  onOkClick: PropTypes.func,
  onCancelClick: PropTypes.func,
  onChangeNewKey: PropTypes.func
}

export default reduxForm({
  form: 'databaseListForm'
})(DocDetailArea)