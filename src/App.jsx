import CanvasModel from "./canvas/index";
import Home from "./pages/Home";
import HowTo from "./components/HowTo";
import Features from "./components/Features";
import Form from "./components/Form";
import MailCanvas from "./canvas/MailCanvas";

function App() {

  return (
    <main className="app transition-all ease-in">
      <Home />
      <CanvasModel />
      <HowTo />
      <Features />
      <div className="form-can">
        <Form />
        <MailCanvas />
      </div>

    </main>
  )
}

export default App
