import React from 'react'
import SelectDatabase from '../containers/SelectDatabase'
import './App.css'

const App = () => (
  <div className='couchDashboardApp'>
    <h1>Couch Dashboard</h1>
    <SelectDatabase />
  </div>
)

export default App