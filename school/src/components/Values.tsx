import React from 'react'
import '../css/Values.scss'
const Values = () => {
    const Values = [
        {
            value: 'Honesty',
            valueDescription: 'We tell the truth and act with integrity. We are trustworthy in words and actions.'
        },

        {
            value: 'Responsibility',
            valueDescription: 'We own our tasks and choices. We meet deadlines and follow through on commitments.'
        },

        {
            value: 'Excellence',
            valueDescription: 'We strive to do our best work. We pay attention to detail and keep improving.'
        },

        {
          value: 'Accountability',
          valueDescription: 'We accept feedback and take responsibility for results. We learn from mistakes.'
        },

        {
          value: 'Devotion',
          valueDescription: 'We are committed to our school, our team, and our purpose. We show up and stay dedicated.'
        },
    ]
  return (
    <div className='value-section'>
      <div className="page-width">
      <header className='value-section-header'>Core Values</header>
        <div className="value-container ">
        {
            Values.map((data, index)=>{
                return <div key={index} className='value  autoShow'>
                    <header className='value-header'>{data.value}</header>
                    <p>{data.valueDescription}</p>
                </div>
            })
        }
        </div>
      </div>
    </div>
  )
}

export default Values
