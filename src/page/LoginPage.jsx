import React, { useState, useEffect } from 'react';

// FUNCTION
import { colorData, isDaytime, getAnimationStyle, shouldShake } from '../function/function';

// COMPONENTS
import { InputText } from '../component/InputComponents';
import { CardLogin } from '../component/CardComponents';
import { BackgroundImage } from '../component/BackgroundComponents';
import { AnimatedLogo } from '../component/LogoComponents';
import { configApp } from '../config';

const LoginPage = () => {

    const [data, setData] = useState({
        email: '',
        password: ''
    });
    const [isDay, setIsDay] = useState(isDaytime());
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [shakeFields, setShakeFields] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    // UPDATE THEMES
    useEffect(() => {
        // NAVIGATE IF ALREADY LOGIN
        if (localStorage.getItem("email") !== null) {
            window.location.href = "/"
        }

        setIsDay(isDaytime());
        const interval = setInterval(() => {
            setIsDay(isDaytime());
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    // SHAKE ANIMATION
    useEffect(() => {
        if (shakeFields.length > 0) {
            const timer = setTimeout(() => {
                setShakeFields([]);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [shakeFields]);

    const validateForm = () => {
        const newErrors = {};
        const fieldsToShake = [];

        if (data.email !== configApp.email || data.password !== configApp.password) {
            newErrors.email = 'Email is wrong';
            fieldsToShake.push('email');

            newErrors.password = 'Password is wrong';
            fieldsToShake.push('password');
        }

        if (!data.email) {
            newErrors.email = 'Email is required';
            fieldsToShake.push('email');
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            newErrors.email = 'Email is invalid';
            fieldsToShake.push('email');
        }

        if (!data.password) {
            newErrors.password = 'Password is required';
            fieldsToShake.push('password');
        } else if (data.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
            fieldsToShake.push('password');
        }

        setShakeFields(fieldsToShake);
        setErrors(newErrors);
        return newErrors;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => {
            return { ...prevData, [name]: value };
        });

        if (submitted && errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setLoading(true);

        const formErrors = validateForm();


        if (Object.keys(formErrors).length === 0) {

            localStorage.setItem("image", configApp.image)
            localStorage.setItem("email", configApp.email)
            localStorage.setItem("username", configApp.username)
            localStorage.setItem("level", configApp.level.level)
            localStorage.setItem("xp", configApp.level.xp)
            localStorage.setItem("streak", configApp.streak)
            localStorage.setItem("lesson", configApp.lesson)
            localStorage.setItem("heart", configApp.heart)

            setTimeout(() => {
                setLoading(false);
                setData({
                    email: '',
                    password: ''
                })
                window.location.href = "/beranda";
            }, 1500);
        } else {
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }
    };

    const colors = colorData("login")

    const theme = isDay ? colors.day : colors.night;

    return (
        <div className="min-h-screen w-full flex justify-center items-center relative overflow-hidden bg-cover bg-center">

            {/* EFFECT */}
            <BackgroundImage image={"/img/background/test.jpg"} isDay={isDay} />

            <a href='/' className="absolute top-2 sm:top-4 left-2 sm:left-6 md:left-8 z-20"
                style={{
                    opacity: 0,
                    animation: 'fadeIn 0.6s ease forwards 0.2s'
                }}>
                <AnimatedLogo />
            </a>

            {/* MAIN */}
            <div
                className="w-full max-w-lg relative z-10 px-4 py-4 sm:px-6 sm:py-12 md:px-8 "
                style={{
                    opacity: 0,
                    transform: 'translateY(2rem)',
                    animation: 'fadeInUp 0.6s ease forwards'
                }}
            >
                <div className={`backdrop-blur-md ${theme.cardBg} ${theme.cardBorder} rounded-3xl shadow-2xl overflow-hidden border`}>

                    {/* TEXT */}
                    <div
                        className="p-8"
                    >
                        <div className="flex flex-col items-center justify-center text-center mb-8" style={getAnimationStyle(0.3)}>
                            <a href="/">
                                <img
                                    src="/img/logo/logo.png"
                                    className="w-20 h-20 m-2 md:hidden cursor-pointer"
                                    alt="Logo Tabir"
                                />
                            </a>
                            <h1
                                className={`text-3xl font-bold ${theme.headingText} mb-3`}
                                style={getAnimationStyle(0.4)}
                            >
                                Selamat Kembali
                            </h1>
                            <p className={theme.lightText}>
                                {isDay
                                    ? "Mulai perjalanan bahasa isyarat Anda di sini!"
                                    : "Masukkan kredensial Anda untuk melanjutkan"
                                }
                            </p>
                        </div>

                        {/* FORM */}
                        <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit} noValidate>

                            {/* INPUT */}
                            {[
                                { name: 'email', text: 'Email', type: 'email', icon: 'email' },
                                { name: 'password', text: 'Kata Sandi', type: 'password', icon: 'password' },
                            ].map((field, index) => (
                                <div
                                    key={field.name}
                                    className="relative"
                                    style={getAnimationStyle(0.6 + index * 0.1)}
                                >
                                    <div style={
                                        shouldShake(field.name, shakeFields)
                                            ? { animation: 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both' }
                                            : {}
                                    }>
                                        <InputText
                                            {...field}
                                            value={data[field.name]}
                                            onChange={handleInputChange}
                                            theme={theme}
                                            className={`${theme.inputBg} ${errors[field.name] ? 'border-red-500' : theme.inputBorder} backdrop-blur-sm transition-all duration-300`}
                                            focusColor={isDay ? '#5A6B47' : '#5D9E8D'}
                                        />
                                    </div>
                                    {errors[field.name] && (
                                        <p
                                            className="text-red-500 text-xs sm:text-sm mt-1"
                                            style={{
                                                animation: 'errorFadeIn 0.3s ease forwards'
                                            }}
                                        >
                                            {errors[field.name]}
                                        </p>
                                    )}
                                </div>
                            ))}

                            {/* REMEMBER */}
                            <div
                                className="flex items-center justify-between text-sm gap-4"
                                style={getAnimationStyle(0.8)}
                            >
                                <label className={`flex items-center space-x-2 ${theme.regularText} cursor-pointer`}>
                                    <input type="checkbox" className={`rounded ${isDay
                                        ? 'border-[#CAC3B8] text-[#5D6E47] focus:ring-[#5D6E47]'
                                        : 'border-[#3A4F4B] text-[#3E7B6A] focus:ring-[#3E7B6A]'
                                        }`} />
                                    <span className='text-xs sm:text-sm'>Ingat saya</span>
                                </label>
                                <a
                                    href="/forgot-password"
                                    className={`${theme.link} ${theme.linkHover} text-xs sm:text-sm transition-colors duration-300 hover:scale-105 active:scale-95 inline-block`}
                                >
                                    Lupa Kata Sandi?
                                </a>
                            </div>

                            {/* SUBMIT */}
                            <button
                                type="submit"
                                disabled={loading}
                                className={`${loading ? "cursor-not-allowed opacity-80" : ""} w-full py-3 ${theme.primary} ${theme.primaryHover} ${theme.primaryText} rounded-xl font-medium transition-all duration-300 shadow-lg transform hover:-translate-y-0.5 active:scale-95 flex justify-center items-center`}
                                style={getAnimationStyle(0.9)}
                            >
                                {loading ? (
                                    <div className="flex items-center">
                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Memproses...
                                    </div>
                                ) : (
                                    isDay ? 'Mulai Belajar Sekarang' : 'Masuk ke Akun Anda'
                                )}
                            </button>

                            <div className="relative my-6">
                                <div className="absolute inset-0 flex items-center">
                                    <div className={`w-full border-t ${theme.divider}`}></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className={`px-2 ${theme.cardBg} ${theme.regularText}`}>Atau lanjutkan dengan</span>
                                </div>
                            </div>


                            {/* LOGIN WITH */}
                            <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                {['Google', 'Facebook'].map((provider) => (
                                    <CardLogin
                                        key={provider}
                                        provider={provider}
                                        isDay={isDay}
                                        colors={{
                                            buttonBg: theme.socialButton,
                                            buttonHover: theme.socialButtonHover,
                                            buttonShadow: theme.socialButtonShadow,
                                            textColor: theme.regularText,
                                            iconActive: isDay ? '#5D6E47' : '#16A34A'
                                        }}
                                    />
                                ))}
                            </div>

                            {/* DIRECT TO SIGN UP */}
                            <div
                                className={`text-center text-sm ${theme.regularText}`}
                                style={getAnimationStyle(1.1)}
                            >
                                <span>Don't have an account? </span>
                                <a
                                    href="/register"
                                    className={`font-medium ${theme.link} ${theme.linkHover} transition-colors duration-300 hover:scale-105 active:scale-95 inline-block`}
                                >
                                    Sign up for free
                                </a>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;