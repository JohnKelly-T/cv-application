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

        <div className="main-content"></div>
        <div className="sidebar">
        </div>
      </div>
    </>
  );
}

export default ResumePreview;