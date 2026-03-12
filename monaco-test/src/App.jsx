import { useState } from "react";
import Editor from "@monaco-editor/react";

function App() {
  const [code, setCode] = useState("print('Hello Cloud Lab')");

  function handleChange(value) {
    setCode(value);
  }

  return (
    <div style={{height:"100vh", padding:"20px"}}>
      <h2>Monaco Editor test</h2>

      <Editor
        height="400px"
        language="python"
        value={code}
        onChange={handleChange}
        theme="vs-dark"
      />

      <h3>Current Code:</h3>
      <pre>{code}</pre>
    </div>
  );
}

export default App;