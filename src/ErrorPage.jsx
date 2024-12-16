import React from 'react'
import { useRouteError } from 'react-router-dom'
import './ErrorPage.css'; 
const ErrorPage = () => {
    const error= useRouteError()
    console.error(error)
  return (
    <div className="error-container">
    <div>
      <h3>oops</h3>
      <p>Sorry,an unexpected has occured</p>
      <p>
        <i>{error.statusText||error.message}</i>
      </p>
    </div>
    </div>
  )
}

export default ErrorPage
