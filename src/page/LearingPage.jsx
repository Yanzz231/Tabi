import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Tree, HandPalm, Trophy, Lock,
  House, BookOpen, ChartLine, UserCircle,
} from 'phosphor-react';

// FUNCTION
import { isDaytime, colorData } from '../function/function';

// COMPONENT
import { LearningUnit } from '../component/LearingComponents';
import { BackgroundImage } from '../component/BackgroundComponents';
import { HeaderStat } from '../component/HeaderComponents';

const TabiLearningPage = () => {
  const navigate = useNavigate();
  const [isDay, setIsDay] = useState(isDaytime());
  const [activePath, setActivePath] = useState(1);
  const [expandedUnit, setExpandedUnit] = useState(null);
  const currentStreak = localStorage.getItem("streak")
  const points = localStorage.getItem("xp")
  const hearts = localStorage.getItem("heart")

  useEffect(() => {
    if (localStorage.getItem("email") === null) {
      window.location.href = "/login"
    }
    
    const updateTime = () => setIsDay(isDaytime());
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const colors = colorData("learing")

  const theme = isDay ? colors.day : colors.night;

  const learningPaths = [
    {
      id: 1,
      name: "Isyarat Dasar",
      icon: <Tree weight="fill" size={28} />,
      progress: (localStorage.getItem("1") ? 25 : 0) + (localStorage.getItem("2") ? 25 : 0) + (localStorage.getItem("3") ? 25 : 0) + (localStorage.getItem("4") ? 25 : 0) +   (localStorage.getItem("5") ? 25 : 0) + (localStorage.getItem("6") ? 25 : 0) + (localStorage.getItem("7") ? 25 : 0) + (localStorage.getItem("8") ? 25 : 0) / 2,
      color: theme.accent.primary
    },
    {
      id: 2,
      name: "Percakapan",
      icon: <HandPalm weight="fill" size={28} />,
      progress: 0,
      locked: true,
      color: 'bg-gray-500'
    },
    {
      id: 3,
      name: "Ekspresi",
      icon: <Trophy weight="fill" size={28} />,
      progress: 0,
      locked: true,
      color: 'bg-gray-500'
    }
  ];

  const learningUnits = [
    {
      id: 1,
      title: "Alfabet Isyarat Hutan",
      description: "Temukan rahasia komunikasi tersembunyi di antara rimbunnya pepohonan",
      icon: "🙌",
      progress: (localStorage.getItem("1") ? 25 : 0) + (localStorage.getItem("2") ? 25 : 0) + (localStorage.getItem("3") ? 25 : 0) + (localStorage.getItem("4") ? 25 : 0),
      lessons: [
        {
          id: 1,
          title: "Alfabet Isyarat A-E",
          active: localStorage.getItem(1) === null ? true : false,
          completed: localStorage.getItem(1) === null ? false : true,
          difficulty: "Mudah",
          type: "Latihan",
          xp: 10
        },
        {
          id: 2,
          title: "Alfabet Isyarat F-J",
          active: localStorage.getItem(2) === null && localStorage.getItem(1) !== null ? true : false,
          locked: localStorage.getItem(1) === null ? true : false,
          completed: localStorage.getItem(2) === null ? false : true,
          difficulty: "Mudah",
          type: "Latihan",
          xp: 15
        },
        {
          id: 3,
          title: "Alfabet Isyarat K-O",
          active: localStorage.getItem(3) === null && localStorage.getItem(2) !== null ? true : false,
          locked: localStorage.getItem(2) === null ? true : false,
          completed: localStorage.getItem(3) === null ? false : true,
          difficulty: "Sedang",
          type: "Tantangan",
          xp: 20
        },
        {
          id: 4,
          title: "Alfabet Isyarat P-T",
          active: localStorage.getItem(4) === null && localStorage.getItem(3) !== null ? true : false,
          locked: localStorage.getItem(3) === null ? true : false,
          completed: localStorage.getItem(4) === null ? false : true,
          difficulty: "Sulit",
          type: "Ujian",
          xp: 30
        }
      ]
    },
    {
      id: 2,
      title: "Kata-Kata Pertama",
      description: "Belajar kata-kata dasar dalam bahasa isyarat untuk komunikasi sehari-hari",
      icon: "🤟",
      progress: (localStorage.getItem("5") ? 25 : 0) + (localStorage.getItem("6") ? 25 : 0) + (localStorage.getItem("7") ? 25 : 0) + (localStorage.getItem("8") ? 25 : 0),
      lessons: [
        {
          id: 5,
          title: "Alfabet Isyarat U-Z",
          active: localStorage.getItem(5) === null && localStorage.getItem(4) !== null ? true : false,
          locked: localStorage.getItem(4) === null ? true : false,
          completed: localStorage.getItem(5) === null ? false : true,
          difficulty: "Mudah",
          type: "Latihan",
          xp: 10
        },
        {
          id: 6,
          title: "Angka Isyarat 1-4",
          active: localStorage.getItem(6) === null && localStorage.getItem(5) !== null ? true : false,
          locked: localStorage.getItem(5) === null ? true : false,
          completed: localStorage.getItem(6) === null ? false : true,
          difficulty: "Mudah",
          type: "Latihan",
          xp: 15
        },
        {
          id: 7,
          title: "Angka Isyarat 5-8",
          active: localStorage.getItem(7) === null && localStorage.getItem(6) !== null ? true : false,
          locked: localStorage.getItem(6) === null ? true : false,
          completed: localStorage.getItem(7) === null ? false : true,
          difficulty: "Sedang",
          type: "Tantangan",
          xp: 20
        },
        {
          id: 8,
          title: "Angka Isyarat 9-10 dan Kombinasi",
          active: localStorage.getItem(8) === null && localStorage.getItem(7) !== null ? true : false,
          locked: localStorage.getItem(7) === null ? true : false,
          completed: localStorage.getItem(8) === null ? false : true,
          difficulty: "Sedang",
          type: "Tantangan",
          xp: 20
        }
      ]
    }
  ];

  const toggleUnit = (unitId) => {
    setExpandedUnit(expandedUnit === unitId ? null : unitId);
  };

  const navItems = [
    { icon: <House size={22} weight="fill" />, label: "Beranda", path: "/beranda" },
    { icon: <BookOpen size={22} weight="fill" />, label: "Belajar", path: "/learn", active: true },
    { icon: <ChartLine size={22} weight="fill" />, label: "Peringkat", path: "/rankings" },
    { icon: <UserCircle size={22} weight="fill" />, label: "Profil", path: "/profile" }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg} relative overflow-hidden`}>

      {/* EFFECT */}
      <BackgroundImage image={"/img/background/image.jpg"} isDay={isDay} />

      <HeaderStat theme={theme} points={points} currentStreak={currentStreak} hearts={hearts}/>

      <div className="container mx-auto px-3 md:px-4 pb-24 lg:pb-8 lg:pt-6">
        <div className="mt-4 md:mt-6 mb-6 md:mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {learningPaths.map(path => (
              <button
                key={path.id}
                className={`
                  relative flex items-center rounded-xl overflow-hidden
                  ${path.locked ? theme.button.disabled : path.color + ' text-white'}
                  transition-all duration-300 shadow-md 
                  ${!path.locked && 'hover:scale-103 active:scale-97'}
                  ${activePath === path.id ? 'ring-2 ring-white' : ''}
                  ${path.locked ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}
                `}
                onClick={() => !path.locked && setActivePath(path.id)}
                disabled={path.locked}
              >
                <div className="p-3 md:p-4 flex items-center gap-3 w-full">
                  <div className="bg-white/20 p-2 rounded-lg">
                    {path.icon}
                  </div>
                  <div className="flex flex-col items-start flex-grow">
                    <span className="text-sm font-semibold">{path.name}</span>
                    {path.locked ? (
                      <div className="flex items-center mt-1">
                        <Lock size={14} />
                        <span className="text-xs ml-1">Terkunci</span>
                      </div>
                    ) : (
                      <div className="w-full bg-white/20 h-1.5 rounded-full mt-1 overflow-hidden">
                        <div
                          className="h-1.5 bg-white rounded-full transition-all duration-1000 ease-in-out"
                          style={{ width: `${path.progress}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-6">

          {/* LESSON */}
          <div className="lg:col-span-2">
            <div className={`${theme.card.bg} rounded-xl backdrop-blur-md p-4 md:p-6 border ${theme.card.border} shadow-xl animate-fadeInUp mb-6 lg:mb-0`}>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4 md:mb-6">
                <div>
                  <h2 className={`text-lg md:text-xl font-bold ${theme.text.heading}`}>Peta Belajar: {learningPaths.find(p => p.id === activePath)?.name}</h2>
                  <p className={`text-xs md:text-sm ${theme.text.light} mt-1`}>Selesaikan setiap unit untuk menguasai bahasa isyarat</p>
                </div>
                <div className={`text-sm ${theme.text.primary} font-medium bg-white/10 px-3 py-1 rounded-lg`}>
                  {((localStorage.getItem("1") ? 25 : 0) + (localStorage.getItem("2") ? 25 : 0) + (localStorage.getItem("3") ? 25 : 0) + (localStorage.getItem("4") ? 25 : 0) +   (localStorage.getItem("5") ? 25 : 0) + (localStorage.getItem("6") ? 25 : 0) + (localStorage.getItem("7") ? 25 : 0) + (localStorage.getItem("8") ? 25 : 0)) / 2}% Selesai
                </div>
              </div>

              <div className="w-full bg-gray-400 rounded-full h-2 mb-6 md:mb-8 overflow-hidden">
                <div
                  className={`h-2 rounded-full ${theme.accent.primary} transition-all duration-1000 ease-in-out`}
                  style={{ width: `${(localStorage.getItem("1") ? 25 : 0) + (localStorage.getItem("2") ? 25 : 0) + (localStorage.getItem("3") ? 25 : 0) + (localStorage.getItem("4") ? 25 : 0) +   (localStorage.getItem("5") ? 25 : 0) + (localStorage.getItem("6") ? 25 : 0) + (localStorage.getItem("7") ? 25 : 0) + (localStorage.getItem("8") ? 25 : 0) / 2}%` }}
                />
              </div>

              <div className="space-y-4 md:space-y-6">
                {learningUnits.map((unit, unitIndex) => (
                  <LearningUnit
                    key={unit.id}
                    unit={unit}
                    expandedUnit={expandedUnit}
                    toggleUnit={toggleUnit}
                    theme={theme}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Card - Desktop */}
          <div className="hidden lg:block">
            <div className={`${theme.card.bg} rounded-xl backdrop-blur-md p-4 md:p-6 border ${theme.card.border} shadow-xl animate-fadeInUp h-full`}>
              <h3 className={`text-xl font-bold ${theme.text.heading} mb-4`}>Menu Navigasi</h3>

              <div className="space-y-3">
                {navItems.map((item, index) => (
                  <button
                    key={index}
                    className={`
                      w-full flex items-center p-3 rounded-lg transition-all 
                      ${item.active ? `${theme.accent.primary} text-white ` : `${theme.text.primary} hover:bg-white/20 ${theme.card.bg}  hover:shadow-lg  border ${theme.card.border} animate-fadeInUp`}
                    `}
                    onClick={() => navigate(item.path)}
                  >
                    {item.icon}
                    <span className="ml-3 font-medium text-lg">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile and Tablet */}
      <nav className={`fixed bottom-0 left-0 right-0 ${theme.card.bg} backdrop-blur-md border-t ${theme.card.border} shadow-lg z-10 lg:hidden`}>
        <div className="flex justify-around py-2 md:py-3">
          {navItems.map((item, index) => (
            <button
              key={index}
              className={`
                flex flex-col items-center p-1 hover:scale-105 active:scale-95
                ${item.active ? theme.text.primary : theme.text.light}
                hover:opacity-80 transition-all
              `}
              onClick={() => navigate(item.path)}
            >
              {item.icon}
              <span className="text-xs mt-1">{item.label}</span>
              {item.active && (
                <div
                  className={`h-1 w-8 sm:w-12 rounded-full ${theme.accent.primary} mt-1`}
                />
              )}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default TabiLearningPage;