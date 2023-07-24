import React from "react";

function Footer() {
  return (
    <footer>
      <h2 className="footh2">Contact</h2> <hr />
      <div className="footer_image">
        <div>
          <h4 style={{ color: "#fff", marginTop: "50px" }}>
            Doctor Appointment
          </h4>
        </div>
        <div>
          <h4 style={{ color: "#fff" }}>Contact Deatils</h4>
          <p>Phone:+919658253614</p>
          <p>Eamil:online23@gmail.com</p>
          <p>doctor@mocdoc.net</p>
          <p>support@mocdoc.com</p>
        </div>
        <div>
          <h4 style={{ color: "#fff" }}>About</h4>
          <p>Time saving</p>
          <p> 24 hours convenience</p>
          <p>monetry savings</p>
        </div>
        <div>
          <h4 style={{ color: "#fff" }}>Services</h4>
          <p>Online booking</p>
          <p>Check Availability</p>
          <p>Provide Notifications</p>
          <p>Apply as a doctor</p>
        </div>
      </div>
      {/* <ul class="footer_image">
        <li>Phone:+919658253614</li>
        <li>Eamil:online23@gmail.com</li>
        <li>doctor@mocdoc.net</li>
        <li>support@mocdoc.com</li>
      </ul> */}
    </footer>
  );
}

export default Footer;
