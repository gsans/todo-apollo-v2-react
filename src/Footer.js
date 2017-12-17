import React from 'react'

export default class Footer extends React.Component {

  render () {
    return ( 
      <div className="footer">
        <div className="subtitle">Made in Reykjavik by &nbsp;
          <div title="Gerard Sans">
            <a href="https://twitter.com/gerardsans" target="_blank" rel="noopener noreferrer"><img src="https://pbs.twimg.com/profile_images/796861611030024192/pVl1eq7f_400x400.jpg" alt="" width="24" height="24" className="profile"/></a>
          </div>
        </div>
      </div>
    )
  }
}