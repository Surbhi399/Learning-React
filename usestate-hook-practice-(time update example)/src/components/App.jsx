// import React, { useState } from "react";

// function App() {
//   const now = new Date().toLocaleTimeString();
//   const [time, setTime] = useState(now);
//   function currentTime() {
//     setTime(new Date().toLocaleTimeString());
//   }
//   return (
//     <div className="container">
//       <h1>{time}</h1>
//       <button onClick={currentTime}>Get Time</button>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";

function App() {
  setInterval(currentTime, 1000);
  const now = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  const [time, setTime] = useState(now);

  function currentTime() {
    const newTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={currentTime}>Get Time</button>
    </div>
  );
}

export default App;
