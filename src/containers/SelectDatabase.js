import { connect } from 'react-redux'
import { fetchDocs } from '../actions/docs'
import DatabaseList from '../presentations/DatabaseList'

const mapStateToProps = (state) => {
  return {
    databases: state.databases
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDatabaseClick: (name) => {
      dispatch(fetchDocs(name))
    }
  }
}

const SelectDatabase = connect(
  mapStateToProps,
  mapDispatchToProps
)(DatabaseList)

export default SelectDatabase