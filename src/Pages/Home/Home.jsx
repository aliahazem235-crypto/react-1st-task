import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import Card from '../../components/Card/Card';

export default function Home() {
  const cards = [
    {
      img: "/performance.png",
      id: 1,
      h2: "Maximum Performance",
      p: "Sample text. Click to select the Text Element.",
    },
    {
      img: "/secureData.png",
      id: 2,
      h2: "Fully Secure Data Centers",
      p: "Sample text. Click to select the Text Element.",
    },
    {
      img: "/attackprevention.png",
      id: 3,
      h2: "DDos Attack Prevention",
      p: "Sample text. Click to select the Text Element.",
    },
    {
      img: "/bandwidth.png",
      id: 4,
      h2: "Get Unmetered Bandwidth",
      p: "Sample text. Click to select the Text Element.",
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="hero">
        <div className="container heroContent">
          <div className="left">
            <p>Don't miss limited-time savings: <span>Savings 20%</span></p>
            <h1>Everything for Your Site to Succeed</h1>
            <div>
              <button>Get Started</button>
              <p>Starting at only <span>$4.75/mo*</span></p>
            </div>
          </div>
          <div className="right">
            <img src="/website.png" alt="wbsite" />
          </div>
        </div>
      </div>

      <div className="hostingPlanSection">
        <div className="container">
          <h1>Pick your perfect web hosting plan</h1>
          <div className="cards">
            {cards.map(({ img, id, h2, p }) => {
              return <Card img={img} key={id} h2={h2} p={p} />;
            })}
          </div>
        </div>
      </div>


      <div className="whoWeAre">
        <div className=" Experience">
          
            <h2>20+ Years Experience</h2>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
            <button>Get Started</button>
          </div>
          <div className="info ">
            <h2>Who We Are</h2>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
            <button>Get Started</button>
          </div>
        </div>



        <div className='support'>
          <div className="container supportSection">
          <div className="left">
            <img src="/support.png" alt="support" />
            </div>
         
          <div className="right">
            
            <h1>24/7/365 Support</h1>
            <p>Sample text. Click to select the Text Element. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <button>Get Started</button>
               </div>
          
        </div>
        </div>
      </div>
    
  )
}

