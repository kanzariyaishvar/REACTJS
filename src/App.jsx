import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const countdown = () => {
    const targetDate = new Date("May 17, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = targetDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
  };

  setInterval(countdown, 1000);
  
   <script>
    new WOW().init();
  </script>


  return (
    <>


      {/* slider Start */}


      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/public/slide1.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block">
              <h5>Prakash & Usha</h5>
              <p>We are getting Married</p>
              <div className="circle">
                <h3>Save The Date</h3><p>17/05/2025</p>
              </div>
            </div>

          </div>
          <div className="carousel-item">
            <img src="/public/slide4.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block">
              <h5>Prakash & Usha</h5>
              <p>We are getting Married</p>
              <div className="circle">
                <h3>Save The Date</h3><p>17/05/2025</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/public/slide3.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block">
              <h5>Prakash & Usha</h5>
              <p>We are getting Married</p>
              <div className="circle">
                <h3>Save The Date</h3><p>17/05/2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* slider End */}

      <div className="invitation">
        <div className="invitation1">
          <i className="bi bi-balloon-heart-fill"></i>
          <div className="move">
            <h5>Prakash & Usha</h5>
            <p>We are getting Married</p>
            <h3>Save The Date</h3><p>17/05/2025</p>
          </div>
        </div>
        <div className="invitation2">
          <img src="/public/img (3).jpg" alt="" />
        </div>
      </div>


      {/* invitatin section */}



      <section className="countdown-container">
        <div className="left">
          <h1>Don't miss it</h1>
          <p>We invited you to celebrate our wedding</p>
        </div>
        <div className="right">
          <div className="timer">
            <div className="time-box">
              <span id="days">00</span>
              <p>Days</p>
            </div>
            <div className="heart mt-3">❤️</div>
            <div className="time-box">
              <span id="hours">00</span>
              <p>Hours</p>
            </div>
            <div className="heart mt-3">❤️</div>
            <div className="time-box">
              <span id="minutes">00</span>
              <p>Minutes</p>
            </div>
            <div className="heart mt-3">❤️</div>
            <div className="time-box">
              <span id="seconds">00</span>
              <p>Seconds</p>
            </div>
          </div>
        </div>
      </section>

      <div className="invitation2">
        <img src="/public/imge.jpg" alt="" />
      </div>

      <div className="invguest">
        <h3>❤️ Invitation ❤️</h3>
        <p>BE OUR GUEST!</p>
        <img src="/public/slide3.jpg" alt="" /><br />

        <p className='content'>With hearts full of love and happiness,
          We, Prakash and Usha, invite you to witness the beginning of our eternal life.

          As we begin this new journey of togetherness,
          your presence will be a cherished blessing.

          Join us in celebrating our wedding -
          a day of joy, laughter, and lifelong memories.

          Your best wishes and warm presence will make our day truly special.

          Let's celebrate love, family, and the beautiful bond that brings us all together.

          We look forward to sharing this unforgettable moment with you.</p>

      </div>

      {/* iventcard */}
      <div className="event-card animate__animated animate__backInLeft WOW">
        <div className="event-content">
          <div className="event-image">
            <img src="/public/images.jpg" alt="Bhojan Thali" />
          </div>
          <div className="event-details">
            <h3>Bhojan Samaranbh</h3>
            <p className="time">AT 06:30 PM</p>
          </div>
          <div className="event-date">
            <span className="day">17</span>
            <span className="month">MAY.</span>
          </div>
        </div>
      </div>
      {/* iventcard */}

      <div className="Gust_invitation">
        <h2>Invitation</h2>
        <span>Saturday</span>
        <p>17/05/2025</p>
        <p>At Main Canal Road, Rola Ratdia Ni Vadi, Behind Masal <br /> Ni Vadi, Morbi</p>
      </div>

      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1839.3893420814663!2d70.80037407100069!3d22.808283609939345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDQ4JzMxLjQiTiA3MMKwNDcnNTkuMSJF!5e1!3m2!1sen!2sin!4v1747132190672!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

<footer class="custom-footer">
  <p>
    Made with <span class="heart">❤️</span> By 
    <a href="https://yourlink.com" target="_blank"> Ishvar Kanzariya</a>
  </p>
</footer>

    </>


  )
}

export default App
