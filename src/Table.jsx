import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import "./Table.css";

export default function Table() {
  const data = useSelector((state) => state.dashboard.jsonData);
  //   console.log(data);
  return (
    <table className="json-table">
      <caption>Data Table</caption>
      <thead>
        <tr>
          {Object.keys(data[0]).map((label) => (
            <th key={uuid()}>{label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((obj) => (
          <tr key={uuid()}>
            {Object.values(obj).map((val) => (
              <td key={uuid()}>{val}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
