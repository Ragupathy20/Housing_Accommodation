import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { HouseListPage } from "./pages/HouseListPage";
import { Error } from "./pages/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { AboutUs } from "./pages/AboutUs";

// import Chatbot from "react-chatbot-kit";
// import config from "./configs/chatbotConfig";
// import MessageParser from "./chatbot/MessageParser";
// import ActionProvider from "./chatbot/ActionProvider";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/houseList" element={<HouseListPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <div className="App">
        {/* <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
