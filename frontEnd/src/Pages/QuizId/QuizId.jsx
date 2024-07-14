import React from 'react'
import { useLocation } from 'react-router-dom'
import { FaCopy } from "react-icons/fa";
import { toast } from 'react-toastify';
import "./QuizId.css"
const QuizId = () => {
  const {state} = useLocation();
  const handleCopyURL = async () => {
    try {
      const text = state?.data?.quizID;
      await navigator.clipboard.writeText(text);
      toast.success("QuizID has been copied");
    } catch (err) {
       toast.error(err.message);
    }
  }
  
  return (
    <div className='quiz_id_page'>
          <div className='Quiz-heading'><h2>Share this special Quiz ID to join the thrill!</h2></div>
          <div className='Quiz-ID'><h2>{state?.data?.quizID} <FaCopy className='Quiz-ID-copy' onClick={handleCopyURL} /></h2></div>
    </div>
  )
}

export default QuizId
