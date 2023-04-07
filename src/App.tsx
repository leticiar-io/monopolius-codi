import { Loading } from "./components/Loading";
import { Header } from "./components/Header";
import { MainSection } from "./components/layouts/MainSection";
import { AboutSection } from "./components/layouts/AboutSection";

function App() {
  return (
    <div>
      <Header />

      <MainSection />
      <AboutSection />
      <Loading /> 
    </div>
  );
}

export default App;
