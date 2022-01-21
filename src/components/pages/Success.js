import { useLocation } from "react-router-dom";
function Success() {
  const location = useLocation();
  const isPerfect = location.state?.isPerfect;
  return (
    <div>
      {isPerfect && <h1>PERFECT</h1>}
      <p>Random Succ</p>
      <p>{JSON.stringify(location)}</p>
    </div>
  );
}
export default Success;
