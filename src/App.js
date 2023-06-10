import Main from "./components/Main/Main";
import portfolioData from "./portfolioData";
import Navigation from "./components/Navigation/Navigation";
function App() {
  return (
    <>
      <Main portfolioData={portfolioData} />
      <Navigation portfolioData={portfolioData}/>

    </>
  );
}

export default App;
