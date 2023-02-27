import React from 'react'
import './homedata.css'
const HomeData = () => {
  return (
    <>
    <div className='tooltips_map'>
      <div className="toottip_icon"> 
      <div className="icon_container">
      <i class="las la-landmark tooltipicon"></i>
      </div>
      </div>
      <div className="tootip_details">
        <div className="tooltip_city_details">
        <p className="tooltip_city">Chicago</p>
        <span className="tooltip_numbers">98,320,300</span>
        </div>
      </div>
      <div className="tooltip_trangle"></div>
    </div>


    {/* ==============================Berlin============================== */}


    <div className='tooltips_map_berlin'>
      <div className="toottip_icon_berlin"> 
      <div className="icon_container_berlin">
      <i class="las la-city tooltipicon_berlin"></i>
      </div>
      </div>
      <div className="tootip_details_berlin">
        <div className="tooltip_city_details_berlin">
        <p className="tooltip_city_berlin">Berlin</p>
        <span className="tooltip_numbers_berlin">76,541,106</span>
        </div>
      </div>
      <div className="tooltip_trangle_berlin"></div>
    </div>

    {/* ============================Manaus====================================== */}

    <div className='tooltips_map_manaus'>
      <div className="toottip_icon_manaus"> 
      <div className="icon_container_manaus">
      < i class="las la-warehouse tooltipicon_manaus"></i>
      </div>
      </div>
      <div className="tootip_details_manaus">
        <div className="tooltip_city_details_manaus">
        <p className="tooltip_city_manaus">Manaus</p>
        <span className="tooltip_numbers_manaus">12,320,300</span>
        </div>
      </div>
      <div className="tooltip_trangle_manaus"></div>
    </div>
    {/* ================================================= Giza========================= */}



    <div className='tooltips_map_giza'>
      <div className="toottip_icon_giza"> 
      <div className="icon_container_giza">
      <i class="las la-hotel tooltipicon_giza"></i>
      </div>
      </div>
      <div className="tootip_details_giza">
        <div className="tooltip_city_details_giza">
        <p className="tooltip_city_giza">Giza</p>
        <span className="tooltip_numbers_giza">10,547,980</span>
        </div>
      </div>
      <div className="tooltip_trangle_giza"></div>
    </div>

    {/* =============================================== Shanghai======================== */}

    <div className='tooltips_map_shanghai'>
      <div className="toottip_icon_shanghai"> 
      <div className="icon_container_shanghai">
      <i class="las la-vihara tooltipicon_shanghai"></i>
      </div>
      </div>
      <div className="tootip_details_shanghai">
        <div className="tooltip_city_details_shanghai">
        <p className="tooltip_city_shanghai">Shanghai</p>
        <span className="tooltip_numbers_shanghai">239,570,110</span>
        </div>
      </div>
      <div className="tooltip_trangle_shanghai"></div>
    </div>

    {/* ===============================================Queensland============================= */}

    <div className='tooltips_map_queensland'>
      <div className="toottip_icon_queensland"> 
      <div className="icon_container_queensland">
      <i class="las la-building tooltipicon_queensland"></i>
      </div>
      </div>
      <div className="tootip_details_queensland">
        <div className="tooltip_city_details_queensland">
        <p className="tooltip_city_queensland">Queensland</p>
        <span className="tooltip_numbers_queensland">6,097,321</span>
        </div>
      </div>
      <div className="tooltip_trangle_queensland"></div>
    </div>

    </>
  )
}

export default HomeData