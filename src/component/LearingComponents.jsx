import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    CheckCircle,
    Star,
    Lock,
    CaretDown,
    CaretRight
} from 'phosphor-react';

export const LessonCard = ({ lesson, theme }) => {
    const navigate = useNavigate();

    const handleLessonClick = () => {
        if (lesson.locked || lesson.completed) return;

        navigate(`/quiz/${lesson.id}`);
    };

    const getBgColor = () => {
        if (lesson.completed) return theme.accent.secondary;
        if (lesson.active) return theme.accent.primary;
        if (lesson.locked) return 'bg-gray-400';
        return theme.accent.tertiary;
    };

    const getCursorStyle = () => {
        if (lesson.locked) return 'cursor-not-allowed';
        if (lesson.completed) return 'cursor-not-allowed';
        return 'cursor-pointer';
    };

    return (
        <div className="relative animate-slideIn">
            <div
                className={`
                  rounded-lg p-3 md:p-4 
                  ${getBgColor()} 
                  ${lesson.completed || lesson.active ? 'text-white' : 'text-gray-700'}
                  transition-all duration-200 hover:shadow-md
                  ${getCursorStyle()}
                  ${!lesson.locked && 'hover:scale-102 active:scale-98'}
                `}
                onClick={handleLessonClick}
            >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

                    <div className="flex items-center space-x-2">
                        {lesson.completed ? (
                            <CheckCircle weight="fill" size={20} className="text-white flex-shrink-0" />
                        ) : lesson.locked ? (
                            <Lock weight="fill" size={20} className="text-gray-600 flex-shrink-0" />
                        ) : (
                            <div className="w-5 h-5 rounded-full border-2 border-white/50 flex-shrink-0" />
                        )}
                        <h3 className="font-medium text-sm md:text-base">{lesson.title}</h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mt-1 sm:mt-0">
                        <DifficultyBadge level={lesson.difficulty} />

                        <div className="bg-white/20 px-2 py-1 rounded-md text-xs font-medium">
                            {lesson.type}
                        </div>

                        <div className="bg-white/20 px-2 py-1 rounded-md text-xs font-medium flex items-center">
                            <Star size={12} weight="fill" className="mr-1" />
                            {lesson.xp} XP
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute left-4 top-full w-0.5 h-4 bg-gray-300 sm:h-6 z-0"></div>
        </div>
    );
};

export const DifficultyBadge = ({ level }) => {
    const getColor = () => {
        switch (level) {
            case "Mudah": return "bg-green-500";
            case "Sedang": return "bg-yellow-500";
            case "Sulit": return "bg-red-500";
            default: return "bg-gray-500";
        }
    };

    return (
        <span className={`px-2 py-1 text-xs rounded-full ${getColor()} text-white font-medium flex items-center justify-center`}>
            {level}
        </span>
    );
};

export const LearningUnit = ({ unit, expandedUnit, toggleUnit, theme, filter = 'all' }) => {

    const filteredLessons = unit.lessons.filter(lesson => {
        if (filter === 'all') return true;
        if (filter === 'active') return lesson.active;
        if (filter === 'completed') return lesson.completed;
        if (filter === 'locked') return lesson.locked;
        return true;
    });

    const shouldShowUnit = filteredLessons.length > 0 || filter === 'all';

    if (!shouldShowUnit) return null;

    return (
        <div
            className={`${theme.card.bg} rounded-xl p-4 md:p-5 hover:shadow-lg transition-all border ${theme.card.border} animate-fadeInUp`}
        >
            <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleUnit(unit.id)}
            >
                <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="text-3xl md:text-4xl">{unit.icon}</div>
                    <div className="flex-grow">
                        <h3 className={`text-base md:text-xl font-bold ${theme.text.heading}`}>{unit.title}</h3>
                        <p className={`text-xs md:text-base ${theme.text.light} mt-1 line-clamp-2`}>{unit.description}</p>

                        <div className="w-full bg-gray-400 rounded-full h-1.5 mt-2 md:mt-3 overflow-hidden">
                            <div
                                className={`h-1.5 rounded-full ${theme.accent.secondary} transition-all duration-1000 ease-in-out`}
                                style={{ width: `${unit.progress}%` }}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex items-center ml-2">
                    <span className={`text-xs md:text-base font-medium ${theme.text.secondary} mr-2`}>{unit.progress}%</span>
                    {expandedUnit === unit.id ? (
                        <CaretDown size={18} className={`${theme.text.primary} transition-transform duration-300`} />
                    ) : (
                        <CaretRight size={18} className={`${theme.text.primary} transition-transform duration-300`} />
                    )}
                </div>
            </div>

            {expandedUnit === unit.id && (
                <div className="mt-6 space-y-6 overflow-hidden animate-slideUp">
                    {filteredLessons.length > 0 ? (
                        filteredLessons.map((lesson, index) => (
                            <LessonCard
                                key={lesson.id}
                                lesson={lesson}
                                theme={theme}
                            />
                        ))
                    ) : (
                        <div className={`text-center py-4 ${theme.text.light} text-sm animate-fadeIn`}>
                            Tidak ada pelajaran yang sesuai dengan filter ini.
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export const LevelIndicator = ({ level = 5, theme }) => (
    <div className="flex items-center">
        <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full ${theme.accent.primary} flex items-center justify-center ${theme.text.white} font-bold text-sm md:text-lg`}>
            {level}
        </div>
        <div className="ml-2">
            <span className={`text-xs ${theme.text.light}`}>LEVEL</span>
            <div className="w-16 md:w-20 h-1.5 bg-gray-400 rounded-full mt-1">
                <div className={`h-1.5 rounded-full ${theme.accent.secondary}`} style={{ width: `${(localStorage.getItem("xp") / 5) % 100}%` }}></div>
            </div>
        </div>
    </div>
);
