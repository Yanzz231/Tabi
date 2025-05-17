import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    Trophy, Star, Heart, ArrowLeft, House,
    FacebookLogo, TwitterLogo, WhatsappLogo
} from 'phosphor-react';

// FUNCTION
import { isDaytime, colorData } from '../function/function';

// COMPONENTS
import { BackgroundImage } from '../component/BackgroundComponents';

const TabiQuizResultsPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isDay, setIsDay] = useState(isDaytime());

    const { score = 0, totalQuestions = 5, hearts = localStorage.getItem("heart") } = location.state || {};
    const percentage = Math.round((score / (totalQuestions * 10)) * 100);
    const isPassed = percentage >= 60;

    useEffect(() => {
        if (localStorage.getItem("email") === null) {
            window.location.href = "/login"
        }

        const updateTime = () => setIsDay(isDaytime());
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    const colors = colorData("result")

    const theme = isDay ? colors.day : colors.night;

    const goToHome = () => {
        navigate('/beranda');
    };

    const goToLearn = () => {
        navigate('/learn');
    };

    return (
        <div className={`min-h-screen flex flex-col bg-gradient-to-br ${theme.bg} relative overflow-hidden`}>

            <BackgroundImage image={"/img/background/image.jpg"} isDay={isDay} />




            <div className="flex-1 container mx-auto px-3 sm:px-4 py-4 sm:py-6 overflow-y-auto z-10">
                <div className={`${theme.card.bg} rounded-xl backdrop-blur-md p-4 sm:p-5 border ${theme.card.border} shadow-xl mx-auto h-full flex flex-col max-w-md animate-fadeIn`}>

                    <div className="text-center mb-4">
                        <div className="flex justify-center mb-3">
                            <div className={`
                w-16 h-16 rounded-full 
                ${isPassed ? theme.accent.success : theme.accent.warning} 
                flex items-center justify-center
                border-4 ${isPassed ? 'border-green-500' : 'border-orange-500'}
                shadow-lg transform transition-all duration-300 hover:scale-105
              `}>
                                <Trophy weight="fill" size={32} className={isPassed ? 'text-green-500' : 'text-orange-500'} />
                            </div>
                        </div>

                        <h1 className={`text-xl sm:text-2xl font-bold ${theme.text.heading} mb-1`}>
                            {isPassed ? 'Selamat!' : 'Coba Lagi!'}
                        </h1>
                        <p className={`text-sm ${theme.text.secondary}`}>
                            {isPassed
                                ? 'Anda berhasil menyelesaikan kuis!'
                                : 'Anda hampir berhasil. Teruslah berlatih!'}
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4">

                        <div className={`p-3 rounded-lg ${theme.card.inner} text-center shadow-sm border ${theme.card.border} transition-all duration-200 hover:shadow-md`}>
                            <Star weight="fill" size={20} className="text-yellow-500 mx-auto mb-1" />
                            <div className={`text-lg font-bold ${theme.text.primary}`}>{score}</div>
                            <div className={`text-xs ${theme.text.light}`}>POIN</div>
                        </div>

                        <div className={`p-3 rounded-lg ${theme.card.inner} text-center shadow-sm border ${theme.card.border} transition-all duration-200 hover:shadow-md`}>
                            <Heart weight="fill" size={20} className="text-red-500 mx-auto mb-1" />
                            <div className={`text-lg font-bold ${theme.text.primary}`}>{hearts}</div>
                            <div className={`text-xs ${theme.text.light}`}>NYAWA</div>
                        </div>

                        <div className={`p-3 rounded-lg ${theme.card.inner} flex items-center justify-center shadow-sm border ${theme.card.border} transition-all duration-200 hover:shadow-md`}>
                            <div className="relative w-16 h-16">
                                <svg className="w-full h-full" viewBox="0 0 100 100">
                                    <circle
                                        className={`${theme.progress.bg} stroke-current`}
                                        strokeWidth="10"
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="transparent"
                                    />
                                    <circle
                                        className={`${isPassed ? theme.progress.fill : theme.progress.warning} stroke-current transform transition-all duration-1000 ease-out`}
                                        strokeWidth="10"
                                        strokeLinecap="round"
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="transparent"
                                        strokeDasharray={`${percentage * 2.51} 251`}
                                        strokeDashoffset="0"
                                        transform="rotate(-90 50 50)"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className={`${theme.text.primary} text-sm font-bold`}>
                                        {percentage}%
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`p-3 rounded-lg ${isPassed ? theme.accent.success : theme.accent.warning} mb-4 border ${isPassed ? 'border-green-500/30' : 'border-orange-500/30'} shadow-sm`}>
                        <p className={`text-center text-sm ${theme.text.primary}`}>
                            {isPassed
                                ? `Luar biasa! Anda mendapatkan ${score} poin dari ${totalQuestions * 10} poin maksimal.`
                                : `Anda mendapatkan ${score} poin dari ${totalQuestions * 10} poin maksimal. Coba lagi untuk mencapai nilai lebih tinggi.`}
                        </p>
                    </div>

                    {isPassed && (
                        <div className="mb-4">
                            <h3 className={`font-semibold text-sm ${theme.text.secondary} mb-2`}>Penghargaan yang Diperoleh:</h3>
                            <div className="flex flex-wrap justify-center gap-2">
                                <div className={`${theme.badge} rounded-full px-3 py-1.5 text-xs flex items-center shadow-sm transition-all duration-200 hover:shadow`}>
                                    <Trophy weight="fill" size={14} className="mr-1.5 text-yellow-500" />
                                    <span>Penyelesai</span>
                                </div>
                                {percentage >= 80 && (
                                    <div className={`${theme.badge} rounded-full px-3 py-1.5 text-xs flex items-center shadow-sm transition-all duration-200 hover:shadow`}>
                                        <Star weight="fill" size={14} className="mr-1.5 text-yellow-500" />
                                        <span>Bintang Emas</span>
                                    </div>
                                )}
                                {hearts === 5 && (
                                    <div className={`${theme.badge} rounded-full px-3 py-1.5 text-xs flex items-center shadow-sm transition-all duration-200 hover:shadow`}>
                                        <Heart weight="fill" size={14} className="mr-1.5 text-red-500" />
                                        <span>Sempurna</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {!isPassed && (
                        <div className={`mb-4 p-3 sm:p-4 rounded-lg ${theme.card.inner} border ${theme.card.border} shadow-sm`}>
                            <h3 className={`font-semibold text-sm ${theme.text.secondary} mb-2`}>Tips untuk meningkatkan skor:</h3>
                            <ul className={`${theme.text.primary} text-sm space-y-2`}>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5 mr-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                    </div>
                                    <span>Ulangi materi pembelajaran sebelum mencoba kuis lagi</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5 mr-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                    </div>
                                    <span>Perhatikan pertanyaan dengan seksama</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5 mr-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                    </div>
                                    <span>Pastikan untuk memahami semua opsi jawaban</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5 mr-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                    </div>
                                    <span>Manfaatkan waktu dengan bijak untuk setiap pertanyaan</span>
                                </li>
                            </ul>
                        </div>
                    )}

                    <div className="mt-auto">
                        <div className="flex flex-col sm:flex-row gap-3 mb-4 md:justify-center">
                            <button
                                onClick={goToHome}
                                className={`flex items-center justify-center ${theme.button.secondary} py-3 px-4 rounded-lg text-sm font-medium shadow-sm transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-${theme.text.secondary}`}
                            >
                                <House weight="fill" size={16} className="mr-2" />
                                <span>Kembali ke Beranda</span>
                            </button>

                            <button
                                onClick={goToLearn}
                                className={`flex items-center justify-center ${theme.button.primary} py-3 px-4 rounded-lg text-sm font-medium shadow-sm transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-${theme.text.secondary}`}
                            >
                                <span>Lanjut Belajar</span>
                                <ArrowLeft weight="bold" size={16} className="ml-2 transform rotate-180" />
                            </button>
                        </div>

                        <div className="mb-4 pt-2 border-t border-gray-200/20 text-center">
                            <p className={`text-xs ${theme.text.light} mb-3`}>Bagikan hasil Anda:</p>
                            <div className="flex justify-center space-x-4">
                                <button className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-sm transition-all duration-200 hover:bg-blue-600 hover:shadow">
                                    <FacebookLogo weight="fill" size={18} />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center text-white shadow-sm transition-all duration-200 hover:bg-sky-600 hover:shadow">
                                    <TwitterLogo weight="fill" size={18} />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white shadow-sm transition-all duration-200 hover:bg-green-600 hover:shadow">
                                    <WhatsappLogo weight="fill" size={18} />
                                </button>
                            </div>
                        </div>

                        <div className="text-center">
                            <p className={`text-xs ${theme.text.light}`}>
                                TABI - Aplikasi Belajar Bahasa Isyarat
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabiQuizResultsPage;