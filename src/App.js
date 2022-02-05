import React, { useState } from "react";
import "./App.css";
import { APP_DATA } from "./constants";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const App = () => {
  console.log("App");
  const [pageData, setPageData] = useState(APP_DATA);
  const [loading, setLoading] = useState(false);
  return (
    <div style={{ width: "50vw", margin: "auto" }}>
      <h1>{pageData.title}</h1>
      {loading && <h1>loading</h1>}
      {pageData.isLogedIn ? (
        <h2>hello {pageData.userName}</h2>
      ) : (
        <>
          <p id="my_p">123</p>
          <h2>Please Sign in</h2>
        </>
      )}

      <pre>{JSON.stringify(pageData, true, 4)}</pre>
      <TextField
        id="outlined-basic"
        onChange={(e) => setPageData({ ...pageData, title: e.target.value })}
        label="Outlined"
        variant="outlined"
        value={pageData.title}
      />
      <Button
        variant="contained"
        color="primary"
        size="medium"
        onClick={() => {
          document.getElementById("my_p").innerHTML = "Hacked";
        }}
      >
        Click messs
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="medium"
        onClick={() => {
          setPageData({ ...pageData, isLogedIn: !pageData.isLogedIn });
          setLoading(true);
          setTimeout(() => setLoading(false), 2000);
        }}
      >
        Click me
      </Button>
    </div>
  );
};

export default App;
