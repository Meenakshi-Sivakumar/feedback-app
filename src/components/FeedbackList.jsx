import FeedbackItem from './FeedbackItem';

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