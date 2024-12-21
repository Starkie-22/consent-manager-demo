import { Routes, Route } from "react-router-dom";
import InputForm from "./components/InputForm";
import ConsentScreen from "./components/ConsentScreen";
import ValidateTokenScreen from "./components/ValidateTokenScreen";
import Layout from "./components/Layout";
import "./app.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<InputForm />} />
        <Route path="/consent" element={<ConsentScreen />} />
        <Route path="/validate-token" element={<ValidateTokenScreen />} />
      </Routes>
    </Layout>
  );
}

export default App;
