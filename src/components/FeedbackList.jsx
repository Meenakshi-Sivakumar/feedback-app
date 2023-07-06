import FeedbackItem from './FeedbackItem';

function FeedbackList () {
    return  (
          <div className='feedback-list'>
            {feedback.map((item) => (
              <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
            ))}
          </div>
        )
}

export default FeedbackList