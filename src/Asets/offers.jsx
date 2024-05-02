import './offers.css'
import MenuBar from './CountryComponent/menuBar'
import Header from './menuBar/header'
import Footer from './menuBar/footer'
import SearchFlight from './CountryComponent/searchFlight'
import Array from './array'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

// import img1 from './images/img1.png'
// import img2 from './images/img2.jpg'
// import img3 from './images/img3.jpg'
// import img4 from './images/img4.jpg'
// import img5 from './images/img5.jpg'
// import img6 from './images/img6.jpg'
// import img7 from './images/img7.jpg'
// import img8 from './images/img4.jpg'
// import img9 from './images/img9.png'
// import img10 from './images/img10.png'
// import img11 from './images/img11.jpg'
// import img12 from './images/img12.jpg'
// import img13 from './images/img13.png'
// import img14 from './images/img14.png'
// import img16 from './images/img16.jpg'
// import img17 from './images/img17.jpg'
// import img18 from './images/img18.png'
// import img19 from './images/img19.png'
// import img20 from './images/img20.png'
// import img21 from './images/img21.jpg'
// import img22 from './images/img22.png'
// import img23 from './images/img23.jpg'
// import img24 from './images/img24.jpg'
// import img25 from './images/img25.jpg'
// import img26 from './images/img26.png'
// import img27 from './images/img27.jpg'
// import img28 from './images/img28.png'
// import img29 from './images/img29.png'
// import img30 from './images/img30.png'
// import img31 from './images/img31.png'
// import img32 from './images/img32.jpg'
// import img33 from './images/img33.png'
// import img34 from './images/img34.png'
// import img35 from './images/img35.png'
// import img36 from './images/img36.jpg'
// import img37 from './images/img37.jpg'
// import img38 from './images/img38.jpg'
// import img39 from './images/img39.png'
// import img40 from './images/img40.jpg'
// import img41 from './images/img41.png'
// import img42 from './images/img42.png'
// import img43 from './images/img43.png'
// import img44 from './images/img44.jpg'
// import img45 from './images/img45.png'
// import img46 from './images/img46.jpg'
// import img47 from './images/img47.png'


// const content=[
//   {
//     img:img1,
//     h2:"Flat 15% Off Upto INR 7,500/- on International Hotels",
//     p:"Flat 15% Off Upto INR 7,500/- on International Hotels",
//     button:"Know More",
//     span:"Expires in",
//     p1:"10 months 2 weeks",
    

//   },
//   {
//     img:img2,
//     h2:"Holiday Special Offer from Malaysia Airlines!  Rs12,999 in Economy Class!",
//     p:"Holiday Special Offer from Malaysia Airlines!",
//     button:"Know More",
//     span:"Expires in",
//     p1:"1 months 4 weeks",
//   },
//   {
//     img:img3,
//     h2:"Star Air launches new station & flight!!",
//     p:"Fly from Ajmer to Lucknow, Delhi (Hindon, Ghaziabad) at the starting ",
//     button:"Know More",
//     span:"Expires in",
//     p1:"10 months 2 weeks",

//   },
//   {
//     img:img4,
//     h2:"New Flight Routes by Virgin Atlantic starting at just Rs12,999 depart  ",
//     p:"Daily flights to London are about to depart with Virgin Atlantic",
//     button:"Know More",
//     span:" .",
//     p1:"",
//   },
//   {
//     img:img5,
//     h2:"Fly to Kuala Lumpur AirAsia Flights & Get 75% off on Baggage*",
//     p:"Get 75% off on the Baggage with  AirAsia ",
//     button:"Know More",
//     span:"Expires in",
//     p1:"3 months 8 hours",
//   },
//   {
//     img:img6,
//     h2:"Fly to Hyderabad from Surat with StarAir  ",
//     p:"Fly with convenience between Hyderabad & Surat business class ",
//     button:"Know More",
//     span:"Expires in ",
//     p1:" 2 weeks 8 hours",
//   },
//   {
//     img:img7,
//     h2:"Fly Visakhapatnam to Kuala Lumpur with AirAsia!",
//     p:"Enjoy Discounted airfare on Cleartrip and make your travel experience... ",
//     button:"Know More",
//     span:"Expires in",
//     p1:" 8 hours 37 min",
//   },
//   {
//     img:img8,
//     h2:"Fly direct from Mumbai to Tashkent with Uzbekistan Airways.",
//     p:"Uzbekistan Airways launches direct flights between Mumbai  ",
//     button:"Know More",
//     span:"Expires in ",
//     p1:" 2 weeks 8 hours",
//   },
//   {
//     img:img9,
//     h2:"Avail attractive discounted fares from India on Ethiopian Airlines.",
//     p:"Avail attractive discounted fares from India on Ethiopian Airlines.",
//     button:"Know More",
//     span:"Expires in",
//     p1:" 8 hours 37 min",
//   },
//   {
//     img:img10,
//     h2:"Fly to Abu Dhabi and get exclusive discounts with AirArabia",
//     p:"Flights to Abu Dhabi with AirArabia and get exclusive discounts!",
//     button:"Know More",
//     span:"Expires in ",
//     p1:" 1 week 1 day",
//   },
//   {
//     img:img11,
//     h2:"Business Class Discounted fare and offer on Saudia Airlines….",
//     p:"Business Class Discounted fare and offer on Saudia Airlines…",
//     button:"Know More",
//     span:"Expires in",
//     p1:"2 weeks 6 hours",
//   },
//   {
//     img:img12,
//     h2:"Up to ₹5000 off on Star Bookings Air Flights!",
//     p:"Get up to ₹5,000 off on Star Air Domestic Flight Bookings!",
//     button:"Know More",
//     span:"Expires in ",
//     p1:"1 month 2 weeks",
//   },
//   {
//     img:img13,
//     h2:"Now fly to Paris,5x weekly direct from Mumbai with Vistara!!!",
//     p:"Now fly to Paris,5x weekly direct from Mumbai with Vistara!!!",
//     button:"Know More",
//     span:"Expires in",
//     p1:" 1 month 2 weeks",
//   },
//   {
//     img:img13,
//     h2:"Enjoy 14x weekly Flights on Vistara between Mumbai",
//     p:"Now fly to Singapore from Mumbai 14x weekly Flight on Vistara",
//     button:"Know More",
//     span:"Expires in",
//     p1:" 1 month 2 weeks",
//   },
//   {
//     img:img14,
//     h2:"Fly with Emirates and get up to ₹10,000 off!",
//     p:"Use Coupon Code : CTEKSPL and get exclusive discounts!",
//     button:"Know More",
//     span:"Expires in ",
//     p1:"1 month 2 weeks",
//   },
//   {
//     img:img13,
//     h2:"Fly to Doha 4x weekly direct from Mumbai with Vistara",
//     p:"Enjoy direct flights from Mumbai to Doha with Return starting from Rs. 30599 on...",
//     button:"Know More",
//     span:"Expires in",
//     p1:" 10 month 2 weeks",
//   },
//   {
//     img:img13,
//     h2:"Fly with Vistara and enjoy a special vouchers",
//     p:"Fly to Singapore and enjoy special vouchers at Changi Airport worth ",
//     button:"Know More",
//     span:"Expires in",
//     p1:"1 month 1 week",
//   },
//   {
//     img:img16,
//     h2:"Air India launches is non stop flights between Delhi to Phuket!",
//     p:"Fly to Singapore and enjoy the flight Direct flights from non stop Delhi to Phuket!",
//     button:"Know More",
//     span:"Expires in",
//     p1:"",
//   },
//   {
//     img:img17,
//     h2:"Akasa launches daily flights from Chennai & Bengaluru to Port Blair!",
//     p:"New Flights Launched! Chennai & Bengaluru to Port",
//     button:"Know More",
//     span:"Expires in",
//     p1:" 10 month 2 weeks",
//   },
//   {
//     img:img13,
//     h2:"Flights between Mumbai & Mauritius on Vistara",
//     p:"Fly to Mauritius and enjoy the special fare with VIstara!",
//     button:"Know More",
//     span:"Expires in",
//     p1:"8 month 2 week",
//   },
//   {
//     img:img18,
//     h2:"Singapore Airlines Specical offer!",
//     p:"Singapore Airlines Special Roundtrip offer! Flights from India to China...!",
//     button:"Know More",
//     span:"Expires in",
//     p1:"10 months 1 week",
//   },
//   {
//     img:img19,
//     h2:"Air Arabia launches new Route.",
//     p:"Air Arabia is excited to introduce new flights to Athens (ATH) from Mumbai",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img20,
//     h2:"SpiceJet launches new direct flights from Surat to Pune!",
//     p:"SpiceJet New Direct Flights Launched!",
//     button:"Know More",
//     span:"Expires in",
//     p1:"",
//   },
//   {
//     img:img21,
//     h2:"NutraBay WC rewards.",
//     p:"NutraBay WC rewards introduce new flights to Athens (ATH) ",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img22,
//     h2:"Book a business class trip to/from from Gulf region & Unlock a Domestic Ticket* with Air India",
//     p:"Air India luxurious Business Class Offwe",
//     button:"Know More",
//     span:"Expires in",
//     p1:"",
//   },
//   {
//     img:img23,
//     h2:"Book Amritsar to Kuala Lumpur AirAsia Flights & Get 20 Kg free Baggage*.",
//     p:"Get 20 Kg free Baggage with AirAsia",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img24,
//     h2:"Enjoy New Flights between Hyderabad and Pune wth Akasa Air",
//     p:"Enjoy New Flights between Hyderabad and Pune wth Akasa Air!!!",
//     button:"Know More",
//     span:"Expires in",
//     p1:"10 months 1 week",
//   },
//   {
//     img:img21,
//     h2:"HDFC Bank Net Banking EMI Transaction Assured Rewards",
//     p:"rewards from Flipkart, Hindustan Petroleum, Myntra and many more.",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img25,
//     h2:"Air India Flights from Kochi to the world",
//     p:"Enjoy Flights from Kochi to the world via Delhi and Mumbai with Air India.",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img25,
//     h2:"Air India Flights from Kozhikode to the World via Mumbai",
//     p:"Air India Flights from Kozhikode to the World via Mumbai!!!",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img25,
//     h2:"Enjoy Flights from Trivandrum to the World",
//     p:"Enjoy Flights from Trivandrum to the World via Delhi and Mumbai with Air India.",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img26,
//     h2:"​IndiGo launches new Flights to Jaisalmer!",
//     p:"Enjoy New Flights Launched!",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img27,
//     h2:"Exclusive Fares + Additional discount up to ₹5,000 on Singapore Airlines!",
//     p:"Use Coupon Code: CTSIN",
//     button:"Know More",
//     span:"Expires in",
//     p1:" 1 month 2 weeks",
//   },
//   {
//     img:img28,
//     h2:"Vistara additional frequencies!",
//     p:"Vistara pleased to introduce additional frequencies on Domestic routes",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img29,
//     h2:"Destination of the Week! Get up to 12% off on Flights to London! ",
//     p:"Use Coupon Code: CTDOTW",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img30,
//     h2:"Spicejet launches New Flights! Fly from Hyderabad to Madurai, Colombo, Pune,... ",
//     p:"",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img31,
//     h2:"Telebooking on cleartrip",
//     p:"call us at +91-95953 33333",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img32,
//     h2:"Get up to 20% off* + extra ₹ 5,000 off on AirAsia International Flights! ",
//     p:"Use Code: CTAIRASIA",
//     button:"Know More",
//     span:"Expires in",
//     p1:" 2 days 11 hours",
//   },
//   {
//     img:img33,
//     h2:"buses CTBUS offer ",
//     p:"CTBUS: Flat 8% off on Bus Bookings",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img34,
//     h2:"Fare dropped on RwandAir!!! ",
//     p:"Fare droped on RwandAir!!! Fly between Mumbai & Johannesburg Starting fares...",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img25,
//     h2:"Air India launches non stop flights between Mumbai and London!!!",
//     p:"Connecting 15 cities from India via Mumbai!",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img35,
//     h2:"Air Arabia Special Offer!",
//     p:"Use Coupon Code : CTAIRARABIA",
//     button:"Know More",
//     span:"Expires in",
//     p1:"1 month 2 weeks ",
//   },
//   {
//     img:img36,
//     h2:"IndiGo launches Direct flights!",
//     p:"IndiGo launches Direct flights between Delhi & Baku!!!",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img33,
//     h2:"25% off on Buses with Canara Bank",
//     p:"CTCANARA:Flat 25% off on Buses with Canara Bank Mastercard Debit Cards",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img36,
//     h2:"Indigo launches new flights!",
//     p:"Indigo launches new flights!",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img37,
//     h2:"Alliance Air launches New direct Flights between",
//     p:"Alliance Air launches New Direct Flights between Prayagraj & Kolkata!!!",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img25,
//     h2:"Air India added new routes from Delhi to Amsterdam!",
//     p:"New Routes Added !",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img28,
//     h2:"Special Private Fare by Vistara",
//     p:"Special Private Fare by Vistara",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img36,
//     h2:"New Flights Launched!!!",
//     p:"between Lucknow & Abu Dhabi!",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img33,
//     h2:"Flat 20% instant discount Using PNB Credit Cards",
//     p:"Flat 20% instant discount Using PNB Credit Cards",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img33,
//     h2:"Travel with bus and get 20% off on Hotels",
//     p:"Travel with bus and get 20% off on Hotels",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img33,
//     h2:"CTRBL:Flat 15% off on Bus Bookings with RBL Bank Credit Cards",
//     p:"CTRBL:Flat 15% off on Bus Bookings with RBL Bank Credit Cards",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img33,
//     h2:"FEDBUS: Flat 10% off on Bus Bookings Using Federal Bank Cards",
//     p:"FEDBUS: Flat 10% off on Bus Bookings Using Federal Bank Cards",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img33,
//     h2:"AUCC: Flat 15% instant discount Using AU Bank Credit Cards",
//     p:"AUCC: Flat 15% instant discount Using AU Bank Credit Cards",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img33,
//     h2:"SBICC: Flat 10% off instant discount Using SBI Bank Credit Cards",
//     p:"IDFCDC:Flat 25%off Using IDFC First Bank Bank Debit Cards",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img33,
//     h2:"IDFCDC:Flat 25%off Using IDFC First Bank Bank Debit Cards",
//     p:"IDFCDC:Flat 25%off Using IDFC First Bank Bank Debit Cards",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img36,
//     h2:"Indigo Airlines New Routes",
//     p:"Indigo Airlines launches Daily direct Flight's!!!",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img38,
//     h2:"Akasa Air!",
//     p:"Fly India’s newest and most dependable airline at affordable fares Over 900...",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img33,
//     h2:"Best Price Guaranteed On Cleartrip Buses",
//     p:"Best Price Guaranteed On Cleartrip Buses",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img39,
//     h2:"Air India new non-stop flights.",
//     p:"Fly with Air India and enjoy new non-stop flights",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img40,
//     h2:"Avail special fares ON Nepal Airlines",
//     p:"Travel to Nepal from Mumbai with Nepal Airlines",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img31,
//     h2:"Low Fare Alert! Domestic Airfare starting at ₹1,499*!",
//     p:"Low Fare Alert!",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img33,
//     h2:"International Hotel Offers on Big Travel Sale !",
//     p:"International Hotel Offers on Big Travel Sale !",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img33,
//     h2:"IPL 2023 Schedule",
//     p:"IPL 2023 Schedule",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img41,
//     h2:"Get up to 20% off per booking on Air India flights",
//     p:"Get up to 20% off per booking on Air India flights from Europe/America/Canada",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img33,
//     h2:"Flipkart Plus Rewards From Cleartrip Hotels",
//     p:"Flipkart Plus Rewards From Cleartrip Hotels",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img33,
//     h2:"Myntra Elite Insider Rewards From Cleartrip Hotels",
//     p:"Myntra Elite Insider Rewards From Cleartrip Hotels",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img33,
//     h2:"Myntra Icon Insider Reward from Cleartrip Hotels",
//     p:"Myntra Icon Insider Reward from Cleartrip Hotels",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img33,
//     h2:"Assured rewards From Cleartrip",
//     p:"Assured rewards From Cleartrip",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img33,
//     h2:"Myntra Icon Insider Reward from Cleartrip",
//     p:"Myntra Icon Insider Reward from Cleartrip",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img33,
//     h2:"Flipkart Plus Rewards From Cleartrip Hotels",
//     p:"Flipkart Plus Rewards From Cleartrip Hotels",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img33,
//     h2:"Myntra Elite Insider Rewards From Cleartrip",
//     p:"Myntra Elite Insider Rewards From Cleartrip",
//     button:"Know More",
//     span:"Expires in",
//     p1:" ",
//   },
//   {
//     img:img42,
//     h2:"Air Mauritius Extra Baggage",
//     p:"Book Air Mauritius and Enjoy Extra Baggage Allowance !!",
//     button:"Know More",
//     span:"Expires in",
//     p1:"  1 week 6 days",
//   },
//   {
//     img:img43,
//     h2:"Qantas Sale",
//     p:"Book now with Qantas and Get a Special Roundtrip fare at Rs.53,000",
//     button:"Know More",
//     span:"Expires in",
//     p1:" 1 week 6 days ",
//   },
//   {
//     img:img33,
//     h2:"Get Upto 25% off on Hotels - CTHOTEL",
//     p:"Get Upto 25% off on Hotels - CTHOTEL",
//     button:"Know More",
//     span:"Expires in",
//     p1:"  1 week 6 days",
//   },
//   {
//     img:img44,
//     h2:"Get up to ₹2,500 off on Air India Domestic Flight Bookings!",
//     p:"Use Coupon Code : CTAISPL",
//     button:"Know More",
//     span:"Expires in",
//     p1:"  1 week 6 days",
//   },
//   {
//     img:img45,
//     h2:"FREE Additional Baggage on Ethiopian Airlines",
//     p:"Book Now and Get one Additional Piece of Baggage on Ethiopian Airlines!!!",
//     button:"Know More",
//     span:"Expires in",
//     p1:"  1 month 2 weeks",
//   },
//   {
//     img:img33,
//     h2:"FESTIVE - Flat 20% Off Upto INR 10,000/- on Hotels",
//     p:"FESTIVE - Flat 20% Off Upto INR 10,000/- on Hotels",
//     button:"Know More",
//     span:"Expires in",
//     p1:"",
//   },
//   {
//     img:img46,
//     h2:"Everyday Savings!",
//     p:"Get up to Rs.5,000 off on Flights with Bank & Partner offers!",
//     button:"Know More",
//     span:"Expires in",
//     p1:"",
//   },
//   {
//     img:img47,
//     h2:"App Exclusive! Flat 12% off on your First Domestic Flight booking!",
//     p:"Use Coupon Code : CTAPP",
//     button:"Know More",
//     span:"Expires in",
//     p1:"",
//   },
// ];


//


// const filterarray =Array.filter((e)=>e.type=="Domestic")
function Offers({domes}) {
  const[arrayData,setArrayData]=useState(Array);
  const location = useLocation();
  const [dataFiletered,setDataFiletered] = useState(location.state);
  
  // useEffect(()=>{
    // console.log(dataFiletered)
  // },[arrayData])
// console.log(props)
  return (
    <section>
    <Header/>
    <section className='office-flex'>
        <div id='menu'>
        <MenuBar domes={domes}/>
        </div>
        <section className='offers-box'>
          <h1>All offers and deals</h1>
          {/* {
            dataFiletered.map((e)=>{
              return(
                <>
                <p>{e.h2}</p>
                </>
              )
            })
          } */}

          <div className='offers-box-one'>

            <div className='offers-box-one-1'>
            
              {/* <a href="#"><img src={img1} alt="" /></a>
              <h2>Flat 15% Off Upto INR 7,500/- on International Hotels</h2>
              <p>Flat 15% Off Upto INR 7,500/- on International Hotels</p> <br />
              <button>Know More</button> 
              <p><span>Expires in</span> 10 months 2 weeks</p> */}
              {
               arrayData.map(e=>{
                  return(
                    <>
                    <div className='offers-box-one-1-1'>
                     <a href="#"><img src={e.img} alt="" /></a>
                     <h2>{e.h2}</h2>
                     <p>{e.p}</p> 
                     <button>{e.button}</button> 
                     <p><span>{e.span}</span>{e.p1}</p>
                     </div>
                     </>
                    
                  )
                })
              }
            </div>

            <div className='offers-box-one-1'>
            {/* <a href="#"><img src={img2} alt="" /></a>
              <h2>Holiday Special Offer from Malaysia Airlines! Enjoy return fares starting at just Rs12,999 in Economy Class!</h2>
              <p>Holiday Special Offer from Malaysia Airlines!</p>
              <button>Know More</button>
              <p><span>Expires in</span> 10 months 2 weeks</p> */}
            </div>
          </div>
          
        </section>
        <div id='search-flights'>
        <SearchFlight/>
        </div>
    </section>
    <Footer/>
    </section>
  )
}

export default Offers