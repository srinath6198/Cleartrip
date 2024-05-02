import React, { useEffect, useState } from 'react'
import './searchFlight.css'

import flight from './image/flight-route.png'
import train from './image/train.png'
import hotel from './image/hotel-bed.png'
function SearchFlight() {

  const [values, setValues] =useState(
    {
      fromcity:'',
      tocity:'',
      departdate:'',
      returndate:'',
      adults:'',
      childrens:'',
      infants:''

    }
  )
  
    const[err,setErr]=useState({});

let validateError=(values)=>{
let err={}
if (values.fromcity==="") {
  err.fromcity="requied error"
}

if (values.tocity==="") {
  err.tocity="requied error"
} 
if (values.departdate==="") {
  err.departdate="requied error"
} 
if (values.returndate==="") {
  err.returndate="requied error"
} 
// if (values.adults==="") {
//   err.adults="requied error"
// } else {
//   values.adults=""
// }
return err;
}

  console.log(values);
  function handlechange(e){
    setValues({...values,[e.target.name]:e.target.value})
  }
  let handleSubmit=(e)=>{
    e.preventDefault(values)
    setErr(validateError(values))
}

useEffect(()=>{
  if(Object.keys(err).length === 0 &&  values.fromcity!="" && values.tocity !="" 
  && values.departdate !="" && values.returndate !="" && values.adults!="" 
  && values.childrens !="" && values.infants !=""){
    setValues({
      fromcity:'',
      tocity:'',
      departdate:'',
      returndate:'',
      adults:'',
      childrens:'',
      infants:''
      
    })
  }
},[err])

// Flight code
const[flightVal,setFlightVal]=useState(
    {
      
    }
)


const [searchFlight , setSearchFlight] = useState(true);
const [searchHotels , setSearchHotels] = useState(false);
const [searchTrain , setSearchTrain] = useState(false);

const hotelSearch = () =>{
  setSearchHotels(true)
  setSearchFlight(false)
  setSearchTrain(false)
}

const trainSearch = () =>{
 setSearchTrain(true)
 setSearchFlight(false)
 setSearchHotels(false)
}


const flightSearch = () =>{
  setSearchFlight(true)
  setSearchHotels(false)
  setSearchTrain(false)
}
  return (
    <div>
      <section className='searchFlight'>
      <div className='searchFlight-1'> 
           <a href="#" ><img src={flight} alt=""  onClick={flightSearch}/></a>
           <a href="#" ><img src={hotel} alt="" onClick={hotelSearch}/></a>
           <a href="#" ><img src={train} alt="" onClick={trainSearch}/></a>
           </div>

{searchFlight ? 
      <form onSubmit={handleSubmit}>
        <section className='searchFlight'>
           
           
           <div className='search-para'>
           <p>Search flights</p>
           </div>
           <div id='searchFlight-radio'>
            
            <input type="radio" />
            <label> Round trip</label>
            <input type="radio" />
            <label>One Way</label>
           </div>
           <div className='searchFlight-2'>
            <p>From</p>
            <input type="text" name='fromcity'value={values.fromcity} placeholder='Enter Any city or airport' onChange={handlechange} />
            {/* <p>{error.fromcity}</p> */}
           </div>
           <div className='searchFlight-2'>
            <p>To</p>
            <input type="text" name='tocity'value={values.tocity} placeholder='Enter Any city or airport'onChange={handlechange}/>
           </div>
           <div className='searchFlight-2'>
            <p>Depart on</p>
            <input type="date"  name='departdate' value={values.departdate} onChange={handlechange}/>
           </div>
           <div className='searchFlight-2'>
            <p>Return on</p>
            <input type="date" name='returndate'value={values.returndate} onChange={handlechange}/>
           </div>

           <div id='searchFlight-2'>
            <label>Adults</label>
            <select name='adults' value={values.adults} onChange={handlechange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <label>Children</label>
            <select name='childrens' value={values.childrens} onChange={handlechange}>
                <option value="0">0</option>
                <option value="1">1</option>
            </select>
            <label>Infants</label>
            <select name='infants' value={values.infants} onChange={handlechange}>
                <option value="0">0</option>
                <option value="1">1</option>
            </select>
            <button>Search Flights</button>
           </div>
           
        </section>
      </form> 
      : ""
}      
        {/* <SearchHotel/> */}
    {searchHotels ? 
      <form>
      <section className='searchFlight'>
      <div className='search-para'>
           <p>Search Hotel</p>
           </div>
         <div className='searchFlight-2'>
          <p>City</p>
          <input type="text" name='fromcity' placeholder='Enter the Destination'  />
          {/* <p>{error.fromcity}</p> */}
         </div>
        
         <div className='searchFlight-2'>
          <p>Check in</p>
          <input type="date"  name='departdate' />
         </div>
         <div className='searchFlight-2'>
          <p>Check out</p>
          <input type="date" name='returndate'/>
         </div>

         <div id='searchFlight-2'>
          <label>Adults</label>
          <select name='adults'  >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
          </select>
          <label>Children</label>
          <select name='childrens' >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
          </select>
          <button>Search Hotels</button>
         </div>
         
      </section>
      </form>
      :"" }
  
        {/* <SearchTrain/> */}
        
        <div>
{searchTrain ? 
    <form >

      <section className='searchFlight'>
         <div className='search-para'>
           <p>Search Train</p>
           </div>
         <div className='searchFlight-2'>
          <p>From</p>
          <input type="text" name='fromcity' placeholder='Enter the Destination'  />
          {/* <p>{error.fromcity}</p> */}
         </div>
         <div className='searchFlight-2'>
          <p>To</p>
          <input type="text" name='fromcity' placeholder='Enter the Destination'  />
         </div>
        
         <div className='searchFlight-2'>
          <label>Class</label> <br />
          <select name="" >
            <option value="Select Class">Select class</option>
          </select>
         </div>
         <div className='searchFlight-2'>
          <p>Date</p>
          <input type="date" name='returndate'/>
         </div>

         <div id='searchFlight-2'>
          <label>Adults</label>
          <select name='adults'  >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
          </select> 
          <label>Children</label>
          <select name='childrens' > 
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
          </select> <br /> <br /> <br />
          <label>Senior men</label>
          <select name='adults'  >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
          </select>
          <label>Senior women</label>
          <select name='adults'  >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
          </select>
          
          <button>Search Hotels</button>
         </div>
         
      </section>
    </form>
    : ""
}
  </div>
  </section>
    </div>
  )
}


export default SearchFlight