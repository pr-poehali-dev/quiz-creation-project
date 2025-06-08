import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const QuizResults = ({
  score,
  totalQuestions,
  onRestart,
}: QuizResultsProps) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  const getResultData = () => {
    if (percentage >= 80) {
      return {
        title: "Отлично! 🎉",
        message: "Ты настоящий эксперт!",
        color: "text-quiz-correct",
        bgColor: "from-quiz-correct/10 to-quiz-correct/5",
        icon: "Trophy" as const,
      };
    } else if (percentage >= 60) {
      return {
        title: "Хорошо! 👍",
        message: "Неплохой результат!",
        color: "text-primary",
        bgColor: "from-primary/10 to-primary/5",
        icon: "Award" as const,
      };
    } else {
      return {
        title: "Можно лучше 📚",
        message: "Попробуй еще раз!",
        color: "text-accent",
        bgColor: "from-accent/10 to-accent/5",
        icon: "Target" as const,
      };
    }
  };

  const result = getResultData();

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${result.bgColor} flex items-center justify-center p-4`}
    >
      <Card className="w-full max-w-md animate-scale-in">
        <CardHeader className="text-center space-y-4">
          <div
            className={`mx-auto w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center animate-pulse-ring`}
          >
            <Icon name={result.icon} size={40} className="text-white" />
          </div>

          <CardTitle className="text-3xl font-montserrat font-bold">
            {result.title}
          </CardTitle>

          <p className="text-lg font-open-sans text-muted-foreground">
            {result.message}
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="text-center space-y-2">
            <div
              className={`text-6xl font-montserrat font-bold ${result.color}`}
            >
              {score}/{totalQuestions}
            </div>
            <p className="text-sm font-open-sans text-muted-foreground">
              Правильных ответов
            </p>
          </div>

          <div className="bg-muted rounded-lg p-4 space-y-3">
            <div className="flex justify-between items-center font-open-sans">
              <span>Точность:</span>
              <span className="font-semibold">{percentage}%</span>
            </div>
            <div className="flex justify-between items-center font-open-sans">
              <span>Правильно:</span>
              <span className="font-semibold text-quiz-correct">{score}</span>
            </div>
            <div className="flex justify-between items-center font-open-sans">
              <span>Неправильно:</span>
              <span className="font-semibold text-quiz-incorrect">
                {totalQuestions - score}
              </span>
            </div>
          </div>

          <Button
            onClick={onRestart}
            className="w-full h-12 text-lg font-montserrat font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 transform hover:scale-105"
          >
            Пройти еще раз
            <Icon name="RotateCcw" size={20} className="ml-2" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizResults;
