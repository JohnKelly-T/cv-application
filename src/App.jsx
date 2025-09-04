import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
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
  SiteLogo,
  DownloadFileIcon,
  PreviewIcon,
} from "./icons";

function App() {
  const [data, setData] = useState(defaultData);
  const [activeFormIndex, setActiveFormIndex] = useState(0);
  const [previewToggle, setPreviewToggle] = useState("form");

  const contentRef = useRef(null);
  let documentTitle =
    data.firstName || data.lastName
      ? data.firstName + " " + data.lastName + " CV"
      : "LightningCV";
  const reactToPrintFn = useReactToPrint({
    contentRef,
    documentTitle: documentTitle,
  });

  const cvContainerRef = useRef(null);

  function savePDF() {
    //temporarily add save pdf class to match a4 dimensions
    let resume = contentRef.current;
    resume.classList.add("save-pdf");
    cvContainerRef.current.classList.add("show");
    cvContainerRef.current.classList.remove("hide");

    html2canvas(resume).then(function (canvas) {
      const imgData = canvas.toDataURL("image/png");
      // const pdf = new jsPDF();
      const pdf = new jsPDF("p", "mm", "a4", false);
      pdf.addImage(imgData, "PNG", 0, 0, 210, 0, undefined, false);
      pdf.save("download.pdf");
    });

    resume.classList.remove("save-pdf");
    if (previewToggle === "form") {
      cvContainerRef.current.classList.add("hide");
      cvContainerRef.current.classList.remove("show");
    }
  }

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
          <div className="site-name">
            <SiteLogo />
            Lightning CV
          </div>
          <div className="site-tagline">
            Your perfect CV made fast and effortless.
          </div>
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
        ref={cvContainerRef}
        className={
          "cv-container" + (previewToggle === "preview" ? " show" : " hide")
        }
      >
        <ResumePreview data={data} contentRef={contentRef}></ResumePreview>
        <div className="preview-size">A4 preview</div>
      </div>

      <div className="buttons-container">
        <button className="toggle-preview-button" onClick={togglePreview}>
          {previewToggle === "preview" ? <EditIcon /> : <PreviewIcon />}
        </button>
        <button className="clear-button" onClick={clearForm}>
          <DeleteIcon />
        </button>
        <button className="reset-button" onClick={resetForm}>
          <ResetIcon />
        </button>
        <button className="download-button" onClick={savePDF}>
          <DownloadFileIcon />
        </button>
        <button className="print-button" onClick={reactToPrintFn}>
          <PrinterIcon />
        </button>
      </div>
    </>
  );
}

export default App;
