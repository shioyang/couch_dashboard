import { connect } from 'react-redux'
import { fetchDocs } from '../actions/docs'
import { fetchDocDetail, saveDocDetail } from '../actions/docDetail'
import { openDialog, closeDialog } from '../actions/dialog'
import DocDetailArea from '../presentations/DocDetailArea'

const mapStateToProps = (state) => {
  return {
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
    // onDocClick: (db, doc) => {
    //   dispatch(fetchDocDetail(db, doc))
    // },
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

const EditDocDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(DocDetailArea)

export default EditDocDetail