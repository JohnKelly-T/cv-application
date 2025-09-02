import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./styles/App.css";
import ResumePreview from "./components/ResumePreview";
import PersonalInfoForm from "./components/PersonalInfoForm";
import ProfileSummaryForm from "./components/ProfileSummaryForm";
import WorkExperienceForm from "./components/WorkExperienceForm";
import EducationForm from "./components/EducationForm";
import SkillsForm from "./components/SkillsForm";
import MoreForm from "./components/MoreForm";
import { defaultData } from "./default-data";
import { dataTemplate } from "./data-template";
import {
  DeleteIcon,
  ResetIcon,
  PrinterIcon,
  FileIcon,
  EditIcon,
  GithubIcon,
} from "./icons";

function App() {
  const [data, setData] = useState(defaultData);
  const [activeFormIndex, setActiveFormIndex] = useState(0);
  const [previewToggle, setPreviewToggle] = useState("form");

  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  function togglePreview() {
    if (previewToggle === "preview") {
      setPreviewToggle("form");
    } else if (previewToggle === "form") {
      setPreviewToggle("preview");
    }
  }

  function clearForm() {
    let response = confirm(
      "Are you sure you want to clear the form? All entered data will be lost.",
    );

    if (response) {
      setData(dataTemplate);
    }
  }

  function resetForm() {
    let response = confirm(
      "Are you sure you want to reset the form? All entered data will be lost.",
    );

    if (response) {
      setData(defaultData);
    }
  }

  return (
    <>
      <div
        className={
          "form-container" + (previewToggle === "form" ? " show" : " hide")
        }
      >
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
        <div className="credits">
          &copy; 2025 - Designed and developed by{" "}
          <a href="https://github.com/JohnKelly-T/">
            John Kelly Temeña <GithubIcon />
          </a>
        </div>
      </div>
      <div
        className={
          "cv-container" + (previewToggle === "preview" ? " show" : " hide")
        }
      >
        <ResumePreview data={data} contentRef={contentRef}></ResumePreview>
        <div className="preview-size">A4 preview</div>
      </div>

      <div className="buttons-container">
        <button className="toggle-preview-button" onClick={togglePreview}>
          {previewToggle === "preview" ? <EditIcon /> : <FileIcon />}
        </button>
        <button className="clear-button" onClick={clearForm}>
          <DeleteIcon />
        </button>
        <button className="reset-button" onClick={resetForm}>
          <ResetIcon />
        </button>
        <button className="print-button" onClick={reactToPrintFn}>
          <PrinterIcon />
        </button>
      </div>
    </>
  );
}

export default App;
