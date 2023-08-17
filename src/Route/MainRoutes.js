import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import CustomLayout from '../Components/CustomLayout/CustomLayout'
import ProjectContainer from '../Container/ProjectContainer/ProjectContainer'
import ContractDetail from '../Container/ContractDetail/ContractDetail'
import ProjectDetail from '../Container/ProjectDetail/ProjectDetail'

function MainRoutes() {
  return (
    <Routes>
      <Route path={'/'} element={<CustomLayout />}>
      <Route path={'/'} element={<ProjectContainer />}></Route>
        <Route path={'/projects'} element={<ProjectContainer />}></Route>
        <Route path={'/contract/:id'} element={<ContractDetail />}></Route>
        <Route path={'/project/:id'} element={<ProjectDetail />}></Route>
        <Route
          path="*"
          element={<Navigate to={'/projects'} />}
        />
      </Route>

    </Routes>
  )
}

export default MainRoutes