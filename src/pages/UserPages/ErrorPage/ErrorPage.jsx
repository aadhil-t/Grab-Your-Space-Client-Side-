import React from 'react'

function ErrorPage() {
  return (
    <div>
      <h1>404</h1>
      <p>Oh Sorry!</p>
      <p>We cannot find that page.!!</p>
      <Link to="/" >Go Back To Home</Link>
    </div>
  )
}

export default ErrorPage
