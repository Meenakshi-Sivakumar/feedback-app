import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from './data/FeedbackData';
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

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
  return (
    <div>
    <Header />
    <div className="container">
    <FeedbackForm handleAdd={handleAdd}/>
    <FeedbackStats feedback={feedback} />
    {(!feedback || feedback.length === 0)?
       (<p>No feedback yet</p>) 
        : 
      (
          <FeedbackList feedback = {feedback} deleteFeedback={deleteFeedback} editFeedback={editFeedback}/>
      )} 
    </div>
    </div>
  );
}

export default App;
