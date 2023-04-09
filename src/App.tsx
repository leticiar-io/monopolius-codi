import { Loading } from "./components/Loading";
import { Header } from "./components/Header";
import { MainSection } from "./components/layouts/MainSection";
import { AboutSection } from "./components/layouts/AboutSection";
import { PerrynaitorSection } from "./components/layouts/PerrynaitorSection";
import { QuestionsSection } from "./components/layouts/QuestionsSection";
import { OpinionsSection } from "./components/layouts/OpinionsSection";
import { ContactUsSection } from "./components/layouts/ContactUsSection";

import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <div>
      <Header />
      <motion.div
        className="content"
        transition={{ ease: "linear", stiffness: 100, delay: 7 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <MainSection />
        <AboutSection />
        <PerrynaitorSection />
        <QuestionsSection />
        <OpinionsSection />
        <ContactUsSection />

        <footer>
          <p>
            Monoplius SA <span>&#169;</span> Todos os direitos reservados.
          </p>
        </footer>
      </motion.div>

      <div className="loading">
        <Loading />
      </div>
    </div>
  );
}

export default App;
