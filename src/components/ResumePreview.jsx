import { PhoneIcon, GlobeIcon, EmailIcon, GithubIcon, PinIcon} from "../icons";
import ResumeSection from "./ResumeSection";
import Experience from "./Experience";

function ResumePreview({ data }) {

  let fullName = '';

  fullName += data.firstName ? data.firstName : '';
  fullName += data.middleInitial ? (" " + data.middleInitial) : '';
  fullName += data.lastName ? (" " + data.lastName) : '';

  fullName = fullName ? fullName.toUpperCase() : '';

  let jobTitle = data.jobTitle ? data.jobTitle.toUpperCase() : null;
  let experiences = (data.experiences && data.experiences.length !== 0) ? data.experiences.map((experience, index) => {
              return <Experience {...experience} key={index} />
  }) : null;
        
  return (
    <>
      <div className="resume">
        <div className="resume-header">
          <div className="full-name">{fullName}</div>
          <div className="job-title">{jobTitle}</div>
        </div>

        <div className="main-content">
          <ResumeSection heading="PROFILE">
            {
              data.summary ? 
                <div className="profile-summary">{data.summary}</div> 
                : null
            }
          </ResumeSection>

          <ResumeSection heading="WORK EXPERIENCE">
            { experiences ? experiences : null }
          </ResumeSection>
        </div>

        <div className="sidebar">
          <ResumeSection heading="CONTACT">
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
          </ResumeSection>
        </div>
      </div>
    </>
  );
}

export default ResumePreview;