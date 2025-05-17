import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Heart, Star, Fire, LightbulbFilament, CheckCircle, XCircle } from 'phosphor-react';
import { LevelIndicator } from './LearingComponents';

export const QuizHeader = ({ theme, hearts, points, currentStreak, title, subtitle, onGoBack }) => {
  return (
    <header className={`sticky top-0 z-50 ${theme.card.bg} backdrop-blur-md border-b ${theme.card.border} p-2 sm:p-3 shadow-md`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={onGoBack}
            className="mr-3 p-1.5 rounded-full hover:bg-white/10 transition-colors transform hover:scale-110 active:scale-95 duration-200"
          >
            <ArrowLeft size={20} weight="bold" className={`${theme.text.primary} animate-slideIn`} />
          </button>

          <div className="flex flex-col animate-slideIn">
            <span className={`text-sm md:text-base font-bold ${theme.text.heading}`}>{title}</span>
            <span className={`text-xs ${theme.text.light}`}>{subtitle}</span>
          </div>
        </div>

        <div className="flex items-center space-x-1.5 sm:space-x-3 md:space-x-4">
          <div className="flex items-center bg-white/10 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-lg transform hover:scale-105 transition-transform animate-fadeIn">
            <Fire weight="fill" size={16} className="text-orange-500 animate-icon-wiggle" />
            <span className={`ml-0.5 text-xs sm:text-sm font-semibold ${theme.text.primary}`}>{currentStreak}</span>
          </div>
          <div className="flex items-center bg-white/10 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-lg transform hover:scale-105 transition-transform animate-fadeIn">
            <Heart weight="fill" size={16} className="text-red-500 animate-pulse-custom" />
            <span className={`ml-0.5 text-xs sm:text-sm font-semibold ${theme.text.primary}`}>{hearts}</span>
          </div>
          <div className="flex items-center bg-white/10 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-lg transform hover:scale-105 transition-transform animate-fadeIn">
            <Star weight="fill" size={16} className="text-yellow-500 animate-icon-wiggle" />
            <span className={`ml-0.5 text-xs sm:text-sm font-semibold ${theme.text.primary}`}>{points}</span>
          </div>
           <LevelIndicator level={localStorage.getItem("level")} theme={theme} />
        </div>
      </div>
    </header>
  );
};

export const QuizProgress = ({ progress, currentQuestion, totalQuestions, theme }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white/20 backdrop-blur-sm rounded-lg p-3 shadow-md animate-slideUp">
      <div className="flex justify-between items-center mb-2">
        <span className={`text-sm font-medium ${theme.text.white}`}>Pertanyaan {currentQuestion} dari {totalQuestions}</span>
        <span className={`text-sm font-medium ${theme.text.white}`}>{Math.round(progress)}%</span>
      </div>
      <div className="w-full bg-white/30 rounded-full h-3 overflow-hidden shadow-inner">
        <div
          className={`h-3 rounded-full ${theme.accent.primary} transition-all duration-500 ease-out`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export const QuizContent = ({
  question,
  selectedAnswer,
  onSelectAnswer,
  isAnswerChecked,
  isCorrect,
  showHint,
  setShowHint,
  theme
}) => {
  const hintRef = useRef(null);
  const [hintVisible, setHintVisible] = useState(false);
  
  useEffect(() => {
    if (showHint) {
      setHintVisible(true);
      const timer = setTimeout(() => {
        setHintVisible(false);
        setShowHint(false);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [showHint, setShowHint]);

  if (!question) return null;

  return (
    <div className='mb-8 animate-fadeInUp'>
      <h3 className={`text-lg md:text-xl font-bold mb-4 ${theme.text.primary} animate-fadeIn`}>
        {question.question}
      </h3>

      {question.type === "image-to-text" && question.imageUrl && (
        <div className="mb-4 flex justify-center animate-pop relative">
          <img
            src={question.imageUrl}
            alt="Sign to identify"
            className="h-64 bg-white rounded-lg border-2 border-white/30 shadow-lg transform hover:scale-105 transition-transform"
          />
          
          {showHint && hintVisible && (
            <div 
              ref={hintRef} 
              className={`absolute top-20 flex items-center justify-center p-3 z-20 animate-fadeIn`}
            >
              <div className={`bg-amber-100 border border-amber-300 p-3 rounded-md shadow-lg max-w-md text-center backdrop-blur-sm`}>
                <p className={`text-sm font-medium text-amber-700`}>{question.hint}</p>
              </div>
            </div>
          )}
        </div>
      )}

      {question.type === "text-to-image" && question.letter && (
        <div className="mb-6 flex justify-center animate-pop relative">
          <div className={`${theme.accent.primary} w-24 h-24 flex items-center justify-center rounded-lg text-white text-4xl font-bold shadow-lg transform hover:scale-105 transition-transform`}>
            {question.letter}
          </div>
          
          {showHint && hintVisible && (
            <div 
              ref={hintRef} 
              className={`absolute inset-0 flex items-center justify-center p-3 z-20 animate-fadeIn`}
            >
              <div className={`bg-amber-100 border border-amber-300 p-3 rounded-md shadow-lg max-w-md text-center backdrop-blur-sm`}>
                <p className={`text-sm font-medium text-amber-700`}>{question.hint}</p>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
        {question.options.map((option, index) => {
          const isOptionSelected = selectedAnswer === option.id;
          let optionStyle = `p-3 border-2 rounded-lg flex items-center cursor-pointer transition-all duration-200 h-full shadow-md animate-fadeInUp`;
          
          const animationDelay = `${0.1 + index * 0.1}s`;

          if (isAnswerChecked) {
            if (option.isCorrect) {
              optionStyle += ` ${theme.accent.correct} border-green-600 text-white`;
            } else if (isOptionSelected && !option.isCorrect) {
              optionStyle += ` ${theme.accent.incorrect} border-red-600 text-white`;
            } else {
              optionStyle += ` ${theme.card.bg} border-gray-300`;
            }
          } else {
            if (isOptionSelected) {
              optionStyle += ` ${theme.accent.primary} border-transparent text-white transform scale-105`;
            } else {
              optionStyle += ` ${theme.card.bg} border-gray-300 hover:border-gray-400 hover:scale-102 transform transition-transform`;
            }
          }

          return (
            <div
              key={option.id}
              className={optionStyle}
              onClick={() => !isAnswerChecked && onSelectAnswer(option.id)}
              style={{ animationDelay }}
            >
              {!option.imageUrl && (
                <div className="flex items-center w-full">
                  <div className={`w-6 h-6 border-2 ${isOptionSelected ? 'bg-white border-white' : 'border-gray-400'} rounded-full mr-3 flex-shrink-0 flex items-center justify-center transition-all duration-200`}>
                    {isOptionSelected && <div className="w-3 h-3 bg-green-600 rounded-full animate-pop"></div>}
                  </div>
                  <span className={`flex-grow text-sm md:text-base ${isOptionSelected ? "text-white" : theme.text.question} `}>{option.text}</span>
                </div>
              )}

              {option.imageUrl && (
                <div className="flex flex-col items-center w-full bg-white">
                  <img
                    src={option.imageUrl}
                    alt={option.text || "Sign option"}
                    className={`h-40 object-cover rounded-lg transform hover:scale-105 transition-transform`}
                  />
                  {option.text && (
                    <span className={`mt-2 text-sm text-center`}>{option.text}</span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const QuizFeedback = ({ isCorrect, explanation, theme }) => {
  return (
    <div className={`
      p-4 rounded-lg mb-6 shadow-md border-2 animate-fadeInUp
      ${isCorrect
        ? `${theme.accent.correct}/10 border-green-500/30`
        : `${theme.accent.incorrect}/10 border-red-500/30`}
    `}>
      <div className="flex items-center gap-2 mb-2">
        {isCorrect ? (
          <>
            <CheckCircle size={24} weight="fill" className="text-green-500 animate-pop" />
            <h3 className={`font-bold ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
              Jawaban Benar!
            </h3>
          </>
        ) : (
          <>
            <XCircle size={24} weight="fill" className="text-red-500 animate-shake" />
            <h3 className={`font-bold ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
              Jawaban Salah
            </h3>
          </>
        )}
      </div>
      <p className={`text-sm ${theme.text.secondary}`}>{explanation}</p>
    </div>
  );
};

export const QuizFooter = ({
  isAnswerChecked,
  selectedAnswer,
  onCheckAnswer,
  onContinue,
  onToggleHint,
  showHint,
  isLastQuestion,
  theme
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 items-center animate-slideUp">
      {!isAnswerChecked && (
        <button
          onClick={onToggleHint}
          className={`
            sm:order-first flex items-center gap-2 px-4 py-2 rounded-lg shadow-md
            ${theme.button.hint} transition-all duration-200 transform hover:scale-105 active:scale-95
            ${showHint && 'bg-opacity-70'}
          `}
        >
          <LightbulbFilament size={20} weight="fill" className={showHint ? 'animate-icon-wiggle text-yellow-500' : ''} />
          <span>Petunjuk</span>
        </button>
      )}

      {!isAnswerChecked ? (
        <button
          onClick={onCheckAnswer}
          disabled={selectedAnswer === null}
          className={`
            flex-1 w-full sm:w-auto px-6 py-3 rounded-lg font-medium shadow-md
            transition-all duration-200 transform hover:scale-105 active:scale-95
            ${selectedAnswer === null
              ? theme.button.disabled
              : theme.button.check}
          `}
        >
          Periksa
        </button>
      ) : (
        <button
          onClick={onContinue}
          className={`
            flex-1 w-full sm:w-auto px-6 py-3 rounded-lg font-medium shadow-md
            ${theme.button.continue} transition-all duration-200 transform hover:scale-105 active:scale-95
          `}
        >
          {isLastQuestion ? 'Selesai' : 'Lanjut'}
        </button>
      )}
    </div>
  );
};