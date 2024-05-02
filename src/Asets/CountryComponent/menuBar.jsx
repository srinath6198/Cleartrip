import React, { useEffect, useState } from 'react'
import './menuBar.css';
import { useNavigate } from 'react-router-dom';

import dom from './image/world.png'
import International from './image/flight-route.png'
import hotel from './image/hotel-bed.png'
import Activities from './image/Activities.png'
import mobile from './image/mobile.png'
import partners from './image/partners.png'
import Array from '../array'



function MenuBar() {
   const[active,setActive]=useState(null);
   const [filterData, setFilterData] = useState([])
   const[array,setArray]=useState(Array)
   const [dataFiletered,setDataFiletered] = useState([]);
   const navigate = useNavigate();

   // const filterData=arrayData.filter((e)=>e.type == "Domestic")
   // console.log(filterData)

const menuName=[
   {
      fname:"Domestic Flights" ,
      img:dom,
      filter:"Domestic"
   },
   {
       fname:"International flights" ,
       img:International,
       filter:"International"
    },
    {
       fname:"Hotels" ,
       img:hotel,
       filter:"Hotels"
    },
    
    {
       fname:"Activities" ,
       img:Activities,
       filter:"Activities"
    },
    
    {
       fname:"Mobile" ,
       img:mobile,
       filter:"Mobile"
    },
    {
       fname:"Partners" ,
       img:partners,
       filter:"Partners"
    }  
];

   useEffect(()=>{
      const filterData1 = array.filter((e)=>e.type=="Domestic");
      setFilterData(filterData1);
      console.log(filterData);
   },[]);

   const filterdatas = () => {
      const filterData1 = array.filter((e)=>e.type=="Domestic");
      setFilterData(filterData1);
      setDataFiletered(filterData1);
      navigate('/', {state : dataFiletered})
      console.log(filterData);
   }
   
   
  return (
    <div>
        <section className='menu-box'> 
            <p>Get Offers on</p>
            <hr />
            {/* <button onClick={filterdatas}>click </button> */}
           <div className='menu-bar-a'>
            {
            menuName.map(e=>{
                return(
                  <div >
                    <button  onClick={()=>setActive(e.fname)} 
                    className={`${active===e.fname?"active":""}`} >
                    <span onClick={filterdatas}> <img src={e.img} alt="" />{e.fname}</span></button> 
                    </div>)
            })
            }
           
           </div>

        </section>
    </div>
  )
}

export default MenuBar;