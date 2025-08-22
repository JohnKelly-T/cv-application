import { PhoneIcon, GlobeIcon, EmailIcon, GithubIcon, PinIcon} from "../icons";
import Experience from "./Experience";

function ResumePreview({ data }) {

  let fullName = data.middleInitial ? 
    data.firstName + " " + data.middleInitial + " " + data.lastName : 
    data.firstName + " " + data.lastName;

  fullName = fullName.toUpperCase();

  let jobTitle = data.jobTitle.toUpperCase();

  return (
    <>
      <div className="resume">
        <div className="resume-header">
          <div className="full-name">{fullName}</div>
          <div className="job-title">{jobTitle}</div>
        </div>

        <div className="main-content">
          <div className="resume-section">
            <div className="resume-heading">PROFILE</div>
            <div className="profile-summary">{data.summary}</div>
          </div>

          <div className="resume-section">
            <div className="resume-heading">WORK EXPERIENCE</div>
            {data.experiences.map((experience, index) => {
              return <Experience {...experience} key={index} />
            })}
          </div>
        </div>

        <div className="sidebar">
          <div className="resume-section">
            <div className="resume-heading">CONTACT</div>
            <div className="contact-info-container">
              <div className="contact-info">
                <PhoneIcon />
                {data.number}
              </div>

              <div className="contact-info">
                <EmailIcon />
                {data.email}
              </div>

              <div className="contact-info">
                <GlobeIcon />
                {data.website}
              </div>

              <div className="contact-info">
                <GithubIcon />
                {data.github}
              </div>

              <div className="contact-info">
                <PinIcon />
                {data.location}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResumePreview;