import FeedbackItem from './FeedbackItem';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';


function FeedbackList ({ deleteFeedback , editFeedback }) {
  const {feedback} = useContext(FeedbackContext);
    return  (
          <div className='feedback-list'>
            {feedback.map((item) => (
              <FeedbackItem key={item.id} item={item} deleteFeedback={deleteFeedback} editFeedback={editFeedback} />
              ))}
          </div>
        )
}

export default FeedbackList