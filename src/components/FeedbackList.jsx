import FeedbackItem from './FeedbackItem';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Spinner from './shared/Spinner';

function FeedbackList () {
  const {feedback, isLoading} = useContext(FeedbackContext);

    return isLoading ? <Spinner /> :
    (<div className='feedback-list'>
            {feedback.map((item) => (
              <FeedbackItem key={item.id} item={item} />
              ))}
      </div>)
}

export default FeedbackList