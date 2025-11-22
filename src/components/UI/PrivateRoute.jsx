import { Route, Navigate } from 'react-router'

const PrivateRoute = ({ auth = false, children }) => {
  return (
    auth ? children : <Navigate to = '/' />
  )
}

export default PrivateRoute