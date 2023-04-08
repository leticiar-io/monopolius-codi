import { Loading } from "./components/Loading";
import { Header } from "./components/Header";
import { MainSection } from "./components/layouts/MainSection";
import { AboutSection } from "./components/layouts/AboutSection";
import { PerrynaitorSection } from "./components/layouts/PerrynaitorSection";
import { QuestionsSection } from "./components/layouts/QuestionsSection";
import { OpinionsSection } from "./components/layouts/OpinionsSection";
import { ContactUsSection } from "./components/layouts/ContactUsSection";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="content">


      <MainSection />
      <AboutSection />
      <PerrynaitorSection />
      <QuestionsSection />
      <OpinionsSection />
      </div>

      <ContactUsSection />
      {/*  <Loading />  */}

      <footer>
        <p>
          Monoplius SA <span>&#169;</span> Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}

export default App;
