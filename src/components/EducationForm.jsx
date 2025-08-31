import { useState } from "react";
import FormAccordion from "./FormAccordion";
import { EducationIcon, AddIcon } from "../icons";
import ItemAccordion from "./ItemAccordion";
import Input from "./Input";
import TextArea from "./TextArea";

function EducationForm({ data, setData, isActive, onShow }) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  function handleOnAdd() {
    if (data.educations) {
      // make copy of educations list
      let newEducations = [...data.educations];

      // Add empty object to list
      newEducations.push({});

      setData({ ...data, educations: newEducations });
      // set the new active index to last index for next render
      setActiveItemIndex(data.educations.length);
    } else {
      setData({
        ...data,
        educations: [
          {
            school: "",
            course: "",
            startDate: "",
            endDate: "",
            description: "",
          },
        ],
      });
    }
  }

  function handleOnDelete(index) {
    // make copy of educations list
    let newEducations = [...data.educations];

    // remove item at index
    newEducations.splice(index, 1);

    setData({ ...data, educations: newEducations });

    // update active index
    if (activeItemIndex !== 0) {
      setActiveItemIndex((prevIndex) => prevIndex - 1);
    }
  }

  function handleOnchange(index, property, e) {
    let newEducations = [...data.educations];
    newEducations[index] = {
      ...newEducations[index],
      [property]: e.target.value,
    };

    setData({ ...data, educations: newEducations });
  }

  return (
    <FormAccordion
      label="Education"
      Icon={EducationIcon}
      isActive={isActive}
      onShow={onShow}
    >
      <div className="form" id="education">
        {data.educations
          ? data.educations.map((education, index) => {
              let label = "";

              if (education.school && education.course) {
                label = education.school + ", " + education.course;
              } else if (education.school) {
                label = education.school;
              } else if (education.course) {
                label = education.course;
              }

              return (
                <ItemAccordion
                  key={index}
                  label={label ? label : "School Name, Course"}
                  isActive={activeItemIndex === index}
                  onShow={(i = index) => setActiveItemIndex(i)}
                  onDelete={() => handleOnDelete(index)}
                >
                  <div className="education-item">
                    <Input
                      label="School"
                      value={education.school}
                      onChange={(e) => handleOnchange(index, "school", e)}
                    />

                    <Input
                      label="Course"
                      value={education.course}
                      onChange={(e) => handleOnchange(index, "course", e)}
                    />

                    <Input
                      label="Start Date"
                      value={education.startDate}
                      onChange={(e) => handleOnchange(index, "startDate", e)}
                    />

                    <Input
                      label="End Date"
                      value={education.endDate}
                      onChange={(e) => handleOnchange(index, "endDate", e)}
                    />

                    <TextArea
                      label="Description"
                      value={education.description}
                      onChange={(e) => handleOnchange(index, "description", e)}
                    />
                  </div>
                </ItemAccordion>
              );
            })
          : null}

        <button className="add-item-button" onClick={handleOnAdd}>
          <AddIcon /> Add education
        </button>
      </div>
    </FormAccordion>
  );
}

export default EducationForm;
