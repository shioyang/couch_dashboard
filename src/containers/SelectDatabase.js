import { connect } from 'react-redux'
import { fetchDocs } from '../actions/docs'
import { fetchDocDetail } from '../actions/docDetail'
import DatabaseList from '../presentations/DatabaseList'

const mapStateToProps = (state) => {
  return {
    databases: state.databases,
    docs: state.docs.items,
    docDetail: state.docDetail.item
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDatabaseClick: (name) => {
      dispatch(fetchDocs(name))
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