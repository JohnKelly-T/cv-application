import { ProfileSummaryIcon } from "../icons";
import FormAccordion from "./FormAccordion";

function ProfileSummaryForm({ data, setData }) {
  return (
    <>
      <FormAccordion label="Profile Summary" Icon={ProfileSummaryIcon}>
        <div className="form" id="profile-summary">
          <div className="profile-summary-label">
            Highlight your professional experience, skills, and accomplishments
            in a brief, impactful statement.
          </div>
          <textarea
            name="profile-summary-text"
            id="profile-summary-text"
            rows="7"
            value={data.summary}
            onChange={(e) => setData({ ...data, summary: e.target.value })}
          ></textarea>
        </div>
      </FormAccordion>
    </>
  );
}

export default ProfileSummaryForm;
