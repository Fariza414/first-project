import NavBar from "../components/NavBar";
import Footer  from "../components/Footer";
import GptPage from "../components/GptPage";

const GenerationPage = () => {
    return (
      <div className="flex flex-col min-h-[100vh]">
        <NavBar />
        <GptPage />
        <Footer />
      </div>
    );
}

export default GenerationPage