import React from 'react'
import { useState } from 'react'

// import {} from '../home/Home.css'
// import { useNavigate } from 'react-router-dom'
import 'C:/Users/udvis/OneDrive/Desktop/Techknowledge/client/src/components/Home/Home.css'
import imgs from 'C:/Users/udvis/OneDrive/Desktop/Techknowledge/client/src/components/images/tech.png'

function Home() {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    message: "",
  });
  const inputChange = (e) => {
    const { name, value } = e.target;
    return setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };



  //   let navigate=useNavigate()
  // function handleRegisterClick(){
  //   navigate('/register')
  // }
  // function handleLoginClick(){
  //   navigate('/login')
  // }
  return (
    <div>
      <div style={{minHeight:'45vh'}} className='bg-dark-subtle bg-gradient d-flex justify-content-between align-items-center'>
      <div>
        <img src={imgs} alt='' className='img2 ' />
      
  
      </div>
      <div className='text-center mx-4 fs-5 display-3'>
        <p className='ab mx-5 display-5 fs-4 fw-medium'><span className=' fw-medium kk'>Welcome to</span><br></br><span className='fw-bold nn text-danger'> Tech-Knowledge </span><br></br>TechKnowledge offers a diverse range of courses across multiple disciplines. Our platform provides authentic user reviews, empowering learners to make informed choices. Explore and select the best learning experience tailored to your needs.</p>
            {/* <div className='mt-3'>
            <button className='btn btn-dark mx-3 fw-semibold' onClick={handleRegisterClick}>Register</button>
            <button className='btn btn-dark mx-3 fw-semibold' onClick={handleLoginClick}>Login</button>
            </div> */}
      </div>
      
    </div>
    <div>
    <div>
    <section id="AboutUs">
    <div>
        <h1 className='text-center pt-5  text-primary ll'>About Us!</h1>
      </div>
      
      <div className="container mt-5">
        
  <div className="row">
    <div className="col-md-3">
      <div className="card cc card1 h-100">
        <div className="card-body">
          <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/course-1648742-1400672.png" className='logo'></img>
          
          <h5 className="card-title oo bg-dark text-white">Diverse Range of Courses</h5>
          
          <p className="card-text text-dark">Explore our extensive catalog of courses covering a wide range of topics, from programming languages like Python,JavaScript to cutting-edge technologies such as AI and blockchain. Whether you're a beginner looking to dip your toes into the world of technology or an experienced professional seeking to advance your skills, we have something for everyone.</p>
        </div>
      </div>
    </div>
    <div className="col-md-3 ">
      <div className="card cc bg-gradient bg-secondary-subtle h-100">
        <div className="card-body">
        <img src="https://cdn-icons-png.flaticon.com/512/1591/1591045.png" className='logo1'></img>
          <h5 className="card-title oo bg-dark text-white">Authentic User Reviews</h5>
          <br></br>
          <p className="card-text text-dark">We understand that choosing the right course can be daunting. That's why we provide authentic user reviews to help you make informed decisions. Hear from real learners who have completed our courses and gain insights into their learning experiences.</p>
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <div className="card cc card1 h-100">
        <div className="card-body">
        <img src="https://cdn4.iconfinder.com/data/icons/gamification-flat/64/learning-idea-knowledge-solve-experience-512.png" className='logo2'></img>
          <h5 className="card-title bg-dark text-white oo">Tailored Learning Experience</h5>
          
          <p className="card-text text-dark">At TechKnowledge, we believe in personalized learning. Tailor your learning experience to suit your needs and preferences. Whether you prefer self-paced learning or live instructor-led sessions, we have flexible options to accommodate your schedule and learning style.</p>
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <div className="card cc bg-gradient bg-secondary-subtle h-100">
        <div className="card-body">
          
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ZYWtElQ5_k7GdCzVRuIbYa6xWcAnhxnW4cQozf4r6w&s" className='logo1'></img>
          <h5 className="card-title oo bg-dark text-white">Join Our Community</h5>
          <br></br>
          <p className="card-text text-dark">Join our vibrant community of learners, educators, and industry experts. Connect with like-minded individuals, participate in discussions, and stay updated on the latest trends and developments in the tech world. Together, we can embark on a journey of continuous learning and growth.</p>
        </div>
      </div>
    </div>
    
  </div>
  
  
</div>
</section>
</div>

</div>

<div>
    <br></br>
        <h1 className='text-center pt-5 text-danger  ll ' >Contact Us!</h1>
      </div>
      <section id="ContactUs">
      {/* <div className="container xx mt-5">
        <section id="ContactUs">
      <div className="row">
        <div className="col-md-4">
          <div className="contact-card">
            <div className="card-body">
              <div className="contact-info-item">
                <img src='https://i.pinimg.com/originals/af/dd/db/afdddbf673d640a835dad39ebd70ace0.png' className='contact-icon'alt="Mobile Icon" />
                <br></br>
                <br></br>
                <p className='contact-details'><span className="pp">Phone: </span>+1234567890</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="contact-card">
            <div className="card-body">
              <div className="contact-info-item">
                <img src='https://cdn-icons-png.flaticon.com/512/906/906377.png' className='contact-icon'alt="Telegram Icon" />
                <br></br>
                <br></br>
                <p className='contact-details1'><span className="pp">Telegram: </span>@yourtelegram</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="contact-card">
            <div className="card-body">
              <div className="contact-info-item">
                <img src='https://static-00.iconduck.com/assets.00/email-round-icon-511x512-mgqbjz89.png'className='contact-icon' alt="Email Icon" />
                <br></br>
                <br></br>
                <p className='contact-details'><span className="pp">Email: </span> example@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div> */}
    <form className='contact-form text-secondary'>
        <input
            type="text"
            name="name"
            className="form-input"
            placeholder="Enter your name"
            value={formDetails.name}
            onChange={inputChange}
          />
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={formDetails.email}
            onChange={inputChange}
          />
          <textarea
            type="text"
            name="message"
            className="form-input"
            placeholder="Enter your message"
            value={formDetails.message}
            onChange={inputChange}
            rows="8"
            cols="12"
          ></textarea>

          <button
            type="submit"
            className="cbtn form-btn"
          >
            Send
          </button>
        </form>
        </section>


    
    
    <div>
      <p></p>
      
    </div>

        
        </div>
       
    
  )
}

export default Home
