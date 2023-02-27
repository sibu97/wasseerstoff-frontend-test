import React from 'react'
import './earnings.css'
const Earnings = () => {
  return (<>
   <div className="earning_stats">
    <div className="users">
    <h6>All Users</h6>
    <span>Details</span>
    <i class="uil uil-angle-right right_icon"></i>
    </div>
    <div className="user_count">
        <h1>2,431,340</h1>
    </div>

    <div className="sidepanel_stats">
        <div className="total_earning">
       
        <span className="circle"> <i class="uil uil-arrow-growth growth_icon"></i></span>
        </div>
        <div className="earning_details">
        <p className='earning_title'>Total earning </p> 
       <span className='earning_details_count'> 540,549</span>
       </div>
    </div>
    {/* ============================Sales================================= */}
    <div className="sidepanel_stats_sales">
        <div className="total_sales">
       
        <i class="las la-crown sales_icon"></i>
        </div>
        <div className="earning_details">
        <p className='earning_title'>Sales </p> 
       <span className='earning_details_count'>1,205,677</span>
       </div>
    </div>

    {/* =========================================Purchase=================== */}

    <div className="sidepanel_stats_purchase">
        <div className="total_purchase">
        <i class="uis uis-graph-bar purchase_icon"></i>
       
        </div>
        <div className="earning_details">
        <p className='earning_title'>Purchase </p> 
       <span className='earning_details_count'> 48,430,039</span>
       </div>
    </div>
   </div>
{/* ==================================================Progress-Circles========================================== */}

{/* ============================================Active users================================================ */}
{/* <div className="user_circles"> */}
<div className="circlular_progress">
<div class="circle-wrap_active">
        <div class="circle_active">
          <div class="mask_active full_active">
            <div class="fill_active"></div>
          </div>
          <div class="mask_active half_active">
            <div class="fill_active"></div>
          </div>
          <div class="inside-circle_active"> 27% </div>
        </div>

        <div className="user_details">
            <p className="user_details_count">92,980</p>
            <span className="user_details_title">Active users</span>
        </div>
      </div>
{/* ===================================================New Users=================================================== */}
   <div class="circle-wrap_new">
        <div class="circle_new">
          <div class="mask_new full_new">
            <div class="fill_new"></div>
          </div>
          
          <div class="mask_new half_new">
            <div class="fill_new"></div>
          </div>
          <div class="inside-circle_new"> 67% </div>
          <div className="new_user_details">
            <p className="new_user_details_count">22,656</p>
            <span className="new_user_details_title">New users</span>
        </div>
        </div>
      </div>
      </div>
      {/* </div> */}
    </>
  )
}

export default Earnings