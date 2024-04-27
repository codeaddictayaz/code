import { createContext } from "react";
import Practice1 from "./practice/Practice1";
import Practice2 from "./practice/Practice2";
import Practice3 from "./practice/Practice3";
import Practice4 from "./practice/Practice4";
import Practice6 from "./practice/Practice6";
import Practice7 from "./practice/Practice7";
import Practice10 from "./practice/Practice10";
export const nameContext = createContext();
function App() {
  return (
    <div className="App">
      <Practice1 />
      <Practice2 />
      <Practice3 />
      <Practice4 />
      <Practice6 />
      <Practice10 />
      <nameContext.Provider value={"ayaz"}>
        <Practice7 />
      </nameContext.Provider>
    </div>
  );
}

export default App;
