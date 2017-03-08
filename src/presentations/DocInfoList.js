import React, { PropTypes } from 'react'
import FlatButton from 'material-ui/FlatButton'
import './DocInfoList.css'

const DocInfoList = ({ docs, selectedDb, onDocClick }) => (
  <div className='docInfoListArea'>
    {docs && docs.length !== 0 &&
      <div>
        {docs.map(d => 
          <FlatButton key={d.id} label={d['id']} labelStyle={{'text-transform':'none'}}
                      onTouchTap={() => onDocClick({name: selectedDb.name}, {_id: d['id']}) } />
        )}
      </div>
    }
    {docs && docs.length === 0 &&
      <span className='noResults'>No Results</span>
    }
  </div>
)

DocInfoList.propTypes = {
  docs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired
  })),
  selectedDb: PropTypes.shape({ }),
  onDocClick: PropTypes.func
}

export default DocInfoList