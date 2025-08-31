import { SkillsIcon, AddIcon } from "../icons";
import FormAccordion from "./FormAccordion";
import ItemInput from "./ItemInput";

function SkillsForm({ data, setData, isActive, onShow }) {
  function handleOnChange(index, e) {
    let newSkills = [...data.skills];

    newSkills[index] = e.target.value;

    setData({ ...data, skills: newSkills });
  }

  function handleOnAdd() {
    let newSkills = [...data.skills];
    newSkills.push("");

    setData({ ...data, skills: newSkills });
  }

  function handleOnDelete(index) {
    let newSkills = [...data.skills];

    newSkills.splice(index, 1);

    setData({ ...data, skills: newSkills });
  }

  return (
    <FormAccordion
      label="Skills"
      Icon={SkillsIcon}
      isActive={isActive}
      onShow={onShow}
    >
      <div className="form" id="skills">
        {data.skills
          ? data.skills.map((skill, index) => {
              return (
                <ItemInput
                  key={index}
                  value={skill}
                  onChange={(e) => handleOnChange(index, e)}
                  onDelete={() => handleOnDelete(index)}
                />
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

export default SkillsForm;
