import LoginButton from "./login";

import { useEffect } from "react";
import { gapi } from "gapi-script";

const clientId="";

function App() {
    useEffect(() => {
      function start() {
        gapi.client.init({
          clientId: clientId,
          scope: "",
        });
      }
      gapi.load("client:auth2", start);
    });

 return (
    <div className="App">
        <LoginButton/>

    </div>
 )   
}
export default App;
