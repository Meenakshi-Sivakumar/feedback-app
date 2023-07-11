import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
      item: {},
      edit: false
    })

    useEffect(() => {

    },[])

    //fetch data
    const fetchFeedback = async () => {
      const response = await fetch('https://localhost:5000/feeedback?_sort=id&_order=desc')
      const data = await response.json()
      setFeedback(data)
      setIsLoading(false)
    }

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
        isLoading,
        deleteFeedback,
        handleAdd,
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext