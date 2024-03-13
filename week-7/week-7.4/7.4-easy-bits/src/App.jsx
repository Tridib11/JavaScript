import { RecoilRoot, useRecoilValue } from "recoil";
import { jobsAtom, messagingAtom, networkAtom, notificationAtom,totalNotificationSelector} from "./Atoms";

function App() {
 return <RecoilRoot>
  <MainApp/>
 </RecoilRoot>
}

function MainApp(){
  const networkNotificationCount=useRecoilValue(networkAtom)
  const jobsAtomCount=useRecoilValue(jobsAtom)
  const notificationAtomCount=useRecoilValue(notificationAtom)
  const messagingAtomCount=useRecoilValue(messagingAtom)
  const totalNotificationCount=useRecoilValue(totalNotificationSelector)

  return (
    <div>
      <button>Home</button>

      <button>My network ({networkNotificationCount>=100?"99+":networkNotificationCount})</button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notifications ({notificationAtomCount})</button>

      <button>Me({totalNotificationCount})</button>
    </div>
  );
}

export default App;
