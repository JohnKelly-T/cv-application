import { useState } from "react";
import FormAccordion from "./FormAccordion";
import { WorkExperienceIcon, AddIcon } from "../icons";
import ItemAccordion from "./ItemAccordion";
import Input from "./Input";
import TextArea from "./TextArea";

function WorkExperienceForm({ data, setData, isActive, onShow }) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  function handleOnchange(index, property, e) {
    let newExperiences = [...data.experiences];
    newExperiences[index] = {
      ...newExperiences[index],
      [property]: e.target.value,
    };

    setData({ ...data, experiences: newExperiences });
  }

  return (
    <FormAccordion
      label="Work Experience"
      Icon={WorkExperienceIcon}
      isActive={isActive}
      onShow={onShow}
    >
      <div className="form" id="work-experience">
        {data.experiences.map((experience, index) => {
          return (
            <ItemAccordion
              key={index}
              label={
                experience.position +
                (experience.company ? ", " + experience.company : "")
              }
              isActive={activeItemIndex === index}
              onShow={(i = index) => setActiveItemIndex(i)}
            >
              <div className="work-experience-item">
                <Input
                  label="Position"
                  value={experience.position}
                  onChange={(e) => handleOnchange(index, "position", e)}
                />

                <Input
                  label="Company"
                  value={experience.company}
                  onChange={(e) => handleOnchange(index, "company", e)}
                />

                <Input
                  label="Start Date"
                  value={experience.startDate}
                  onChange={(e) => handleOnchange(index, "startDate", e)}
                />

                <Input
                  label="End Date"
                  value={experience.endDate}
                  onChange={(e) => handleOnchange(index, "endDate", e)}
                />

                <TextArea
                  label="Description"
                  value={experience.description}
                  onChange={(e) => handleOnchange(index, "description", e)}
                />
              </div>
            </ItemAccordion>
          );
        })}

        <button className="add-item-button">
          <AddIcon /> Add work experience
        </button>
      </div>
    </FormAccordion>
  );
}

export default WorkExperienceForm;
