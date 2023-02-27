import React,{useState,useEffect} from 'react'
import './bargrapg.css'
const Bargraph = () => {

    const [bars, setBars] = useState([]);

  useEffect(() => {
    const barData = [];
    for (let i = 0; i < 72; i++) {
      barData.push({
        height: Math.floor(Math.random() * (38 - 5 + 1) + 5),
        id: i
      });
    }
    setBars(barData);
  }, []);
  return (
    <>
    <div className="bargraph_container">
        <div className="bargraph_details">
            <p className="bargraph_sales_title">Sales Figures</p>
            <p className="bargraph_sales_value">$10,430</p>
              </div>
              
    <div style={{ display: "flex", transform: "scaleY(-1)" , marginLeft:"40.5px", cursor: 'pointer' }}>
                {bars.map(bar => (
                <div
                    key={bar.id}
                    style={{
                    width: "20px",
                    height: `${bar.height}px`,
                    backgroundColor: " #DBDFF1",
                    margin: " 0 2px 0 0",
                    
                    }}
                />
    ))}
                      
                
   </div>
                <div className="underline">
                    <div className="yellow_underline"></div>
                    <div className="pink_underline"></div>
                    <div className="purple_underline"></div>
                </div>
    
  </div>
  </>
  )
}

export default Bargraph