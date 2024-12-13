import React, { useState } from "react";
import Confetti from "react-confetti";
import "./endLevel.css";
import { useNavigate } from "react-router-dom";

const EndLevel = ({}) => {
  const [showQuestion, setQuestion] = useState(true);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [errorAnswer, setErrorAnswer] = useState(false);

  const navigate = useNavigate();

  const onShowCorrectAnswer = () => {
    setQuestion(false);
    setCorrectAnswer(true);
  };

  const incorrectAnswer = () => {
    setQuestion(false);
    setErrorAnswer(true);
  };

  const restart = () => {
    window.location.reload();
  };

  const continueToNextLevel = () => {
      navigate("/quiz/acidificacion-de-los-oceanos");
  }

  return (
    <>
      {showQuestion && (
        <div className="question-container">
          <Confetti
          />
          <div className="question-message">
            De acuerdo al problema ambiental de la escasez del agua, es cierto
            que el cambio climático contribuye a la disminución de los recursos
            hídricos?
          </div>
        <button
            className="question-true-button"
            onClick={onShowCorrectAnswer}
          >
            Verdadero
          </button>
          <button className="question-false-button" onClick={incorrectAnswer}>
            Falso
          </button>
        </div>
      ) }

      {correctAnswer && (
                <div className="question-container">
                <div className="question-message">Muy bien!!! Ganaste 1 punto</div>
                <button className="question-true-button" onClick={continueToNextLevel}>
                  Continuar al siguiente nivel
                </button>
              </div>
      )}

      
      {errorAnswer && (
        <div className="question-container">
          <div className="question-message">Intentalo Nuevamente</div>
          <button className="question-true-button" onClick={restart}>
            Continuar
          </button>
        </div>
    )}
      
    </>
  );
};

export default EndLevel;
