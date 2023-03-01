import React from 'react'
import '../styles/sidemenubaritem.css'

export default function SideMenuBarItem(props) {
  return (
    <div className='side-menu-bar-item  d-flex align-items-center' onClick={props.function}>
        <div className='row w-100 gx-0 '>

           <div className='col-lg-2  col-0'>
                 
            </div>
            <div className='col-lg-2 d-flex align-items-center justify-content-end justify-content-lg-center px-3 px-lg-2 col-4 '>
                 <img src={props.img} className=''/>
            </div>
            
            <div className='col-lg-8  d-flex  item col-8 px-lg-3 '>
                {props.item}
            </div>
            
        </div>
    </div>
  )
}
