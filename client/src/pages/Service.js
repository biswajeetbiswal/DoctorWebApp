import React from "react";
import "../styles/WelcomeStyles.css";
import docimg from "../images/doctor.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Service() {
  return (
    <>
      <Navbar />
      <div className="bod">
        <div className="back_img">
          <img src={docimg} alt="backimg" />
        </div>
        <article className="article_text">
          <h3 className="mt-3">Introduction:</h3>
          <h6>
            Doctors are lifesavers and that is why they shouldn’t be too far
            from those who need healthcare. With more and more people having the
            need to seek medical attention, doctors need to make their services
            accessible and available to their clients. One way they can do this
            is offering online appointment scheduling for clients. In this time
            and age where everything and anything can be found on the internet,
            you need to take advantage of the opportunities that online
            appointment system for doctors presents.
          </h6>
          <h3>Major Services Availble</h3>
          <ul>
            <li>
              <h6>Online Booking</h6>
            </li>
            <li>
              <h6>Check Availability</h6>
            </li>
            <li>
              <h6>Provide Notification</h6>
            </li>
            <li>
              <h6>Apply as a Doctor</h6>
            </li>
          </ul>
          <br />
          <h3>Online Booking:</h3>
          <h6>
            A doctor appointment booking system, available on the internet,
            allows patients to book an appointment from the comfort of their
            homes, using their computer, laptop or mobile, and at any time any
            place.
          </h6>
          <h3>Check Availability:</h3>
          <h6>
            A doctor appointment booking system,also provides check availability
            option, where user can available number of seat is present or not.{" "}
          </h6>
          <h3>Provide Notifications:</h3>
          <h6>
            A doctor appointment booking system,having notification syatem when
            a user take an appointment there is a notification type messsage
            comes the respective doctor. And when the respective doctor approved
            the appontment there is a conformation message comes to the user.
          </h6>
          <h3>Apply as a Doctor:</h3>
          <h6>
            A doctor appointment booking system,provides the doctors to apply
            form for a doctor account.When the admin verify or approved the
            doctor profile,there is a new doctor account created in the doctor
            page.
          </h6>
          <h3>It is User-friendly:</h3>
          <h6>
            If you are worried that your client might find the online booking
            system difficult to use, relax! Most booking systems are easy to use
            and does not require any installation before clients can use them.
            Patients can access and book appointments directly without having to
            go through an instruction manual to learn how to do so. Your
            patients will be delighted to book an appointment on an online
            system that presents no challenges at all.
          </h6>
          <h3>Mobility:</h3>
          <h6>
            If you have all your patients information in a particular computer
            or register, you will not be able to access it from anywhere else
            unless you are in the clinic or wherever the computer is. This can
            be a setback when you urgently need a patient’s information but are
            not close to the computer.
          </h6>
        </article>
        
      </div>
      <Footer/>
    </>
  );
}

export default Service;
