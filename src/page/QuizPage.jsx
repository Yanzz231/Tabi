import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// FUNCTION
import { isDaytime, quizData } from '../function/function';

// COMPONENTS
import { BackgroundImage } from '../component/BackgroundComponents';
import { QuizHeader, QuizProgress, QuizFooter, QuizFeedback, QuizContent } from '../component/QuizComponents';


const TabiQuizPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isDay, setIsDay] = useState(isDaytime());
  const currentStreak = localStorage.getItem("streak")
  const points = localStorage.getItem("xp")
  const hearts = localStorage.getItem("heart")
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const [quiz, setQuiz] = useState({ questions: [] });
  const [loop, setLoop] = useState(true);

  const hintRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    if(localStorage.getItem(parseInt(id) - 1) === null && id !== "1") {
       window.location.href = "/learn"
    }

    if (localStorage.getItem("email") === null) {
      window.location.href = "/login"
    }

    if (loop) {
      const result_data = quizData(parseInt(id), "/img/sign_hand/");
      if (result_data === undefined || localStorage.getItem(id) !== null) navigate("/learn");
      setQuiz(result_data);
      setLoop(false);
    }

    const updateTime = () => setIsDay(isDaytime());
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, [loop, id, navigate]);


  const colors = {
    day: {
      bg: 'from-[#8BC34A]/20 to-[#2E7D32]/30',
      card: {
        bg: 'bg-[#F5F2EB]/90',
        border: 'border-[#F5F2EB]/20',
        highlight: 'bg-[#5D6E47]'
      },
      accent: {
        primary: 'bg-[#5D6E47]',
        secondary: 'bg-[#7D5F40]',
        tertiary: 'bg-[#A67B5B]',
        correct: 'bg-[#5D6E47]',
        incorrect: 'bg-[#F44336]'
      },
      button: {
        primary: 'bg-[#5D6E47] hover:bg-[#4A583A] text-white',
        secondary: 'bg-[#7D5F40] hover:bg-[#6A5037] text-white',
        disabled: 'bg-gray-400 text-gray-600',
        check: 'bg-[#5D6E47] hover:bg-[#4A583A] text-white',
        continue: 'bg-[#5D6E47] hover:bg-[#4A583A] text-white',
        hint: 'bg-[#7D5F40] hover:bg-[#6A5037] text-white/90'
      },
      text: {
        primary: 'text-gray-800',
        secondary: 'text-gray-600',
        light: 'text-gray-500',
        white: 'text-white',
        heading: 'text-gray-900',
        question: 'text-gray-800'
      },
      badge: 'bg-[#F5F2EB]/90 text-[#3C4A2A]',
    },
    night: {
      bg: 'from-indigo-900/80 to-purple-900/80',
      text: {
        heading: 'text-white',
        primary: 'text-white',
        secondary: 'text-white/80',
        light: 'text-white/60',
        white: 'text-white',
        question: 'text-white'
      },
      card: {
        bg: 'bg-[#1A2238]/60',
        border: 'border-indigo-900',
        highlight: 'bg-green-500'
      },
      accent: {
        primary: 'bg-green-400',
        secondary: 'bg-green-900',
        tertiary: 'bg-green-400',
        correct: 'bg-green-500',
        incorrect: 'bg-red-500'
      },
      button: {
        primary: 'bg-green-500 hover:bg-green-600 text-white',
        secondary: 'bg-white/10 hover:bg-white/20 text-white border border-white/20',
        disabled: 'bg-gray-700 text-gray-500',
        check: 'bg-green-500 hover:bg-green-600 text-white',
        continue: 'bg-green-500 hover:bg-green-600 text-white',
        hint: 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
      },
      badge: 'bg-green-500/20 text-green-300',
    }
  };

  const theme = isDay ? colors.day : colors.night;

  const handleAnswerSelect = (answerId) => {
    if (!isAnswerChecked) {
      setSelectedAnswer(answerId);
    }
  };

  const isAnswerComplete = () => {
    return selectedAnswer !== null;
  };

  const checkAnswer = () => {
    if (!isAnswerComplete()) return;

    const currentQuizQuestion = quiz?.questions[currentQuestion];
    const correctOption = currentQuizQuestion.options.find(option => option.isCorrect);
    const isAnswerCorrect = selectedAnswer === correctOption.id;

    setIsCorrect(isAnswerCorrect);
    setIsAnswerChecked(true);

    if (isAnswerCorrect) {
      setScore(score + 10);
    }
  };

  const goToNextQuestion = () => {
    if (cardRef.current) {
      cardRef.current.classList.add('animate-fadeOut');

      setTimeout(() => {
        if (currentQuestion < quiz?.questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          const getLesson = localStorage.getItem("lesson") || "0";
          localStorage.setItem("lesson", parseInt(getLesson) + 1);

          const getXp = localStorage.getItem("xp") || "0";
          localStorage.setItem("xp", parseInt(getXp) + 20);

          localStorage.setItem(id, score);
          navigate('/quiz-results', {
            state: {
              score,
              totalQuestions: quiz?.totalQuestions,
              hearts: hearts
            }
          });
        }

        setSelectedAnswer(null);
        setIsAnswerChecked(false);
        setIsCorrect(false);
        setShowHint(false);

        if (cardRef.current) {
          cardRef.current.classList.remove('animate-fadeOut');
          cardRef.current.classList.add('animate-fadeIn');
        }
      }, 300);
    }
  };

  const toggleHint = () => {
    setShowHint(!showHint);
  };

  const scrollToHint = () => {
    if (hintRef.current) {
      hintRef.current.classList.add('animate-shake');

      setTimeout(() => {
        hintRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }, 200);

      setTimeout(() => {
        if (hintRef.current) {
          hintRef.current.classList.remove('animate-shake');
        }
      }, 1000);
    }
  };

  const goBack = () => {
    navigate('/learn');
  };

  const currentQuizQuestion = quiz?.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quiz?.totalQuestions) * 100;

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg} relative overflow-hidden`}>
      <BackgroundImage image={"/img/background/image.jpg"} isDay={isDay} />

      <QuizHeader
        theme={theme}
        hearts={hearts}
        points={points}
        currentStreak={currentStreak}
        title={quiz?.title}
        subtitle={quiz?.subtitle}
        onGoBack={goBack}
      />

      <div className="container mx-auto px-3 md:px-4 pb-24 pt-4 md:pt-6">
        <QuizProgress
          progress={progress}
          currentQuestion={currentQuestion + 1}
          totalQuestions={quiz?.totalQuestions || 0}
          theme={theme}
        />

        <div
          ref={cardRef}
          className={`${theme.card.bg} rounded-xl backdrop-blur-md p-4 md:p-6 border ${theme.card.border} shadow-xl mt-4 md:mt-6 max-w-3xl mx-auto animate-fadeIn transition-all duration-300`}
        >
          <QuizContent
            question={currentQuizQuestion}
            selectedAnswer={selectedAnswer}
            onSelectAnswer={handleAnswerSelect}
            isAnswerChecked={isAnswerChecked}
            isCorrect={isCorrect}
            showHint={showHint}
            theme={theme}
            hintRef={hintRef}
            setShowHint={setShowHint}
          />

          {isAnswerChecked && (
            <QuizFeedback
              isCorrect={isCorrect}
              explanation={currentQuizQuestion?.explanation}
              theme={theme}
            />
          )}

          <QuizFooter
            isAnswerChecked={isAnswerChecked}
            selectedAnswer={isAnswerComplete()}
            onCheckAnswer={checkAnswer}
            onContinue={goToNextQuestion}
            onToggleHint={toggleHint}
            onScrollToHint={scrollToHint}
            showHint={showHint}
            isLastQuestion={currentQuestion === quiz?.totalQuestions - 1}
            theme={theme}
          />
        </div>
      </div>
    </div>
  );
};

export default TabiQuizPage;