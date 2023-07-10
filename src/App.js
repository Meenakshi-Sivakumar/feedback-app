import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPages";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <Routes>
          <Route 
            exact
            path="/" 
            element={
              <>
              <div className="container">
              <FeedbackForm />
              <FeedbackStats />
              <FeedbackList /> 
              </div>
              </>
              } 
            />
          <Route path="/about" element={<AboutPage />}/>
        </Routes>
        <AboutIconLink />
      </Router>
    </FeedbackProvider>
  );
}

export default App;
