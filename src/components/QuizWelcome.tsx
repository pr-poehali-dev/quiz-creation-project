import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface QuizWelcomeProps {
  onStart: () => void;
}

const QuizWelcome = ({ onStart }: QuizWelcomeProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/10 flex items-center justify-center p-4">
      <Card className="w-full max-w-md animate-scale-in">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center animate-pulse-ring">
            <Icon name="Brain" size={32} className="text-white" />
          </div>
          <CardTitle className="text-3xl font-montserrat font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Викторина
          </CardTitle>
          <CardDescription className="text-lg font-open-sans">
            Проверь свои знания и узнай что-то новое!
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-3 text-sm font-open-sans text-muted-foreground">
            <div className="flex items-center gap-3">
              <Icon name="Clock" size={16} className="text-primary" />
              <span>10 интересных вопросов</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="Target" size={16} className="text-primary" />
              <span>Набери максимум баллов</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="Trophy" size={16} className="text-primary" />
              <span>Получи результат в конце</span>
            </div>
          </div>

          <Button
            onClick={onStart}
            className="w-full h-12 text-lg font-montserrat font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 transform hover:scale-105"
          >
            Начать викторину
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizWelcome;
