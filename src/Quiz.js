import React, { useState } from "react";
import questions from "./questions";

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [results, setResults] = useState([]);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (selectedOption) => {
        const isCorrect = selectedOption === questions[currentQuestion].answer;

        // Füge die Antwort zur Result-Liste hinzu
        setResults((prevResults) => [
            ...prevResults,
            {
                question: questions[currentQuestion].question,
                selectedOption,
                correctAnswer: questions[currentQuestion].answer,
                isCorrect,
            },
        ]);

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowResult(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setResults([]);
        setShowResult(false);
    };

    return (
        <div className="quiz-container">
            {showResult ? (
                <div className="result">
                    <h2>Quiz beendet!</h2>
                    <p>Du hast {results.filter((result) => result.isCorrect).length} von {questions.length} Fragen richtig beantwortet.</p>
                    <h3>Ergebnisse:</h3>
                    <ul>
                        {results.map((result, index) => (
                            <li key={index}>
                                <strong>Frage:</strong> {result.question} <br />
                                <strong>Deine Antwort:</strong> {result.selectedOption} <br />
                                <strong>Richtige Antwort:</strong> {result.correctAnswer} <br />
                                {result.isCorrect ? (
                                    <span style={{ color: "green" }}>✔️ Richtig</span>
                                ) : (
                                    <span style={{ color: "red" }}>❌ Falsch</span>
                                )}
                            </li>
                        ))}
                    </ul>
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
