import { useState } from "react";
import QuizWelcome from "@/components/QuizWelcome";
import QuizQuestion from "@/components/QuizQuestion";
import QuizResults from "@/components/QuizResults";
import { questions } from "@/data/questions";

type GameState = "welcome" | "playing" | "results";

const Index = () => {
  const [gameState, setGameState] = useState<GameState>("welcome");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleStart = () => {
    setGameState("playing");
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setGameState("results");
    }
  };

  const handleRestart = () => {
    setGameState("welcome");
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  if (gameState === "welcome") {
    return <QuizWelcome onStart={handleStart} />;
  }

  if (gameState === "playing") {
    return (
      <QuizQuestion
        question={questions[currentQuestionIndex]}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={questions.length}
        onAnswer={handleAnswer}
      />
    );
  }

  return (
    <QuizResults
      score={score}
      totalQuestions={questions.length}
      onRestart={handleRestart}
    />
  );
};

export default Index;
