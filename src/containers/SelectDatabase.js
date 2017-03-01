import { connect } from 'react-redux'
import { fetchDocs } from '../actions/docs'
import { fetchDocDetail, saveDocDetail } from '../actions/docDetail'
import DatabaseList from '../presentations/DatabaseList'

const mapStateToProps = (state) => {
  return {
    databases: state.databases,
    docs: state.docs.items,
    docDetail: state.docDetail.item,
    initialValues: state.docDetail.item // initialize form fields
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDatabaseClick: (name) => {
      dispatch(fetchDocs(name))
    },
    onDocClick: (db, doc) => {
      dispatch(fetchDocDetail(db, doc))
    },
    onDocDetailSubmit: (db, docDetail, values) => {
      console.log(db)
      console.log(docDetail)
      console.log(values)
      dispatch(saveDocDetail(db, docDetail, values))
    }
  }
}

const SelectDatabase = connect(
  mapStateToProps,
  mapDispatchToProps
)(DatabaseList)

export default SelectDatabase