import { connect } from 'react-redux'
import { fetchDocDetail } from '../actions/docDetail'
import DocInfoList from '../presentations/DocInfoList'

const mapStateToProps = (state) => {
  return {
    docs: state.docs.items,
    selectedDb: state.docs.selectedDb
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDocClick: (db, doc) => {
      dispatch(fetchDocDetail(db, doc))
    }
  }
}

const SelectDoc = connect(
  mapStateToProps,
  mapDispatchToProps
)(DocInfoList)

export default SelectDoc