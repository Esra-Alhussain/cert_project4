import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Importing useSelector

/**
 * Importing other components
 */
import Home from './components/Home';
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Discovery from './components/Discovery'
import PlayQuiz from './components/PlayQuiz';

import './styles/app.css';

import { 
  deleteQuiz, 
  deleteQuestion,  
  addQuestionToQuiz, 
  editQuiz, 
  createQuiz, 
  saveQuiz,
  updateHighestScore,
  loadQuizData }
  from './state/MainStateSlice';

const App = () => {
  
  const dispatch = useDispatch();
  const quizData = useSelector((state) => state.main.quizData);
   
  //Delete Quiz
  const deleteQuiz = (quizId) => {
    // //filter out the Quiz with the specified Id
    // const updatedQuizzes = quizData.filter((quiz) => {
    //   if (quiz.id === quizId) {
    //     // Check if the quiz exists in local storage
    //     const quizTitle = quiz.name;
    //     const quizDataString = localStorage.getItem(quizTitle);

    //     if (quizDataString){
    //       //Remove the quiz data from local storage
    //       localStorage.removeItem(quizTitle);
    //     }
    //     return false;
    //   } else {
    //     return true;
    //   }
    // });
    // setQuizData(updatedQuizzes);
      // Dispatch the deleteQuiz action with the quiz ID
      dispatch(deleteQuiz(quizId));
  };

  //Delete a Question and their answers from a Quiz
  const deleteQuestion = (questionId) => {
  //   // Filter out the question with the specified ID
  //   const updatedQuizzes = quizData.map(quiz => {
  //   // Filter out the question from each quiz's questions array
  //   const updatedQuestions = quiz.questions.filter(question => question.id !== questionId);
  //   return { ...quiz, questions: updatedQuestions };
  // });
  // // Update the state with the updated quiz data
  // setQuizData(updatedQuizzes);
  // alert("Question deleted!")
  // Dispatch the deleteQuestion action with the quiz ID and question ID
  dispatch(deleteQuestion({ quizId, questionId }));
};


const addQuestionToQuiz=(e,quizId,questionId)=>{
    //Get the Quiz ID and the Question ID
    // e.preventDefault()
    // console.log('clicked');
    // console.log('event',e);
    // console.log('quizId',quizId);
    // console.log('target',e.target);
    // console.log('questionId',questionId);

    // //Update the state with the new question
    // const newQuestion = {
    //   id: questionId,
    //   question: e.target.question.value,
    //   answers: [
    //     e.target.answer1.value,
    //     e.target.answer2.value,
    //     e.target.answer3.value,
    //     e.target.answer4.value,
    //   ],
    //   correctAnswers:e.target.correctAnswers.value,
    //   points: e.target.points.value,
    // };
    // //Find the quiz in the QuizData state by its ID
    // const updatedQuizData = quizData.map(quiz=> {
    //   if(quiz.id === quizId){
    //     //Add the new Question to the questions array of this quiz
    //     return{
    //       ...quiz,
    //       questions: [...quiz.questions, newQuestion]
    //     };
    //   }
    //   return quiz;
    // });
    // //Update the state with the updated quiz data 
    // setQuizData(updatedQuizData);
    // console.log(`quizData,${quizData}`)

    //  // Reset the form fields 
    //  e.target.reset();
    //  alert("Question added successfully!");
    e.preventDefault();
    // Dispatch the addQuestionToQuiz action with the quiz ID and new question object
    dispatch(addQuestionToQuiz({ quizId, question: newQuestion }));
  };

  //edit Quiz feature
  const editQuiz = (e, quizId) => {
    e.preventDefault();
    // Dispatch the editQuiz action with the quiz ID and updated quiz object
    dispatch(editQuiz({ quizId, updatedQuiz }));
    // e.preventDefault();

    // // Extracting data entered by the user
    // // const quizTitle= e.target.quizTitle.value;
    // const questionId = parseInt(e.target.ID.value);   //Get the question ID from the input
    // const question = e.target.question.value;
    // const answers = [
    //    e.target.answer1.value,
    //    e.target.answer2.value,
    //    e.target.answer3.value,
    //    e.target.answer4.value
    //   ];
    // const correctAnswers = e.target.correctAnswers.value;
    // const pointPerQuestion= e.target.points.value;

    // // console.log("Quiz Title:", quizTitle);
    // console.log("Questions:", question);
    // console.log("questionId:", questionId);

    // //Update the specific question in the quiz data
    // const updateQuizData = quizData.map(quiz => {
    //   if (quiz.id === quizId){
    //     const updatedQuestions = quiz.questions.map(q => {
    //       if (q.id === questionId){
    //         console.log("questionId:", questionId);

    //         return{
    //           ...q,
    //           question: question,
    //           answers: answers,
    //           correctAnswers: correctAnswers,
    //           points: pointPerQuestion
    //         };
            
    //       }else{
    //         console.log("the id is not found:", questionId);
    //         console.log("this is the q:", q);

    //         return q;
    //       }
    //     });
    //     return {...quiz, questions: updatedQuestions};
    //   }else{
    //     return quiz;
    //   }
    // });
    
    // // Updating the quiz data state with the new quiz object
    // console.log("questionId:", questionId);

    // setQuizData(updateQuizData);
    // console.log("updateQuizData:", updateQuizData);
    // console.log("updated")
    // // Reset the form fields 
    // e.target.reset();
    // alert("Quiz updated successfully!");


  };

  const createQuiz = (e) => {
    //get the QuizName and then update the state with it 
  //   e.preventDefault();
  //   const newQuiz = {
  //     id: quizData.length+1,
  //     name: e.target.quizTitle.value,
  //     difficulty: '',
  //     subject: '',
  //     highestScore: '',
  //     likes: 0,
  //     questions: [ ]
  // };
  // const newQuizData = quizData.concat(newQuiz)
  // setQuizData(newQuizData);

  // //update the state to include the new quiz object
  // // setQuizData(prevData => [...prevData, newQuiz])
  // console.log("clicked")
    e.preventDefault();
    // Dispatch the createQuiz action with the new quiz object
    dispatch(createQuiz(newQuiz));
  };

   //function to load the quiz data from local storage
   const loadQuiz =(e,quizTitle) => {
    e.preventDefault();

    try{
      //Retrive the JSON string from local storage
      const quizDataString= localStorage.getItem(quizTitle);

      //parse the JSON string back into JS objects
      if(quizDataString){
        const parsedQuizData = JSON.parse(quizDataString);

        // //update the quizData state by appending the loaded data
        // setQuizData(prevQuizState => [...prevQuizState, parsedQuizData]);

        // console.log('quizDataString',quizDataString)
        // console.log('Quiz data loaded successfully:', parsedQuizData);
        // console.log('quizData',quizData)

        // Dispatch the loadQuizData action with the parsed quiz data
        dispatch(loadQuizData(parsedQuizData));

        alert("Quiz data loaded successfully!")
      }else{
        console.log('Quiz data not found for title:', quizTitle);
        console.log('quizTitle:', quizTitle);

        alert('Quiz not found in local storage!');
      }
    }catch(error){
      console.error('Error loading quiz:', error);
      alert("Failed to load quiz!")
    }
  };

  const saveQuiz = (quizTitle) => {
     // Find the quiz object in quizData array whose name matches the given quizTitle
     const quizToSave = quizData.find((quiz) => quiz.name === quizTitle);

     // Check if a quiz object with the given title was found
     if (quizToSave) {
        //save the quiz object to the local storage after converting it to a JSON string
        try{
          localStorage.setItem(quizTitle, JSON.stringify(quizToSave));
          // Display a success message if the quiz was saved successfully
          alert("Quiz saved successfully!");
        }
          // Catch any errors that occur during the saving process
          catch(error) {
            console.error('Error saving quiz:', error);
            // Display an error message if saving the quiz failed
            alert("Failed to save a quiz!");
          }
     } 
      // If no quiz object with the given title was found, display a message indicating that the quiz was not found
     else {
       alert('Quiz not found!');
     };
    // console.log('quiztitle:', quizTitle);

    //   const quizToSave = quizData.find(quiz => quiz.name === quizTitle);
    //   if(quizToSave){
    //      try{

    //       //Convert quizData to a JSON string
    //       //Save the JSON to local storage
    //       localStorage.setItem(quizTitle, JSON.stringify(quizToSave));
    //       console.log('quiztitle:', quizTitle);
    //       console.log('quizDataString:', quizToSave);

    //       alert("Quiz saved successfully!")
    //     }catch(error){
    //       //Handle any errors that occurs during saving
    //       console.error('Error saving quiz:',error);
    //       alert("Failed to save a quiz!");
    //     }
    //  }else {
    //   alert('Quiz not found!');
    //  };
  };

  // Function to update the highest score in the parent component
  const handleUpdateHighestScore = (quizId, totalScore) => {
    // Dispatch an action containing the quiz ID and the new total score
    dispatch(updateHighestScore({ quizId, totalScore })); // Dispatch the action
    console.log(`Inside the update function`)

  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home/*" element={<Home quizData={quizData}  handleUpdateHighestScore={handleUpdateHighestScore} />} />
          <Route path="/dashboard/*" element={<Dashboard quizData={ quizData } createQuiz={createQuiz} addQuestionToQuiz={addQuestionToQuiz} deleteQuiz={deleteQuiz} deleteQuestion={deleteQuestion} editQuiz={editQuiz} saveQuiz={saveQuiz} loadQuiz={loadQuiz} />} />
          <Route path="/playQuiz/:id" element={<PlayQuiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App