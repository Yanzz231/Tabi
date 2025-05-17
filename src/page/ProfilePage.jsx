import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    House, BookOpen, ChartLine, UserCircle,
} from 'phosphor-react';

// FUNCTION
import { isDaytime, colorData } from '../function/function';

// COMPONENT
import { BackgroundImage } from '../component/BackgroundComponents';
import { ProfileContent, SettingsContent } from '../component/ProfileComponents';
import { HeaderStat } from '../component/HeaderComponents';

const ProfilePage = () => {
    const navigate = useNavigate();
    const [isDay, setIsDay] = useState(isDaytime());
    const [activeTab, setActiveTab] = useState('profile');
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

    const colors = colorData("learing");
    const theme = isDay ? colors.day : colors.night;

    const handleLogout = (e) => {
        if (e) e.preventDefault();

        localStorage.removeItem("image")
        localStorage.removeItem("email")
        localStorage.removeItem("username")
        localStorage.removeItem("level")
        localStorage.removeItem("xp")
        localStorage.removeItem("streak")
        localStorage.removeItem("lesson")
        localStorage.removeItem("heart")
        localStorage.removeItem("1")
        localStorage.removeItem("2")
        localStorage.removeItem("3")
        localStorage.removeItem("4")
        localStorage.removeItem("5")
        localStorage.removeItem("6")
        localStorage.removeItem("7")
        localStorage.removeItem("8")

        window.location.href = "/"
    }

    const userStats = {
        name: localStorage.getItem("username"),
        email: localStorage.getItem("email"),
        avatar: localStorage.getItem("image"),
        joinDate: "15 Mar 2024",
        level: localStorage.getItem("level"),
        progress: 60,
        totalXP: localStorage.getItem("xp"),
        totalLessons: 8,
        completedLessons: localStorage.getItem("lesson"),
        achievements: [
            {
                id: 1,
                name: "Pemula Berdedikasi",
                description: "Selesaikan 5 pelajaran pertama",
                icon: "🎓",
                earned: true,
                date: "24 Mar 2024"
            },
            {
                id: 2,
                name: "Penuntun Alfabet",
                description: "Kuasai semua huruf dalam alfabet isyarat",
                icon: "🔤",
                earned: true,
                date: "2 Apr 2024"
            },
            {
                id: 3,
                name: "Rajin Belajar",
                description: "Belajar selama 7 hari berturut-turut",
                icon: "🔥",
                earned: true,
                date: "10 Apr 2024"
            },
            {
                id: 4,
                name: "Matematikawan Isyarat",
                description: "Kuasai semua angka dalam bahasa isyarat",
                icon: "🧮",
                earned: false,
                progress: 80
            },
            {
                id: 5,
                name: "Sang Komunikator",
                description: "Selesaikan semua pelajaran percakapan dasar",
                icon: "💬",
                earned: false,
                progress: 25
            }
        ],
        activityHistory: [
            { date: "8 Mei 2024", activity: "Menyelesaikan pelajaran Alfabet P-T", xp: 30 },
            { date: "7 Mei 2024", activity: "Menyelesaikan pelajaran Alfabet K-O", xp: 20 },
            { date: "6 Mei 2024", activity: "Menyelesaikan pelajaran Alfabet F-J", xp: 15 },
            { date: "5 Mei 2024", activity: "Menyelesaikan pelajaran Alfabet A-E", xp: 10 },
            { date: "4 Mei 2024", activity: "Mengerjakan latihan harian", xp: 5 }
        ]
    };


    const navItems = [
        { icon: <House size={22} weight="fill" />, label: "Beranda", path: "/beranda" },
        { icon: <BookOpen size={22} weight="fill" />, label: "Belajar", path: "/learn" },
        { icon: <ChartLine size={22} weight="fill" />, label: "Peringkat", path: "/rankings" },
        { icon: <UserCircle size={22} weight="fill" />, label: "Profil", path: "/profile", active: true }
    ];

    return (
        <div className={`min-h-screen bg-gradient-to-br ${theme.bg} relative overflow-hidden`}>
            {/* EFFECT */}
            <BackgroundImage image={"/img/background/image.jpg"} isDay={isDay} />

            <HeaderStat theme={theme} points={points} currentStreak={currentStreak} hearts={hearts} />

            <div className="container mx-auto px-3 md:px-4 pb-24 lg:pb-8 lg:pt-6 mt-8">

                <div className="lg:grid lg:grid-cols-3 lg:gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {activeTab === 'profile' && <ProfileContent theme={theme} userStats={userStats} currentStreak={currentStreak} onLogout={handleLogout} setActiveTab={setActiveTab} />}
                        {activeTab === 'settings' && <SettingsContent theme={theme} userStats={userStats} setActiveTab={setActiveTab}/>}
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
                      ${item.active ? `${theme.accent.primary} text-white` : `${theme.text.primary} hover:bg-white/20 ${theme.card.bg} hover:shadow-lg border ${theme.card.border} animate-fadeInUp`}
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

export default ProfilePage;