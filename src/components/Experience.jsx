function Experience({ company, position, startDate, endDate, description }) {
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
        <div className="company">{company}</div>
        <div className="period">{period}</div>
        <div className="position">{position}</div>
        <ul className="description">
          {description.split("\n").map((line, index) => {
            return <li key={index}>{line}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default Experience;
