import { Loading } from "./components/Loading";
import { Header } from "./components/Header";
import { MainSection } from "./components/layouts/MainSection";

function App() {
  return (
    <div>
      <Header />

      <MainSection />
      <Loading />
    </div>
  );
}

export default App;
