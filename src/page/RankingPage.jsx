import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Trophy,
    Crown, Target,
    House, BookOpen, ChartLine, UserCircle,
} from 'phosphor-react';

// FUNCTION
import { isDaytime, colorData } from '../function/function';

// COMPONENT
import { BackgroundImage } from '../component/BackgroundComponents';
import { HeaderStat } from '../component/HeaderComponents';
import { RankingCard, RankingChange } from '../component/RankingComponents';

const TabiRankingsPage = () => {
    const navigate = useNavigate();
    const [isDay, setIsDay] = useState(isDaytime());
    const currentStreak = localStorage.getItem("streak")
    const points = localStorage.getItem("xp")
    const hearts = localStorage.getItem("heart")
    const [activeFilter, setActiveFilter] = useState('weekly');

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

    const rankingCategories = [
        {
            id: 'weekly',
            name: "Mingguan",
            icon: <Target weight="fill" size={28} />,
            color: theme.accent.primary
        },
        {
            id: 'monthly',
            name: "Bulanan",
            icon: <Trophy weight="fill" size={28} />,
            color: theme.accent.secondary
        },
        {
            id: 'alltime',
            name: "Sepanjang Masa",
            icon: <Crown weight="fill" size={28} />,
            color: theme.accent.tertiary
        }
    ];

    const userRanking = {
        rank: 24,
        points: localStorage.getItem("xp"),
        progress: 45,
        change: +3
    };

    const topRankings = [
        {
            id: 1,
            name: "Budi Santoso",
            avatar: "/img/user/boy1.png",
            points: 1520,
            level: 10,
            change: 0,
            isCurrentUser: false
        },
        {
            id: 2,
            name: "Siti Nurhaliza",
            avatar: "/img/user/boy2.png",
            points: 1475,
            level: 9,
            change: +2,
            isCurrentUser: false
        },
        {
            id: 3,
            name: "Ahmad Dhani",
            avatar: "/img/user/girl1.png",
            points: 1350,
            level: 9,
            change: -1,
            isCurrentUser: false
        },
        {
            id: 4,
            name: "Dewi Lestari",
            avatar: "/img/user/girl3.png",
            points: 1280,
            level: 8,
            change: +1,
            isCurrentUser: false
        },
        {
            id: 5,
            name: "Reza Rahadian",
            avatar: "/img/user/boy7.png",
            points: 1210,
            level: 8,
            change: -2,
            isCurrentUser: false
        }
    ];

    const navItems = [
        { icon: <House size={22} weight="fill" />, label: "Beranda", path: "/beranda" },
        { icon: <BookOpen size={22} weight="fill" />, label: "Belajar", path: "/learn" },
        { icon: <ChartLine size={22} weight="fill" />, label: "Peringkat", path: "/rankings", active: true },
        { icon: <UserCircle size={22} weight="fill" />, label: "Profil", path: "/profile" }
    ];

    return (
        <div className={`min-h-screen bg-gradient-to-br ${theme.bg} relative overflow-hidden`}>

            {/* EFFECT */}
            <BackgroundImage image={"/img/background/image.jpg"} isDay={isDay} />

            <HeaderStat theme={theme} points={points} currentStreak={currentStreak} hearts={hearts} />

            <div className="container mx-auto px-3 md:px-4 pb-24 lg:pb-8 lg:pt-6">
                <div className="mt-4 md:mt-6 mb-6 md:mb-8">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                        {rankingCategories.map(category => (
                            <button
                                key={category.id}
                                className={`
                  relative flex items-center rounded-xl overflow-hidden
                  ${activeFilter === category.id ? category.color + ' text-white' : `${theme.card.bg} ${theme.text.primary} border ${theme.card.border}`}
                  transition-all duration-300 shadow-md 
                  hover:scale-103 active:scale-97
                  ${activeFilter === category.id ? 'ring-2 ring-white' : ''}
                  cursor-pointer
                `}
                                onClick={() => setActiveFilter(category.id)}
                            >
                                <div className="p-3 md:p-4 flex items-center gap-3 w-full">
                                    <div className={`${activeFilter === category.id ? 'bg-white/20' : 'bg-white/10'} p-2 rounded-lg`}>
                                        {category.icon}
                                    </div>
                                    <span className="text-sm font-semibold">{category.name}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="lg:grid lg:grid-cols-3 lg:gap-6">

                    {/* RANKINGS SECTION - REPLACING LESSON SECTION */}
                    <div className="lg:col-span-2">
                        <div className={`${theme.card.bg} rounded-xl backdrop-blur-md p-4 md:p-6 border ${theme.card.border} shadow-xl animate-fadeInUp mb-6 lg:mb-0`}>

                            <div className={`mb-6 p-4 rounded-lg border border-dashed ${theme.card.border} bg-white/5`}>
                                <h3 className={`text-lg font-bold ${theme.text.heading} mb-3`}>Peringkat Anda</h3>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className={`w-12 h-12 rounded-full ${theme.accent.primary} flex items-center justify-center text-white font-bold`}>
                                            {userRanking.rank}
                                        </div>
                                        <div className="ml-4">
                                            <div className={`text-xs ${theme.text.light}`}>Peringkat {activeFilter === 'weekly' ? 'Mingguan' : activeFilter === 'monthly' ? 'Bulanan' : 'Sepanjang Masa'}</div>
                                            <div className={`text-lg font-bold ${theme.text.primary}`}>{userRanking.points} poin</div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center mb-1">
                                            <span className={`text-xs ${theme.text.light}`}>Perubahan: </span>
                                            <div className="ml-2">
                                                <RankingChange change={userRanking.change} />
                                            </div>
                                        </div>
                                        <div className="w-full bg-gray-400 rounded-full h-1.5 overflow-hidden">
                                            <div
                                                className={`h-1.5 rounded-full ${theme.accent.primary} transition-all duration-1000 ease-in-out`}
                                                style={{ width: `${userRanking.progress}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Top Rankings */}
                            <div className="mb-8">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className={`text-lg font-bold ${theme.text.heading}`}>Peringkat Teratas</h3>
                                    <div className={`text-sm ${theme.text.light}`}>5 terbaik</div>
                                </div>

                                <div className="space-y-3">
                                    {topRankings.map((ranking, index) => (
                                        <RankingCard
                                            key={ranking.id}
                                            ranking={ranking}
                                            isLeader={index === 0}
                                            theme={theme}
                                        />
                                    ))}
                                </div>
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

export default TabiRankingsPage;