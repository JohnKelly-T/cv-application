import FormAccordion from "./FormAccordion";
import { ProfileIcon } from "../icons";
import Input from "./Input";

function PersonalInfoForm({ data, setData, isActive, onShow }) {
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
    </>
  );
}

export default PersonalInfoForm;
