import React from 'react'

export default class Footer extends React.Component {

  render () {
    return ( 
      <div className="logos">
        <img style={{height:'60px', margin:'10px -2px 0px -5px'}} src="https://cdn.worldvectorlogo.com/logos/react.svg" className="image" alt=''/>
        <img style={{height:'60px',margin: '10px -5px 0px -2px'}} src="http://www.discovermeteor.com/images/blog/apollo-logo.png" className="image" alt=''/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1024px-GraphQL_Logo.svg.png" className="image" alt=''/>
        <img  src="http://graphcool-random.s3.amazonaws.com/images/logo-green.svg" className="image" alt=''/>
      </div>
    )
  }
}