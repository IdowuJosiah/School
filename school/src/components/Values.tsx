import React from 'react'
import '../css/Values.scss'
const Values = () => {
    const Values = [
        {
            value: 'Respect',
            valueDescription: 'Lorem ipsum dolor sit amet consectetur. Nunc varius viverra suscipit suspendisse adipiscing odio enim ullamcorper.'
        },

        {
            value: 'Integrity',
            valueDescription: 'Lorem ipsum dolor sit amet consectetur. Nunc varius viverra suscipit suspendisse adipiscing odio enim ullamcorper.'
        },

        {
            value: 'Excellence',
            valueDescription: 'Lorem ipsum dolor sit amet consectetur. Nunc varius viverra suscipit suspendisse adipiscing odio enim ullamcorper.'
        },


    ]
  return (
    <div className='value-section'>
      <div className="page-width">
      <header className='value-section-header'>Core Values</header>
        <div className="value-container">
        {
            Values.map((data, index)=>{
                return <div key={index} className='value'>
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
