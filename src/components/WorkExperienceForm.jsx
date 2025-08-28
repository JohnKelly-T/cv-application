import { useState } from "react";
import FormAccordion from "./FormAccordion";
import { WorkExperienceIcon, AddIcon } from "../icons";
import ItemAccordion from "./ItemAccordion";
import Input from "./Input";
import TextArea from "./TextArea";

function WorkExperienceForm({ data, setData, isActive, onShow }) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  function handleOnAdd() {
    if (data.experiences) {
      // make copy of experiences list
      let newExperiences = [...data.experiences];

      // Add empty object to list
      newExperiences.push({});

      setData({ ...data, experiences: newExperiences });
    } else {
      setData({
        ...data,
        experiences: [
          {
            company: "",
            position: "",
            startDate: "",
            endDate: "",
            description: "",
          },
        ],
      });
    }

    // set the new active index to last index for next render
    setActiveItemIndex(data.experiences.length);
  }

  function handleOnDelete(index) {
    // make copy of experiences list
    let newExperiences = [...data.experiences];

    // remove item at index
    newExperiences.splice(index, 1);

    setData({ ...data, experiences: newExperiences });

    // update active index
    if (activeItemIndex !== 0) {
      setActiveItemIndex((prevIndex) => prevIndex - 1);
    }
  }

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
        {data.experiences
          ? data.experiences.map((experience, index) => {
              let label = "";

              if (experience.position && experience.company) {
                label = experience.position + ", " + experience.company;
              } else if (experience.position) {
                label = experience.position;
              } else if (experience.company) {
                label = experience.company;
              }

              return (
                <ItemAccordion
                  key={index}
                  label={label ? label : "Job position, Company"}
                  isActive={activeItemIndex === index}
                  onShow={(i = index) => setActiveItemIndex(i)}
                  onDelete={() => handleOnDelete(index)}
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
            })
          : null}

        <button className="add-item-button" onClick={handleOnAdd}>
          <AddIcon /> Add work experience
        </button>
      </div>
    </FormAccordion>
  );
}

export default WorkExperienceForm;
