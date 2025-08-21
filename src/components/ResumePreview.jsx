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
          <div className="main-content-section">
            <div className="resume-heading">PROFILE</div>
            <div className="profile-summary">{data.summary}</div>
          </div>
        </div>

        <div className="sidebar">
          
        </div>
      </div>
    </>
  );
}

export default ResumePreview;