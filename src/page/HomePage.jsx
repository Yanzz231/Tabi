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



            </div>
        </div>
    );
}