import React, { useState } from "react";
import questions from "./questions";

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (selectedOption) => {
        if (selectedOption === questions[currentQuestion].answer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowResult(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
    };

    return (
        <div className="quiz-container">
            {showResult ? (
                <div className="result">
                    <h2>Quiz beendet!</h2>
                    <p>Du hast {score} von {questions.length} Fragen richtig beantwortet.</p>
                    <button onClick={restartQuiz}>Quiz neu starten</button>
                </div>
            ) : (
                <div className="question-card">
                    <h2>Frage {currentQuestion + 1} von {questions.length}</h2>
                    <p>{questions[currentQuestion].question}</p>
                    <div className="options">
                        {questions[currentQuestion].options.map((option, index) => (
                            <button key={index} onClick={() => handleAnswer(option)}>
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Quiz;
