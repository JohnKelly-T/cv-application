
function ResumeSection(props) {
  if (!props.children) return null;

  return (
    <div className="resume-section">
      <div className="resume-heading">{props.heading}</div>
      {props.children}
    </div>
  );
}

export default ResumeSection;