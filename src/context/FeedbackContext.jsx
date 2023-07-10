import { createContext, useState } from "react";
import FeedbackData from '../data/FeedbackData';

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState(FeedbackData)
    const handleAdd = (newFeedback) => {
        setFeedback([newFeedback, ...feedback])
      }
    const deleteFeedback = (id) => {
        setFeedback(feedback.filter((item) => item.id !== id ))
      }
    const editFeedback = () => {

    }
    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        handleAdd,
        editFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext