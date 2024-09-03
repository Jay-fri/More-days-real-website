import '/css/contact-style.css'

document.querySelector('#contactPage').innerHTML =`
  <nav class="hidden">
        <div class="schoollogo-div">
          <a href=""
            ><img
              class="school-logo"
              src="./assets/header photos/WhatsApp Image 2024-07-07 at 08.18.32_c1384b16.jpg"
              alt="School Logo"
          /></a>
        </div>
        <div class="school-name">More-days Private School</div>
        <div class="nav-buttons-contact links">
          <a href="index.html"><button>Home</button></a>      
          <a href="About.html"><button id="Aboutus">About Us</button></a>
          <a href="academics.html"><button>Academics</button></a>
          <a href="admission.html"><button>Admission</button></a>
          <a href="contact.html"><button>Contact Us</button></a>
        </div>
        <div class="drop-down-menu">
        <img class="drop-down-icon" src="assets/body photos/Drop-down-menuIcon.jpg" alt=""/>
        </div>
      </nav>

      <section class="section1 hidden">
      <div class="section1-wrapper">
        <img
          src="assets/aboutPagePhotos/headerAbstract Design.jpg"
          alt="Icon"
        />
        <div>
          <div class="section1-school-title">
            <div>Contact Us</div>
            <p>Feel Free To Connect With Us</p>
          </div>
          <div class="section1-text-div">
            <p class="section1-school-text">
              We value open communication and are eager to assist you with any
              inquiries. Feel free to reach out to us through any of the
              following contact methods
            </p>
            <div class="section1-text">
              <div>
                <img src="assets/contact photos/message Icon.jpg" alt="" />
                <p>moredaysprivatesch20@gmail.com</p>
              </div>
              <div>
                <img src="assets/contact photos/Call Icon.jpg" alt="" />
                <p>+234 8035254630</p>
              </div>
            </div>
            <div class="section1-text">
              <div>
                <img src="assets/contact photos/location Icon.jpg" alt="" />
                <p>Upper room street, Pakuro Road, Mowe, Owode, OgunState.</p>
              </div>
              <div>
                <img src="assets/contact photos/Clock Icon.jpg" alt="" />
                <p>Office hours - 8am - 3pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <div class="section2">
      <div class="section2-header-div">
        <div>Application Form</div>
        <p>Apply Now!!</p>
        <p>
          Fill the form below to apply for admission into More-days Private
          Schoool.
        </p>
      </div>

      <div id="form">
        <div class="form-row">
          <div>
            <p>Parent Name</p>
            <input
              type="text"
              id="fullName"
              placeholder="Enter Parent Name"
              required
            />
          </div>
          <div>
            <p>Email Address</p>
            <input
              type="email"
              id="email_id"
              placeholder="Enter Email Address"
              required
            />
          </div>
        </div>
        <div class="form-row">
          <div>
            <p>Phone Number</p>
            <input
              type="text"
              id="phone_number"
              placeholder="Enter Phone Number"
              required
            />
          </div>
          <div>
            <p>Student Name</p>
            <input
              type="text"
              id="student_name"
              placeholder="Enter Student Name"
              required
            />
          </div>
        </div>
        <div class="form-row">
          <div>
            <p>Student Age</p>
            <input
              type="text"
              id="age"
              placeholder="Enter Student Age"
              required
            />
          </div>
        </div>
        <div class="text-area">
          <p>Message</p>
          <textarea
            id="message"
            placeholder="Enter Your Message here..."
          ></textarea>
        </div>
        <button onclick="sendMail()">Submit</button>
      </div>
    </div>

     <footer class="hidden">
      <div class="footer-wrapper1">
        <div class="footerContainer">
          <div class="school">
            <img
              class="school-logo"
              src="./assets/header photos/WhatsApp Image 2024-07-07 at 08.18.32_c1384b16.jpg"
              alt=""
            />
            <p>More-days Private School</p>
          </div>
          <p class="school-prompt">
            We believe in the power of play to foster creativity,
            problem-solving skills, and imagination.
          </p>
          <div class="dials">
            <span
              ><img src="./assets/body photos/MessageIcon.jpg" alt="messageUs"
            /></span>
            moredaysprivatesch20@gmail.com
          </div>
          <div class="dials">
            <span
              ><img src="./assets/body photos/PhoneIcon.jpg" alt="ContactUs"
            /></span>
            +234 8035254630
          </div>
          <div class="dials">
            <span
              ><img src="./assets/body photos/LocationIcon.jpg" alt="LocatetUs"
            /></span>
            Upper room street, Pakuro Road, Mowe, Owode
          </div>
        </div>
        <div class="footerContainer">
          <a href="index.html">
            <p>Home</p>
          </a>
          <a href="index.html">
            <p>Features</p>
          </a>
          <a href="index.html">
            <p>Our testimonials</p>
          </a>
          <a href="index.html">
            <p>FAQ</p>
          </a>
        </div>
        <div class="footerContainer">
          <a href="About.html">
            <p>About Us</p>
          </a>
          <a href="About.html">
            <p>Our Mission</p>
          </a>
          <a href="About.html">
            <p>Our Vision</p>
          </a>
          <a href="About.html">
            <p>Awards and Recognitions</p>
          </a>
          <a href="About.html">
            <p>History</p>
          </a>
          <a href="About.html">
            <p>Teachers</p>
          </a>
        </div>
        <div class="footerContainer">
          <a href="./academics.html">
            <p>Academics</p>
          </a>
          <a href="./academics.html">
            <p>Special Features</p>
          </a>
          <a href="./academics.html">
            <p>Gallery</p>
          </a>
        </div>
        <div class="footerContainer">
          <a href="">
            <p>Contact Us</p>
          </a>
          <a href="">
            <p>Information</p>
          </a>
          <a href="">
            <p>Maps and Directions</p>
          </a>
        </div>
      </div>

      <div class="foot-line1"></div>
      <div class="footer-wrapper2">
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
        <div>
          <a target="_blank" href="https://www.facebook.com/moredayscare"><img src="./assets/body photos/FacebookButton.jpg" alt="Facebook" /></a>
        </div>
      </div>
      <div class="foot-line2"></div>
      <div class="copyright">
        Copyright &copy; [2024] More-days Private School. All rights reserved.
      </div>
    </footer>


`