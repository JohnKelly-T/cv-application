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
    if (data.skills) {
      let newSkills = [...data.skills];
      newSkills.push("");

      setData({ ...data, skills: newSkills });
    } else {
      setData({ ...data, skills: [""] });
    }
  }

  function handleOnDelete(index) {
    let newSkills = [...data.skills];

    newSkills.splice(index, 1);

    let newData = { ...data };

    if (newSkills.length === 0) {
      delete newData.skills;
    } else {
      newData.skills = newSkills;
    }

    setData(newData);
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
          <AddIcon /> Add skill
        </button>
      </div>
    </FormAccordion>
  );
}

export default SkillsForm;
