import { connect } from 'react-redux'
import { showDocumentListAction } from '../reducers/actions'
import DatabaseList from '../presentations/DatabaseList'

const mapStateToProps = (state) => {
  return {
    databases: state.databases
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDatabaseClick: (name) => {
      dispatch(showDocumentListAction(name))
    }
  }
}

const SelectDatabase = connect(
  mapStateToProps,
  mapDispatchToProps
)(DatabaseList)

export default DatabaseList