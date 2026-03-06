import { useDispatch } from "react-redux";
import { addJson } from "./dashboardSlice";
import "./JsonInput.css";

export default function JsonInput() {
  const dispatch = useDispatch();
  const handleAction = (formData) => {
    //store the json data in store
    try {
      const data = JSON.parse(formData.get("jsonInput"));
      dispatch(addJson(data));
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="json-upload">
      <form action={handleAction}>
        <fieldset>
          <legend>JSON Data</legend>
          <textarea
            name="jsonInput"
            id="jsonInput"
            placeholder="Paste your json here..."
          ></textarea>
          <button>Submit JSON</button>
        </fieldset>
      </form>
    </div>
  );
}
