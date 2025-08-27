import FormAccordion from "./FormAccordion";
import { ProfileIcon } from "../icons";
import Input from "./Input";
import js from "@eslint/js";

function PersonalInfoForm({ data, setData, isActive, onShow }) {
  function handleOnchange(property, e) {
    setData({ ...data, [property]: e.target.value });
  }

  return (
    <>
      <FormAccordion
        label="Personal Information"
        Icon={ProfileIcon}
        isActive={isActive}
        onShow={onShow}
      >
        <div className="form" id="personal-information">
          <div className="full-name-container">
            <Input
              label="First Name"
              value={data.firstName}
              onChange={(e) => handleOnchange("firstName", e)}
            />
            <Input
              label="Last Name"
              value={data.lastName}
              onChange={(e) => handleOnchange("lastName", e)}
            />
            <Input
              label="M.I."
              value={data.middleInitial}
              onChange={(e) => handleOnchange("middleInitial", e)}
            />
          </div>
          <Input
            label="Job Title"
            value={data.jobTitle}
            onChange={(e) => handleOnchange("jobTitle", e)}
          />
          <Input
            label="Phone"
            value={data.phone}
            onChange={(e) => handleOnchange("phone", e)}
          />
          <Input
            label="Email"
            value={data.email}
            onChange={(e) => handleOnchange("email", e)}
          />
          <Input
            label="Github"
            value={data.github}
            onChange={(e) => handleOnchange("github", e)}
          />
          <Input
            label="Personal Website"
            value={data.website}
            onChange={(e) => handleOnchange("website", e)}
          />
          <Input
            label="Location"
            value={data.location}
            onChange={(e) => handleOnchange("location", e)}
          />
        </div>
      </FormAccordion>
    </>
  );
}

export default PersonalInfoForm;
