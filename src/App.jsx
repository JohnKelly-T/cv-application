import { useState } from "react";
import "./styles/App.css";
import ResumePreview from "./components/ResumePreview";
import PersonalInfoForm from "./components/PersonalInfoForm";
import ProfileSummaryForm from "./components/ProfileSummaryForm";
import WorkExperienceForm from "./components/WorkExperienceForm";
import EducationForm from "./components/EducationForm";
import SkillsForm from "./components/SkillsForm";
import MoreForm from "./components/MoreForm";
import { defaultData } from "./default-data";
import { DeleteIcon, ResetIcon, PrinterIcon } from "./icons";

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
        <EducationForm
          data={data}
          setData={setData}
          isActive={activeFormIndex === 3}
          onShow={(i = 3) => setActiveFormIndex(i)}
        />
        <SkillsForm
          data={data}
          setData={setData}
          isActive={activeFormIndex === 4}
          onShow={(i = 4) => setActiveFormIndex(i)}
        />
        <MoreForm
          data={data}
          setData={setData}
          isActive={activeFormIndex === 5}
          onShow={(i = 5) => setActiveFormIndex(i)}
        ></MoreForm>
      </div>
      <div className="cv-container">
        <ResumePreview data={data}></ResumePreview>
      </div>

      <div className="buttons-container">
        <button className="clear-button">
          <DeleteIcon />
        </button>
        <button className="reset-button">
          <ResetIcon />
        </button>
        <button className="print-button">
          <PrinterIcon />
        </button>
      </div>
    </>
  );
}

export default App;
