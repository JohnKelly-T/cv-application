function Education ({school, startYear, endYear, description}) {
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
        <div className="school">{school}</div>
        <div className="period">
          {period}
        </div>
        <ul className="description">
          {description.split('\n').map( (line, index) => {
            return <li key={index}>{line}</li>
          })}
        </ul>
      </div>
    </>
  );
}

export default Education;