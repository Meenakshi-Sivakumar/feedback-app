import FeedbackItem from './FeedbackItem';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';


function FeedbackList () {
  const {feedback, isLoading} = useContext(FeedbackContext);
    return  (
      (!feedback || feedback.length === 0)?
                (<p>No feedback yet</p>) 
                  : 
          (<div className='feedback-list'>
            {feedback.map((item) => (
              <FeedbackItem key={item.id} item={item} />
              ))}
          </div>)
        )
}

export default FeedbackList