import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from './data/FeedbackData';
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPages";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id ))
  }
  const handleAdd = (newFeedback) => {
    setFeedback([newFeedback, ...feedback])
  }
  const editFeedback = () => {
    
  } 
  // todo edit rating 
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
              <FeedbackForm handleAdd={handleAdd}/>
              <FeedbackStats />
              {(!feedback || feedback.length === 0)?
                (<p>No feedback yet</p>) 
                  : 
                (
                    <FeedbackList deleteFeedback={deleteFeedback} editFeedback={editFeedback}/>
                )} 
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
