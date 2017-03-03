import { connect } from 'react-redux'
import { fetchDocs } from '../actions/docs'
import { fetchDocDetail, saveDocDetail } from '../actions/docDetail'
import { openDialog, closeDialog } from '../actions/dialog'
import DatabaseList from '../presentations/DatabaseList'

const mapStateToProps = (state) => {
  return {
    databases: state.databases,
    docsFetching: state.docs.isFetching,
    docs: state.docs.items,
    selectedDb: state.docs.selectedDb,
    docDetailFetching: state.docDetail.isFetching,
    docDetail: state.docDetail.item,
    initialValues: state.docDetail.item, // initialize form fields
    dialog: state.dialog
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDatabaseClick: (db) => {
      dispatch(fetchDocs(db))
    },
    onDocClick: (db, doc) => {
      dispatch(fetchDocDetail(db, doc))
    },
    onDocDetailSubmit: (db, docDetail, values) => {
      dispatch(saveDocDetail(db, docDetail, values))
    },
    onAddValueClick: () => {
      dispatch(openDialog({ name: 'AddValueDialog' }))
    },
    onOkClick: () => {
      dispatch(closeDialog({ name: 'AddValueDialog' }))
    },
    onCancelClick: () => {
      dispatch(closeDialog({ name: 'AddValueDialog' }))
    }
  }
}

const SelectDatabase = connect(
  mapStateToProps,
  mapDispatchToProps
)(DatabaseList)

export default SelectDatabase