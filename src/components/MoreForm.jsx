import { useState } from "react";
import FormAccordion from "./FormAccordion";
import { MoreIcon, AddIcon } from "../icons";
import ItemAccordion from "./ItemAccordion";
import Input from "./Input";
import ItemInput from "./ItemInput";

function MoreForm({ data, setData, isActive, onShow }) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  function handleAddSection() {
    if (data.more) {
      let newSections = [...data.more];
      newSections.push({ heading: "", list: [] });

      setData({ ...data, more: newSections });
      setActiveItemIndex(data.more.length);
    } else {
      setData({ ...data, more: [{ heading: "", list: [] }] });
    }
  }

  function handleDeleteSection(index) {
    // make copy of sections list
    let newSections = [...data.more];

    // remove item at index
    newSections.splice(index, 1);

    let newData = { ...data };

    if (newSections.length === 0) {
      newData.more = newSections;
    } else {
      newData.more = newSections;
    }

    setData(newData);

    // update active index
    if (activeItemIndex !== 0) {
      setActiveItemIndex((prevIndex) => prevIndex - 1);
    }
  }

  function handleSectionNameChange(index, e) {
    let newSections = [...data.more];

    newSections[index].heading = e.target.value;

    setData({ ...data, more: newSections });
  }

  function handleAddItem(sectionIndex) {
    let newSections = [...data.more];

    newSections[sectionIndex].list.push("");

    setData({ ...data, more: newSections });
  }

  function handleItemChange(sectionIndex, itemIndex, e) {
    let newSections = [...data.more];

    newSections[sectionIndex].list[itemIndex] = e.target.value;

    setData({ ...data, more: newSections });
  }

  function handleDeleteItem(sectionIndex, itemIndex) {
    let newSections = [...data.more];

    newSections[sectionIndex].list.splice(itemIndex, 1);

    setData({ ...data, more: newSections });
  }

  return (
    <FormAccordion
      label="More"
      Icon={MoreIcon}
      isActive={isActive}
      onShow={onShow}
    >
      <div className="form" id="more">
        {data.more
          ? data.more.map((section, index) => {
              return (
                <ItemAccordion
                  key={index}
                  label={section.heading ? section.heading : "Section"}
                  isActive={activeItemIndex === index}
                  onShow={(i = index) => setActiveItemIndex(i)}
                  onDelete={() => handleDeleteSection(index)}
                >
                  <Input
                    label="Section Name"
                    value={section.heading}
                    onChange={(e) => handleSectionNameChange(index, e)}
                  />
                  {section.list.map((item, itemIndex) => {
                    let sectionIndex = index;

                    return (
                      <ItemInput
                        key={itemIndex}
                        value={item}
                        onChange={(e) =>
                          handleItemChange(sectionIndex, itemIndex, e)
                        }
                        onDelete={() =>
                          handleDeleteItem(sectionIndex, itemIndex)
                        }
                      />
                    );
                  })}

                  <button
                    className="add-item-button"
                    onClick={() => handleAddItem(index)}
                  >
                    <AddIcon /> Add section item
                  </button>
                </ItemAccordion>
              );
            })
          : null}
        <button className="add-item-button" onClick={handleAddSection}>
          <AddIcon /> Add section
        </button>
      </div>
    </FormAccordion>
  );
}

export default MoreForm;
