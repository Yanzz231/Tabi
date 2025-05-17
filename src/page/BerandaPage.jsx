import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    House, BookOpen, ChartLine, UserCircle,
    Trophy, Lightning, Clock, ArrowRight,
    Calendar, CaretRight, Compass, Fire, Book
} from 'phosphor-react';

// FUNCTION
import { isDaytime, colorData } from '../function/function';

// COMPONENT
import { BackgroundImage } from '../component/BackgroundComponents';
import { HeaderStat } from '../component/HeaderComponents';

const HomePage = () => {
    const navigate = useNavigate();
    const [isDay, setIsDay] = useState(isDaytime());
    const currentStreak = localStorage.getItem("streak");
    const points = localStorage.getItem("xp");
    const hearts = localStorage.getItem("heart");
    const username = localStorage.getItem("username");
    const level = localStorage.getItem("level");
    const completedLessons = localStorage.getItem("lesson");

    useEffect(() => {
        if (localStorage.getItem("email") === null) {
            window.location.href = "/login";
        }

        const updateTime = () => setIsDay(isDaytime());
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    const colors = colorData("learing");
    const theme = isDay ? colors.day : colors.night;

    const latestCourses = [
        {
            id: 1,
            title: "Alfabet Isyarat A-E",
            description: "Mempelajari huruf P sampai T dalam bahasa isyarat",
            icon: "🔤",
            date: "8 Mei 2024",
            xp: 30,
            progress: 100
        },
        {
            id: 2,
            title: "Alfabet K-O",
            description: "Mempelajari huruf K sampai O dalam bahasa isyarat",
            icon: "🔤",
            date: "7 Mei 2024",
            xp: 20,
            progress: 100
        },
        {
            id: 3,
            title: "Alfabet F-J",
            description: "Mempelajari huruf F sampai J dalam bahasa isyarat",
            icon: "🔤",
            date: "6 Mei 2024",
            xp: 15,
            progress: 100
        },
    ];

    const recommendedCourses = [
        {
            id: 1,
            title: "Alfabet A-E",
            description: "Mempelajari huruf A sampai E dalam bahasa isyarat",
            icon: "🔤",
            difficulty: "Mudah",
            xp: 30,
            duration: "10 menit",
            progress: 0
        },
        {
            id: 5,
            title: "Angka 1-10",
            description: "Mempelajari angka 1 sampai 10 dalam bahasa isyarat",
            icon: "🧮",
            difficulty: "Sedang",
            xp: 40,
            duration: "15 menit",
            progress: 0
        },
        {
            id: 6,
            title: "Kalimat Dasar",
            description: "Mempelajari struktur kalimat dasar dalam bahasa isyarat",
            icon: "💬",
            difficulty: "Sulit",
            xp: 50,
            duration: "20 menit",
            progress: 0
        }
    ];

    const userRanking = {
        position: 24,
        totalUsers: 1543,
        topUsers: [
            { name: "Ahmad S.", level: 12, xp: 2450, avatar: "/img/user/boy1.png" },
            { name: "Budi W.", level: 11, xp: 2320, avatar: "/img/user/boy2.png" },
            { name: "Citra K.", level: 10, xp: 2180, avatar: "/img/user/girl1.png" }
        ]
    };

    const dailyChallenge = {
        title: "Tantangan Harian",
        description: "Lakukan latihan isyarat selama minimal 10 menit",
        reward: 15,
        progress: 60,
        timeLeft: "8 jam"
    };

    const navItems = [
        { icon: <House size={22} weight="fill" />, label: "Beranda", path: "/beranda", active: true },
        { icon: <BookOpen size={22} weight="fill" />, label: "Belajar", path: "/learn" },
        { icon: <ChartLine size={22} weight="fill" />, label: "Peringkat", path: "/rankings" },
        { icon: <UserCircle size={22} weight="fill" />, label: "Profil", path: "/profile" }
    ];

    return (
        <div className={`min-h-screen bg-gradient-to-br ${theme.bg} relative overflow-hidden`}>
            {/* EFFECT */}
            <BackgroundImage image={"/img/background/image.jpg"} isDay={isDay} />

            <HeaderStat theme={theme} points={points} currentStreak={currentStreak} hearts={hearts} />

            <div className="container mx-auto px-3 md:px-4 pb-24 lg:pb-8 lg:pt-6 mt-8">
                <div className={`${theme.card.bg} rounded-xl p-4 md:p-6 border ${theme.card.border} shadow-md animate-fadeInUp mb-6`}>
                    <div className="flex items-center gap-3 mb-2">
                        <img src={localStorage.getItem("image")} alt="User avatar" className="w-12 h-12 rounded-full" />
                        <div>
                            <h2 className={`text-xl font-bold ${theme.text.heading}`}>Halo, {username}!</h2>
                            <p className={`text-sm ${theme.text.light}`}>
                                Level {level} • {points} XP • {currentStreak} Hari Streak
                            </p>
                        </div>
                    </div>

                    <div className="mt-4">
                        <div className="flex justify-between items-center mb-1">
                            <span className={`text-xs font-medium ${theme.text.regular}`}>Kemajuan Level</span>
                            <span className={`text-xs font-medium ${theme.text.regular}`}>60%</span>
                        </div>
                        <div className="w-full bg-gray-400 rounded-full h-2">
                            <div
                                className={`h-2 rounded-full ${theme.accent.primary} transition-all duration-1000 ease-in-out`}
                                style={{ width: `60%` }}
                            ></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
                        <div className={`${theme.card.inner} rounded-lg p-3 flex flex-col items-center text-center`}>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${theme.accent.primary} mb-2`}>
                                <Book weight="fill" size={20} className="text-white" />
                            </div>
                            <span className={`text-2xl font-bold ${theme.text.heading}`}>{completedLessons}</span>
                            <span className={`text-xs ${theme.text.light}`}>Pelajaran Selesai</span>
                        </div>

                        <div className={`${theme.card.inner} rounded-lg p-3 flex flex-col items-center text-center`}>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${theme.accent.primary} mb-2`}>
                                <Fire weight="fill" size={20} className="text-white" />
                            </div>
                            <span className={`text-2xl font-bold ${theme.text.heading}`}>{currentStreak}</span>
                            <span className={`text-xs ${theme.text.light}`}>Hari Berturut-turut</span>
                        </div>

                        <div className={`${theme.card.inner} rounded-lg p-3 flex flex-col items-center text-center`}>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${theme.accent.primary} mb-2`}>
                                <Trophy weight="fill" size={20} className="text-white" />
                            </div>
                            <span className={`text-2xl font-bold ${theme.text.heading}`}>3</span>
                            <span className={`text-xs ${theme.text.light}`}>Pencapaian</span>
                        </div>

                        <div className={`${theme.card.inner} rounded-lg p-3 flex flex-col items-center text-center`}>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${theme.accent.primary} mb-2`}>
                                <Lightning weight="fill" size={20} className="text-white" />
                            </div>
                            <span className={`text-2xl font-bold ${theme.text.heading}`}>{points}</span>
                            <span className={`text-xs ${theme.text.light}`}>Total XP</span>
                        </div>
                    </div>
                </div>

                <div className="lg:grid lg:grid-cols-3 lg:gap-6">
                    {/* Sidebar - Left side with Daily Challenge and Ranking */}
                    <div className="space-y-6 mt-6 lg:mt-0">
                        <div className={`${theme.card.bg} rounded-xl p-4 md:p-6 border ${theme.card.border} shadow-md animate-fadeInUp`}>
                            <div className="flex items-center gap-2 mb-4">
                                <Calendar size={24} className={theme.text.heading} />
                                <h3 className={`text-lg font-bold ${theme.text.heading}`}>{dailyChallenge.title}</h3>
                            </div>

                            <p className={`text-sm ${theme.text.regular} mb-3`}>{dailyChallenge.description}</p>

                            <div className="flex justify-between items-center mb-2">
                                <span className={`text-xs ${theme.text.light}`}>Progress</span>
                                <span className={`text-xs ${theme.text.light}`}>{dailyChallenge.progress}%</span>
                            </div>

                            <div className="w-full bg-gray-400 rounded-full h-2 mb-3">
                                <div
                                    className={`h-2 rounded-full ${theme.accent.primary} transition-all duration-1000 ease-in-out`}
                                    style={{ width: `${dailyChallenge.progress}%` }}
                                ></div>
                            </div>

                            <div className="flex justify-between items-center">
                                <div className={`text-xs ${theme.badge} px-2 py-1 rounded-full flex items-center gap-1`}>
                                    <Lightning size={12} />
                                    <span>+{dailyChallenge.reward} XP</span>
                                </div>
                                <span className={`text-xs ${theme.text.light}`}>Sisa: {dailyChallenge.timeLeft}</span>
                            </div>

                            <button
                                className={`w-full ${theme.button.primary} py-2 rounded-lg mt-4 text-sm font-medium flex items-center justify-center gap-1`}
                            >
                                <span>Kerjakan Sekarang</span>
                                <ArrowRight size={16} />
                            </button>
                        </div>

                        {/* Ranking */}
                        <div className={`${theme.card.bg} rounded-xl p-4 md:p-6 border ${theme.card.border} shadow-md animate-fadeInUp`}>
                            <div className="flex items-center justify-between gap-2 mb-4">
                                <div className="flex items-center gap-2">
                                    <Trophy size={24} className={theme.text.heading} />
                                    <h3 className={`text-lg font-bold ${theme.text.heading}`}>Peringkat</h3>
                                </div>
                                <button
                                    onClick={() => navigate('/rankings')}
                                    className={`text-sm flex items-center ${theme.text.primary}`}
                                >
                                    <span>Lihat Semua</span>
                                    <ArrowRight size={16} className="ml-1" />
                                </button>
                            </div>

                            <div className={`${theme.card.inner} rounded-lg p-3 mb-4`}>
                                <div className="flex items-center justify-between mb-1">
                                    <span className={`text-sm font-medium ${theme.text.heading}`}>Peringkat Kamu</span>
                                    <span className={`text-sm font-medium ${theme.text.heading}`}>{userRanking.position} dari {userRanking.totalUsers}</span>
                                </div>
                                <div className="w-full bg-gray-400 rounded-full h-1.5">
                                    <div
                                        className={`h-1.5 rounded-full ${theme.accent.primary} transition-all duration-1000 ease-in-out`}
                                        style={{ width: `${98.5 - (userRanking.position / userRanking.totalUsers) * 100}%` }}
                                    ></div>
                                </div>
                            </div>

                            <h4 className={`text-sm font-medium ${theme.text.heading} mb-3`}>Top 3 Peringkat</h4>

                            <div className="space-y-3">
                                {userRanking.topUsers.map((user, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : 'bg-amber-600'} text-white text-xs font-bold`}>
                                                {index + 1}
                                            </div>
                                            <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                                            <span className={`text-sm ${theme.text.regular}`}>{user.name}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className={`text-xs ${theme.badge} px-2 py-0.5 rounded-full`}>Lvl {user.level}</span>
                                            <span className={`text-xs ${theme.text.light}`}>{user.xp} XP</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-1 space-y-6 mt-6 lg:mt-0">
                        <div className={`${theme.card.bg} rounded-xl p-4 md:p-6 border ${theme.card.border} shadow-md animate-fadeInUp`}>
                            <div className="flex items-center justify-between gap-2 mb-4">
                                <div className="flex items-center gap-2">
                                    <Compass size={24} className={theme.text.heading} />
                                    <h3 className={`text-lg font-bold ${theme.text.heading}`}>Lanjutkan Belajar</h3>
                                </div>
                                <button
                                    onClick={() => navigate('/learn')}
                                    className={`text-sm flex items-center ${theme.text.primary}`}
                                >
                                    <span>Semua</span>
                                    <ArrowRight size={16} className="ml-1" />
                                </button>
                            </div>

                            {recommendedCourses.map((course, index) => (
                                <div
                                    key={course.id}
                                    className={`${theme.card.inner} ${localStorage.getItem(course.id) === null ? index === 0 ? "cursor-pointer" : "cursor-not-allowed" : "cursor-not-allowed"} rounded-xl p-4 flex flex-col md:flex-row items-start md:items-center gap-4 hover:shadow-lg transition `}
                                    onClick={() => index === 0 ? localStorage.getItem(course.id) === null ? navigate(`/quiz/${course.id}`) : "" : ""}
                                >
                                    <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center text-2xl rounded-lg ${theme.accent.secondary}`}>
                                        {course.icon}
                                    </div>

                                    <div className="flex-grow">
                                        <h4 className={`text-md font-bold ${theme.text.heading}`}>{course.title}</h4>
                                        <p className={`text-sm ${theme.text.light} mt-1 mb-2`}>{course.description}</p>

                                        <div className="flex items-center justify-between flex-wrap gap-y-2">
                                            <div className="flex items-center gap-3">
                                                <span className={`text-xs ${theme.badge} px-2 py-1 rounded-full`}>
                                                    {course.difficulty}
                                                </span>
                                                <span className={`text-xs ${theme.text.light} flex items-center gap-1`}>
                                                    <Clock size={12} /> {course.duration}
                                                </span>
                                                <span className={`text-xs ${theme.text.light} flex items-center gap-1`}>
                                                    <Lightning size={12} /> {course.xp} XP
                                                </span>
                                            </div>

                                            {index === 0 && (<button className={`${theme.button.primary} text-xs px-3 py-1 rounded-lg flex items-center`}>
                                                <span>Mulai</span>
                                                <CaretRight size={12} className="ml-1" />
                                            </button>)}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={`${theme.card.bg} rounded-xl p-4 md:p-6 border ${theme.card.border} shadow-md animate-fadeInUp`}>
                            <div className="flex items-center gap-2 mb-4">
                                <Clock size={24} className={theme.text.heading} />
                                <h3 className={`text-lg font-bold ${theme.text.heading}`}>Aktivitas Terakhir</h3>
                            </div>

                            <div className="space-y-3">
                                {latestCourses.map((course, index) => (
                                    <div
                                        key={course.id}
                                        className={`flex items-center gap-3 py-2 ${index < latestCourses.length - 1 ? 'border-b border-gray-200 dark:border-gray-700' : ''}`}
                                    >
                                        <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center text-xl rounded-lg ${theme.accent.tertiary}`}>
                                            {course.icon}
                                        </div>

                                        <div className="flex-grow">
                                            <h4 className={`text-sm font-medium ${theme.text.heading}`}>{course.title}</h4>
                                            <p className={`text-xs ${theme.text.light}`}>{course.date}</p>
                                        </div>

                                        <div className={`text-xs font-medium flex items-center ${theme.badge} px-2 py-1 rounded-full`}>
                                            <span>+{course.xp} XP</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar - Right with Navigation */}
                    <div className="space-y-6 mt-6 lg:mt-0">
                        <div className="hidden lg:block">
                            <div className={`${theme.card.bg} rounded-xl backdrop-blur-md p-4 md:p-6 border ${theme.card.border} shadow-xl animate-fadeInUp`}>
                                <h3 className={`text-xl font-bold ${theme.text.heading} mb-4`}>Menu Navigasi</h3>

                                <div className="space-y-3">
                                    {navItems.map((item, index) => (
                                        <button
                                            key={index}
                                            className={`
                                                w-full flex items-center p-3 rounded-lg transition-all 
                                                ${item.active ? `${theme.accent.primary} text-white` : `${theme.text.primary} hover:bg-white/20 ${theme.card.bg} hover:shadow-lg border ${theme.card.border}`}
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
            </div>

            {/* Mobile and Tablet Navigation */}
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

export default HomePage;