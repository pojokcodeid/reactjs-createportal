import "./App.css";
import NoPortalExample from "./components/NoPortalExample";
import PortalExample from "./components/PortalExample";

function App() {
  return (
    <>
      <div className="clipping-container">
        <NoPortalExample />
      </div>
      <div className="clipping-container">
        <PortalExample />
      </div>
    </>
  );
}

export default App;
