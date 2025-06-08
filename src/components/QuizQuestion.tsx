import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

interface Answer {
  id: string;
  text: string;
  isCorrect: boolean;
}

interface Question {
  id: string;
  text: string;
  answers: Answer[];
}

interface QuizQuestionProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (isCorrect: boolean) => void;
}

const QuizQuestion = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
}: QuizQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (answerId: string) => {
    if (selectedAnswer) return;

    setSelectedAnswer(answerId);
    setShowResult(true);

    const answer = question.answers.find((a) => a.id === answerId);
    setTimeout(() => {
      onAnswer(answer?.isCorrect || false);
    }, 1500);
  };

  const getAnswerStyle = (answer: Answer) => {
    if (!showResult) {
      return selectedAnswer === answer.id
        ? "bg-quiz-selected text-white border-quiz-selected"
        : "bg-white hover:bg-quiz-hover border-gray-200 hover:border-primary transition-all duration-200";
    }

    if (answer.isCorrect) {
      return "bg-quiz-correct text-white border-quiz-correct";
    }

    if (selectedAnswer === answer.id && !answer.isCorrect) {
      return "bg-quiz-incorrect text-white border-quiz-incorrect";
    }

    return "bg-gray-100 text-gray-400 border-gray-200";
  };

  const progress = (questionNumber / totalQuestions) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl animate-fade-in">
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-between text-sm font-open-sans text-muted-foreground">
            <span>
              Вопрос {questionNumber} из {totalQuestions}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>

          <Progress value={progress} className="h-2" />

          <CardTitle className="text-xl md:text-2xl font-montserrat font-semibold leading-relaxed">
            {question.text}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">
          {question.answers.map((answer) => (
            <Button
              key={answer.id}
              variant="outline"
              className={`w-full p-4 h-auto text-left justify-start font-open-sans text-base border-2 ${getAnswerStyle(answer)}`}
              onClick={() => handleAnswerClick(answer.id)}
              disabled={selectedAnswer !== null}
            >
              <span className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center mr-3 flex-shrink-0">
                {String.fromCharCode(65 + question.answers.indexOf(answer))}
              </span>
              {answer.text}
            </Button>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizQuestion;
