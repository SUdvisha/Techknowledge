
import "C:/Users/udvis/OneDrive/Desktop/Techknowledge/client/src/components/Footer/Footer.css" 
import React from 'react'
function Footer() {
  return (
    <div className=' bg-black pq'>
      <div className=' text-light text-center'>
        <p className="uu text-white fw-4">FOLLOW US ON</p>
      </div>
      <div>
        <ul className="nav justify-content-center" >
          <li className='nav-item justify-content-center'>
            <img src="https://img.freepik.com/premium-vector/social-media-icon-illustration-facebook-facebook-icon-vector-illustration_561158-2134.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1711670400&semt=ais" className=" jj rounded-circle d-block mt-1 mx-auto footer"></img>
            <p className="text-warning  mt-2 mx-5 we name">Techknowledge_official</p>
          </li>
          <li className='nav-item justify-content-center'>
            <img src="https://img.freepik.com/free-vector/instagram-background-gradient-colors_23-2147823814.jpg" alt="" className='jj rounded-circle d-block mx-auto mt-1 footer' />
            <p className="text-warning  mt-2 my-3  we name ">Techknowledge_official</p>
          </li>
         
          <li className='nav-item justify-content-center'>
            <img src="https://i.pinimg.com/originals/7d/44/d5/7d44d55ead7dda48bd95632d92fb259d.png"  alt="" className='jj rounded-circle d-block mx-auto mt-1 footer'></img>
            <p className="text-warning mt-2 we  m-5 name">Techknowledge_official</p>
          </li>
        </ul>
        
      </div>
    </div>
  )
}

export default Footer