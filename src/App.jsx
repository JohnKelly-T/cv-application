import { useState } from 'react';
import './App.css';
import ResumePreview from './components/ResumePreview';
import { defaultData } from './default-data';

function App() {
  const [data, setData] = useState(defaultData);

  return (
    <>
    <div className="form-container"></div>
    <div className="cv-container">
      <ResumePreview data={data}></ResumePreview>
    </div>
    </>
  )
}

export default App
