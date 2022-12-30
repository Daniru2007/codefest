import "./TimeProjectItem.css";
import { useParams } from "react-router-dom";

function TimeProjectItem() {
  const { id } = useParams();
  return <div>TimeProjectItem {id}</div>;
}

export default TimeProjectItem;
