import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from './data/FeedbackData';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id ))
  }
  const editFeedback = () => {

  }
  return (
    <div>
    <Header />
    <div className="container">
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
