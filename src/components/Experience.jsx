function Experience ({company, position, startYear, endYear, description}) {
  let period = '';

  if (startYear && endYear) {
    period = startYear + ' - ' + endYear;
  } else if (startYear) {
    period += startYear;
  } else if (endYear) {
    period += endYear;
  }
  
  return (
    <>
      <div className="experience">
        <div className="company">{company}</div>
        <div className="period">
          {period}
        </div>
        <div className="position">{position}</div>
        <ul className="description">
          {description.split('\n').map( (line, index) => {
            return <li key={index}>{line}</li>
          })}
        </ul>
      </div>
    </>
  );
}

export default Experience;