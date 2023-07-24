import React from "react";
import "../styles/WelcomeStyles.css";
import docimg from "../images/serviceimg.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function About() {
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
            The need for healthcare services is growing with the increase in
            population and the number of patients who seek health care at
            hospitals, medical facilities, holistic groups, and physicians
            practice has improved significantly.
          </h6>
          <h6>
            These bring a new set of challenges for the staff of the facility
            and administrators. Online scheduling software, a recent
            technological advancement, has made the booking process in hospitals
            easier for both patients and administrative staffs.
          </h6>
          <h3>What are the advantages of Online Scheduling System?</h3>
          <h6>
            The online scheduling systems are also known in many names such as
            online booking application, online scheduler, online scheduling
            software, and more. It is one of the most commonly used web-based
            applications and enables individuals to securely and conveniently
            book their reservations and requests online via a laptop, tablet,
            smartphone, computer, and other web-connected devices.
          </h6>
          <h6>
            Anyone can access the online appointment management system via the
            URL provided by the healthcare or medical facility or through a
            “Book Now” button in the website. Once the time and date are
            selected, the system confirms the bookings automatically and also
            records it within the system instantly without any intervention from
            the staff.
          </h6>
          <h6>
            The online appointment management system also comes with features
            like automated text and email message reminders, which is sent to
            the booked patients or individuals on the date booked before their
            scheduled time of booking. The flexibility of the online appointment
            management system in healthcare includes
          </h6>
          <ul>
            <li>Booking inoculations and vaccine in hospitals.</li>
            <li>
              Scheduling a patient’s treatment, services, and appointments.
            </li>
          </ul>
          <h3>Time-Saving:</h3>
          <h6>
            The staff spends less time on managing appointments, and phone
            booking, and can, therefore, use their free time for more urgent and
            vital tasks. The patients can also save time as there is no need for
            calling the hospital and booking an appointment in the middle of
            their busy schedule.
          </h6>
          <h6>
            For example, consider a large medical facility hospital which
            schedules 100 plus appointments daily. Every appointment calls are
            handled by the support staff from the administration, and they spend
            approximately 3 to 4 minutes on a phone call.
          </h6>
          <h6>
            In this case, if the healthcare facility switches to an online
            booking system it can save most of their time and also get more time
            to deal with other pressing tasks in the facility.
          </h6>
          <h3>Monetary Savings:</h3>
          <h6>
            The time savings made by the facility can translate automatically
            into monetary savings as a reduction in services and staff
            translates into a reduction in expenses. The appointment management
            system can reduce the need for extra human resources created by the
            process of appointment scheduling.
          </h6>
          <h3>24 hours convenience:</h3>
          <h6>
            An individual is needed to schedule an appointment over the phone
            calls during the office hours, and therefore people need to work
            round the clock on the phone booking. With online appointment
            management system, the individual or the patient can book an
            appointment any time. It is seen that after business hours there is
            more than 55 percent of all appointments booked through online
            scheduling appointment systems.
          </h6>
          <h3>Centralized Information System:</h3>
          <h6>
            Online systems make patient management easier and more efficient.
            Some online scheduling systems for appointments also have management
            of patient health records as part of the package. The organization
            can create a single point from which to save, update, manage and
            analyze patient information.
          </h6>
          <h6>
            Recording, reporting and analyzing such information helps to
            efficiently manage the case file of a patient. All regularly
            recorded patient information, along with a history of check-ups and
            associated medical tests, can be used to make educated, carefully
            considered health care decisions. This can reduce the amount of
            documentation and the time it takes to access physical files.
          </h6>
          <h6>
            It is also possible to avoid redundant data entries about the same
            patient. In addition, the ongoing records of the patient can be
            updated at each appointment, making patient information available
            for easy and fast access in one place. This is important when two
            different practitioners are consulted at the same facility by a
            patient.
          </h6>
          <h6>
            <b>For example,</b>it may be more convenient for a patient
            consulting a dentist and an orthodontist at the same facility to
            have information stored at a single point, as the dentist would like
            to be informed about the ongoing orthodontic treatment of the
            patient in order to assess how best to handle the specific oral
            hygiene needs of the patient.
          </h6>
        </article>
      </div>
      <Footer />
    </>
  );
}

export default About;
