import React from 'react'
import './workcard.css'
function WorkCard({item}) {
  return (
      <div className='work-card'>
          <div className='company-details'>
                <img src={item.companyLogo} className='work-logo' alt="" />
                <div>
                    <label className='company-name'>{item.company}</label><br/>
                    <label className='work-post'>{item.designation}</label>
              </div>
               <div className='workdates'>
                <label>{item.dateJoining}---</label>
                <label>{item.dateEnd}</label>
            </div>
          </div>
        <div className='work-info'>
            <div className='work-description'>
                <p>{item.work}</p>
            </div>
        </div>
    </div>
  )
}

export default WorkCard
