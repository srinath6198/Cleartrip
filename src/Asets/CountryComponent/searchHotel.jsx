import React from 'react'
import hotel from './image/hotel-bed.png'

function SearchHotel() {
  return (
    <div>
    <form >

      <section className='searchFlight'>
         <div className='searchFlight-1'> 
         <a href="#"><img src={hotel} alt="" />
         <p>Find hotels worldwide</p>
         </a>
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
  </div>
  )
}

export default SearchHotel