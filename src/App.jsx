import { useState } from "react";
import "./App.css";
import ResumePreview from "./components/ResumePreview";
import FormAccordion from "./components/FormAccordion";
import Input from "./components/Input";
import { defaultData } from "./default-data";
import { ProfileIcon } from "./icons";

function App() {
  const [data, setData] = useState(defaultData);

  return (
    <>
      <div className="form-container">
        <div className="header">
          <div className="site-name">CV Builder</div>
          <div className="site-tagline">Your perfect CV made fast and easy</div>
        </div>

        <FormAccordion label="Personal Information" Icon={ProfileIcon}>
          <div className="form" id="personal-information">
            <div className="full-name-container">
              <Input
                label="First Name"
                data={data}
                dataProperty="firstName"
                onChange={setData}
              />
              <Input
                label="Last Name"
                data={data}
                dataProperty="lastName"
                onChange={setData}
              />
              <Input
                label="M.I."
                data={data}
                dataProperty="middleInitial"
                onChange={setData}
              />
            </div>
            <Input
              label="Job Title"
              data={data}
              dataProperty="jobTitle"
              onChange={setData}
            />
            <Input
              label="Phone"
              data={data}
              dataProperty="phone"
              onChange={setData}
            />
            <Input
              label="Email"
              data={data}
              dataProperty="email"
              onChange={setData}
            />
            <Input
              label="Github"
              data={data}
              dataProperty="github"
              onChange={setData}
            />
            <Input
              label="Personal Website"
              data={data}
              dataProperty="website"
              onChange={setData}
            />
            <Input
              label="Location"
              data={data}
              dataProperty="location"
              onChange={setData}
            />
          </div>
        </FormAccordion>
      </div>
      <div className="cv-container">
        <ResumePreview data={data}></ResumePreview>
      </div>
    </>
  );
}

export default App;
