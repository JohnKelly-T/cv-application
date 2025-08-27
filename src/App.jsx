import { useState } from "react";
import "./App.css";
import ResumePreview from "./components/ResumePreview";
import PersonalInfoForm from "./components/PersonalInfoForm";
import ProfileSummaryForm from "./components/ProfileSummaryForm";
import { defaultData } from "./default-data";

function App() {
  const [data, setData] = useState(defaultData);

  return (
    <>
      <div className="form-container">
        <div className="header">
          <div className="site-name">CV Builder</div>
          <div className="site-tagline">Your perfect CV made fast and easy</div>
        </div>

        <PersonalInfoForm data={data} setData={setData}></PersonalInfoForm>
        <ProfileSummaryForm data={data} setData={setData}></ProfileSummaryForm>
      </div>
      <div className="cv-container">
        <ResumePreview data={data}></ResumePreview>
      </div>
    </>
  );
}

export default App;
