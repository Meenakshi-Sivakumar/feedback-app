import { createContext, useState } from "react";
import FeedbackData from '../data/FeedbackData';

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState(FeedbackData)
    const [feedbackEdit, setFeedbackEdit] = useState({
      item: {},
      edit: false
    })

    //add feedback
    const handleAdd = (newFeedback) => {
        setFeedback([newFeedback, ...feedback])
      }

    //delete feedback
    const deleteFeedback = (id) => {
        setFeedback(feedback.filter((item) => item.id !== id ))
      }

    //edit feedback
    const editFeedback = (item) => {
        setFeedbackEdit({
          item,
          edit: true
        })
    }
    //update feedback
    const updateFeedback = (id, updItem) => {
      setFeedback(feedback.map((item) => (item.id === id? {...item, ...updItem} : item)))
    }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        handleAdd,
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext