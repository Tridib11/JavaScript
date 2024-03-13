import { useState } from "react";
import { useRecoilValue } from "recoil";
import { networkAtom } from "./Atoms";

function App() {
  const networkNotificationCount=useRecoilValue(networkAtom)

  return (
    <div>
      <button>Home</button>

      <button>My network ({networkNotificationCount>=100?"99+":networkNotificationCount})</button>
      <button>Jobs ()</button>
      <button>Messaging ()</button>
      <button>Notifications ()</button>

      <button>Me</button>
    </div>
  );
}

export default App;
