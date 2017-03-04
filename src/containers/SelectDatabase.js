import { connect } from 'react-redux'
import { fetchDocs } from '../actions/docs'
import { fetchDocDetail } from '../actions/docDetail'
import DatabaseList from '../presentations/DatabaseList'

const mapStateToProps = (state) => {
  return {
    databases: state.databases,
    docsFetching: state.docs.isFetching,
    docs: state.docs.items,
    selectedDb: state.docs.selectedDb,
    docDetailFetching: state.docDetail.isFetching,
    initialValues: state.docDetail.item // initialize form fields
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDatabaseClick: (db) => {
      dispatch(fetchDocs(db))
    },
    onDocClick: (db, doc) => {
      dispatch(fetchDocDetail(db, doc))
    }
  }
}

const SelectDatabase = connect(
  mapStateToProps,
  mapDispatchToProps
)(DatabaseList)

export default SelectDatabase