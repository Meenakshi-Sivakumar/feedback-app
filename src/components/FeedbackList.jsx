import FeedbackItem from './FeedbackItem';
import {motion, AnimatePresence} from 'framer-motion';

function FeedbackList ({ feedback, deleteFeedback , editFeedback }) {
    return  (
          <div className='feedback-list'>
            {feedback.map((item) => (
              <FeedbackItem key={item.id} item={item} deleteFeedback={deleteFeedback} editFeedback={editFeedback} />
              ))}
          </div>
        )
}

export default FeedbackList