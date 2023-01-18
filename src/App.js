import "./App.css";

const App = () => {
  const name = "";
  const isNameShowing = false;

  return (
    <div className="App">
      <h1>Hello {isNameShowing ? name : "someone"}</h1>
      {name ? (
        <>
          <h1>{name}</h1>
        </>
      ) : (
        <>
          <p>No name</p>
        </>
      )}
    </div>
  );
};

export default App;
