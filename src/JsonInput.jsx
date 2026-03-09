import { useDispatch } from "react-redux";
import { addJson } from "./dashboardSlice";
import { useEffect } from "react";
import "./JsonInput.css";

export default function JsonInput() {
  const dispatch = useDispatch();
  // const handleAction = (formData) => {
  //   //store the json data in store
  //   try {
  //     const data = JSON.parse(formData.get("jsonInput"));
  //     dispatch(addJson(data));
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  const handleAction = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const data = JSON.parse(formData.get("jsonInput"));
      dispatch(addJson(data));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="json-upload">
      <form onSubmit={handleAction}>
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
