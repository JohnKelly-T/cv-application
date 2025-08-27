import { useState } from "react";
import "./App.css";
import ResumePreview from "./components/ResumePreview";
import PersonalInfoForm from "./components/PersonalInfoForm";
import ProfileSummaryForm from "./components/ProfileSummaryForm";
import WorkExperienceForm from "./components/WorkExperienceForm";
import { defaultData } from "./default-data";

function App() {
  const [data, setData] = useState(defaultData);
  const [activeFormIndex, setActiveFormIndex] = useState(0);

  return (
    <>
      <div className="form-container">
        <div className="header">
          <div className="site-name">CV Builder</div>
          <div className="site-tagline">Your perfect CV made fast and easy</div>
        </div>

        <PersonalInfoForm
          data={data}
          setData={setData}
          isActive={activeFormIndex === 0}
          onShow={(i = 0) => setActiveFormIndex(i)}
        />
        <ProfileSummaryForm
          data={data}
          setData={setData}
          isActive={activeFormIndex === 1}
          onShow={(i = 1) => setActiveFormIndex(i)}
        />
        <WorkExperienceForm
          data={data}
          setData={setData}
          isActive={activeFormIndex === 2}
          onShow={(i = 2) => setActiveFormIndex(i)}
        />
      </div>
      <div className="cv-container">
        <ResumePreview data={data}></ResumePreview>
      </div>
    </>
  );
}

export default App;
