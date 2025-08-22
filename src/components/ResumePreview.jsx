import { PhoneIcon, GlobeIcon, EmailIcon, GithubIcon, PinIcon} from "../icons";
import ResumeSection from "./ResumeSection";
import Experience from "./Experience";
import Education from "./Education";
import ContactInfo from "./ContactInfo";

function ResumePreview({ data }) {

  let fullName = '';

  fullName += data.firstName ? data.firstName : '';
  fullName += data.middleInitial ? (" " + data.middleInitial) : '';
  fullName += data.lastName ? (" " + data.lastName) : '';

  fullName = fullName ? fullName.toUpperCase() : '';

  let jobTitle = data.jobTitle ? data.jobTitle.toUpperCase() : null;
  let experiences = (data.experiences && data.experiences.length !== 0) ? 
    data.experiences.map((experience, index) => {
                return <Experience {...experience} key={index} />
    }) : null;

  let educations = (data.educations && data.educations.length !== 0) ? 
    data.educations.map((education, index) => {
                return <Education {...education} key={index} />
    }) : null;
  
  let skills = (data.skills && data.skills.length !== 0) ? 
    <ul className="sidebar-list">
      {
        data.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))
      }
    </ul> : null;

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

          <ResumeSection heading="EDUCATION">
            { educations ? educations : null }
          </ResumeSection>
        </div>

        <div className="sidebar">
          <ResumeSection heading="CONTACT">
            {
              (data.number && data.email && data.website && data.github && data.location) ? 
              <div className="contact-info-container">
                <ContactInfo Icon={PhoneIcon}>
                  {data.number}
                </ContactInfo>

                <ContactInfo Icon={EmailIcon}>
                  {data.email}
                </ContactInfo>

                <ContactInfo Icon={GlobeIcon}>
                  {data.website}
                </ContactInfo>

                <ContactInfo Icon={GithubIcon}>
                  {data.github}
                </ContactInfo>

                <ContactInfo Icon={PinIcon}>
                  {data.location}
                </ContactInfo>
              </div> : null
            }
          </ResumeSection>

          <ResumeSection heading="SKILLS">
            {skills ? skills : null}
          </ResumeSection>
        </div>
      </div>
    </>
  );
}

export default ResumePreview;