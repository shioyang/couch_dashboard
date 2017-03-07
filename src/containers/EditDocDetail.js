import { connect } from 'react-redux'
import { fetchDocs } from '../actions/docs'
import { fetchDocDetail, saveDocDetail, changeKeyName, addKeyToDoc } from '../actions/docDetail'
import { openDialog, closeDialog } from '../actions/dialog'
import DocDetailArea from '../presentations/DocDetailArea'

const mapStateToProps = (state) => {
  return {
    docs: state.docs.items,
    selectedDb: state.docs.selectedDb,
    docDetailFetching: state.docDetail.isFetching,
    docDetail: state.docDetail.item,
    dialog: state.dialog
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDocDetailSubmit: (db, docDetail, values) => {
      dispatch(saveDocDetail(db, docDetail, values))
    },
    onAddValueClick: () => {
      dispatch(openDialog({ name: 'AddValueDialog' }))
    },
    onOkClick: () => {
      dispatch(closeDialog({ name: 'AddValueDialog' }))
      dispatch(addKeyToDoc())
    },
    onCancelClick: () => {
      dispatch(closeDialog({ name: 'AddValueDialog' }))
      dispatch(changeKeyName(null))
    },
    onChangeNewKey: (keyName) => {
      dispatch(changeKeyName(keyName))
    }
  }
}

const EditDocDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(DocDetailArea)

export default EditDocDetail