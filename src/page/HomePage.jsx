import { useState, useEffect } from 'react';

// FUNCTION
import { isDaytime, colorData } from '../function/function';

// COMPONENT
import { AnimatedLogoHome } from '../component/LogoComponents';
import { TextHome } from '../component/TextComponents';
import { BackgroundImage } from '../component/BackgroundComponents';

export default function HomePage() {
    const [isDay, setIsDay] = useState(isDaytime());

    const colors = colorData("home")

    const theme = isDay ? colors.day : colors.night;

    // UPDATE THEMES
    useEffect(() => {
        // NAVIGATE IF ALREADY LOGIN
        if (localStorage.getItem("email") !== null) {
            window.location.href = "/beranda"
        }

        setIsDay(isDaytime());
        const interval = setInterval(() => {
            setIsDay(isDaytime());
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen w-full flex flex-col relative bg-cover bg-center overflow-hidden">

            <a href='/' className="flex justify-between items-center px-6 py-4 z-10 w-full">
                <AnimatedLogoHome />
            </a>

            <BackgroundImage image={"/img/background/image.jpg"} isDay={isDay} />

            <div className="flex flex-col lg:flex-row items-center justify-between flex-grow px-4 sm:px-6 lg:px-12 py-8 lg:py-12 z-10 max-w-7xl mx-auto">

                {/* FLEX LEFT */}
                <div className={`p-6 rounded-lg `}>
                    <span className={`inline-block px-3 py-1 rounded-full ${theme.badge} text-sm font-medium mb-4`}>
                        {isDay ? '☀️ Selamat Siang!' : '🌙 Selamat Malam!'}
                    </span>
                    <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${theme.text.primary} mb-4 leading-tight text-shadow`}>
                        Cara lebih cerdas untuk belajar apapun
                    </h1>
                    <p className={`text-lg sm:text-xl text-white mb-8 max-w-lg lg:mx-0`}>
                        Pelajaran yang dipersonalisasi, latihan interaktif, dan pengalaman belajar yang menyenangkan dirancang khusus untuk Anda.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="/login">
                            <button className={`${theme.button.primary} font-bold py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1`}>
                                Masuk Sekarang
                            </button>
                        </a>

                        <a href="/register">
                            <button className={`group ${theme.button.cta} font-bold py-3 px-8 rounded-lg transition-all flex items-center justify-center`}>
                                <span>Daftar Gratis</span>
                            </button>
                        </a>
                    </div>


                    <div className="mt-12 flex flex-wrap justify-center lg:justify-start items-center gap-6">
                        <span className={`text-sm text-white`}>Dipercaya oleh lebih dari 10.000 siswa</span>
                        <div className="flex -space-x-2">
                            <img src={"/img/user/boy1.png"} alt="User avatar" className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" />
                            <img src={"/img/user/boy3.png"} alt="User avatar" className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" />
                            <img src={"/img/user/girl2.png"} alt="User avatar" className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" />
                            <img src={"/img/user/girl1.png"} alt="User avatar" className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" />
                            <img src={"/img/user/boy2.png"} alt="User avatar" className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" />
                            <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-white flex items-center justify-center text-xs text-white">+5</div>
                        </div>
                    </div>
                </div>

                {/* FLEX RIGHT */}
                <div className="w-full lg:w-1/2 flex justify-center mt-12 lg:mt-0">
                    <div className="relative w-full max-w-md">
                        <div className={`absolute -inset-1 bg-gradient-to-r ${isDay ? 'from-[#5D6E47] to-[#7D5F40]' : 'from-green-400 to-teal-400'} rounded-lg blur opacity-30 animate-pulse`}></div>
                        <div className={`relative ${theme.card.bg} backdrop-blur-md rounded-2xl p-6 lg:p-8 border ${theme.card.border} shadow-xl animate-[fadeInUp_1s_ease-in-out]`}>
                            <div className={`absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 ${isDay ? 'bg-[#5D6E47]' : 'bg-green-500'} rounded-full flex items-center justify-center text-white font-bold`}>
                                GRATIS
                            </div>
                            <h3 className={`${theme.text.heading} text-lg sm:text-xl md:text-2xl font-bold mb-4 w-60`}>Mulai perjalanan Anda hari ini</h3>
                            <p className={`${theme.text.light} mb-6`}>Bergabunglah dengan ribuan pembelajar dari seluruh dunia yang sudah belajar dengan Tabi.</p>

                            <div className="space-y-4">
                                {['Rencana pembelajaran yang dipersonalisasi', 'Latihan interaktif & kuis', 'Pelacakan kemajuan & analitik'].map((item, index) => (
                                    <TextHome isDay={isDay} index={index} item={item} theme={theme} />
                                ))}
                            </div>

                            {/* <a href="/register">
                                <button className={`w-full ${theme.button.cta} font-bold mt-8 py-3 rounded-lg transition-all`}>
                                    BUAT AKUN GRATIS
                                </button>
                            </a> */}
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}