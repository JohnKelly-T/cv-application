function Education({ school, course, startDate, endDate, description }) {
  let period = "";

  if (startDate && endDate) {
    period = startDate + " - " + endDate;
  } else if (startDate) {
    period += startDate;
  } else if (endDate) {
    period += endDate;
  }

  return (
    <>
      <div className="experience">
        <div className="school">{school}</div>
        <div className="period">{period}</div>
        <div className="course">{course}</div>
        <ul className="description">
          {description
            ? description.split("\n").map((line, index) => {
                return <li key={index}>{line}</li>;
              })
            : null}
        </ul>
      </div>
    </>
  );
}

export default Education;
