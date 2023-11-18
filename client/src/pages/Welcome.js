import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/WelcomeStyles.css";
import cimage1 from "../images/cimage1.jpg";
import cimage2 from "../images/cimage2.jpg";
import cimage3 from "../images/cimage3.png";
import cimage4 from "../images/cimage4.png";
import client1 from "../images/client1.jpeg";
import client2 from "../images/client3.jpg";
import client3 from "../images/client4.jpg";
import client4 from "../images/client5.jpg";
import hero_img from "../images/hero.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Welcome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem("token") && navigate("/home");
  }, [navigate]);

  return (
    <>
      <Navbar />
      <div className="bod">
        <div className="hero">
          <div className="hero-text">
            <h2>Doctor Appointment</h2>
            <p>
              Book appointments easily for dental, injury, mental health, and
              more. Convenient and secure web-based app for hassle-free
              reservations. Manage your healthcare appointments effortlessly.
            </p>
            <div className="d-flex gap-2">
              <Link to="/about">
                <button className="btn btn-outline-primary ">Learn more</button>
              </Link>
              <Link to="/register">
                <button className="btn btn-primary">Get Started</button>
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img src={hero_img} alt="doctorimage" />
          </div>
        </div>
        <section className="service_section">
          <div className="section_text">
            <h1>
              <b>Our Services</b>
            </h1>
            <p>All type of services available</p>
          </div>
          <div className="card_details">
            <div class="card1">
              <img src={cimage1} alt="cimage" />
              <h2>Online Booking</h2>
              <h6>
                A doctor appointment booking system is an online system that
                allows patients to easily book their appointment at a particular
                clinic related to their health issue.
              </h6>
              <Link to="/service">
                <button class="btn btn-primary mt-5">Learn More</button>
              </Link>
            </div>
            <div class="card1">
              <img src={cimage2} alt="cimage" />
              <h2>Check Availability</h2>
              <h6>
                A doctor appointment booking system is an online system that
                allows patients to check the number of vacancies are available
                or not.
              </h6>
              <Link to="/service">
                <button class="btn btn-primary mt-5">Learn More</button>
              </Link>
            </div>
            <div class="card1">
              <img src={cimage3} alt="cimage" />
              <h2>Provide Notificaton</h2>
              <h6>
                When making an appointment you should give the person your name
                and the reason for wanting an appointment. You should also ask
                the amount of time the appointment will take and if you should
                expect a wait time prior to the appointment.
              </h6>
              <Link to="/service">
                <button class="btn btn-primary mt-2">Learn More</button>
              </Link>
            </div>
            <div class="card1">
              <img src={cimage4} alt="cimage" />
              <h2>Apply for Doctor</h2>
              <h6>
                When making an appointment you should give the person your name
                and the reason for wanting an appointment. You should also ask
                the amount of time the appointment will take and if you should
                expect a wait time prior to the appointment.
              </h6>
              <Link to="/service">
                <button class="btn btn-primary mt-2">Learn More</button>
              </Link>
            </div>
          </div>
        </section>
        <section className="US_section">
          <div className="section_text">
            <h1>
              <b>Why Choose Us?</b>
            </h1>
            <p>Significance of online doctor booking</p>
          </div>
          <div className="choose">
            <div className="card2">
              <h4>Increased Flexibility</h4>
              <p>
                When you offer patients the choice of making an appointment
                online, customer experience is what any healthcare provider
                should aim at. This starts right from the way appointment
                scheduling is done.
              </p>
            </div>
            <div className="card2">
              <h4>Time and Cost Savings</h4>
              <p>
                This could lead to a direct reduction in administrative costs,
                where you don’t have to hire an employee just to handle incoming
                enquiries.A digital appointment booking system means patients
                can be done with the entire process in a matter of minutes.
              </p>
            </div>
            <div className="card2">
              <h4>Enhanced doctor patient communication</h4>
              <p>
                Digital appointment bookings for doctors also improves the
                communication between the patients and doctors, according to
                multiple studies.
              </p>
            </div>
            <div className="card2">
              <h4>Helps fill appointment gaps</h4>
              <p>
                Online doctors appointment booking will go a long way in
                addressing this problem, and also avoid last minute
                cancellations
              </p>
            </div>
          </div>
        </section>
        <section className="section_test">
          <div className="section_text">
            <h1>
              <b>What Our Clients Say</b>
            </h1>
            <p>See why our clients love us</p>
          </div>
          <div className="testimonials">
            <div className="card1">
              <div className="inner">
                <div className="img">
                  <img src={client4} alt="" />
                </div>
                <div className="name">
                  <h3>Rasmita Sahoo</h3>
                  <h2 className="text-danger">*****</h2>
                </div>
              </div>
              <h6>
                The function of this website is very easy. So everyone can
                easily use it.
              </h6>
            </div>
            <div className="card1">
              <div className="inner">
                <div className="img">
                  <img src={client3} alt="" />
                </div>
                <div className="name">
                  <h3>Deepika Rout</h3>
                  <h2 className="text-danger">****</h2>
                </div>
              </div>
              <h6>
                Online appointment is very useful,because no need to go hospital
                for appointment.
              </h6>
            </div>
            <div className="card1">
              <div className="inner">
                <div className="img">
                  <img src={client2} alt="" />
                </div>
                <div className="name">
                  <h3>Manoj Mishra</h3>
                  <h2 className="text-danger">*****</h2>
                </div>
              </div>
              <h6>
                The function of this website is very easy. So everyone can
                easily use it.
              </h6>
            </div>
            <div className="card1">
              <div className="inner">
                <div className="img">
                  <img src={client1} alt="" />
                </div>
                <div className="name">
                  <h3>Niranjan Jena</h3>
                  <h2 className="text-danger">****</h2>
                </div>
              </div>
              <h6>We can take an appontment at any time and at any palce.</h6>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};
export default Welcome;
