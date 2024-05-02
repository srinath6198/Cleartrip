import React from 'react'
import train from './image/train.png'

function SearchTrain() {
  return (
    <div>
    <form >

      <section className='searchFlight'>
         <div className='searchFlight-1'> 
         <a href="#"><img src={train} alt="" />
         <p>Search Indian Railways trains</p>
         </a>
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
  </div>
  )
}

export default SearchTrain