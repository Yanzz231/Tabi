import React, { useState, useEffect } from 'react';

// FUNCTION
import { isDaytime, colorData, getAnimationStyle, shouldShake } from '../function/function';

// COMPONENTS
import { InputText } from '../component/InputComponents';
import { CardLogin } from '../component/CardComponents';
import { BackgroundImage } from '../component/BackgroundComponents';
import { AnimatedLogo } from '../component/LogoComponents';

const RegisterPage = () => {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [isDay, setIsDay] = useState(isDaytime());
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [shakeFields, setShakeFields] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    const colors = colorData("register")

    const theme = isDay ? colors.day : colors.night;

    // UPDATE THEMES
    useEffect(() => {
        // NAVIGATE IF ALREADY LOGIN
        if (localStorage.getItem("email") != null) {
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });

        if (submitted && errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        const fieldsToShake = [];

        if (!data.firstName) {
            newErrors.firstName = 'First name is required';
            fieldsToShake.push('firstName');
        }

        if (!data.lastName) {
            newErrors.lastName = 'Last name is required';
            fieldsToShake.push('lastName');
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

        if (data.password !== data.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
            fieldsToShake.push('confirmPassword');
        }

        setShakeFields(fieldsToShake);
        setErrors(newErrors)
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setLoading(true);

        const formErrors = validateForm();

        if (Object.keys(formErrors).length === 0) {
            console.log('Form submitted:', data);
            setTimeout(() => {
                setLoading(false);
            }, 1500);
        } else {
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }
    };

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

            {/* FORM */}
            <div
                className="w-full max-w-xl relative z-10 px-4 py-4 sm:px-6 sm:py-12 md:px-8"
                style={{
                    opacity: 0,
                    transform: 'translateY(2rem)',
                    animation: 'fadeInUp 0.6s ease forwards'
                }}
            >
                <div className={`backdrop-blur-md ${theme.cardBg} ${theme.cardBorder} rounded-3xl shadow-2xl overflow-hidden border transform transition-all duration-300`}>

                    {/* TEXT */}
                    <div className="p-6 sm:p-8">
                        <div className="flex flex-col items-center justify-center text-center mb-8" style={getAnimationStyle(0.4)}>
                            <a href="/">
                                <img
                                    src="/img/logo/logo.png"
                                    className="w-20 h-20 m-2 md:hidden cursor-pointer"
                                    alt="Logo Tabir"
                                />
                            </a>
                            <h1 className={`text-2xl sm:text-3xl font-bold ${theme.headingText} mb-3`}>
                                Mulai Perjalanan Anda
                            </h1>
                            <p className={`text-sm sm:text-base ${theme.lightText}`}>
                                {isDay
                                    ? "Bergabunglah dengan komunitas belajar bahasa isyarat kami!"
                                    : "Buat akun pembelajaran ajaib Anda"
                                }
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">

                            {/* INPUT */}
                            <div className="grid grid-cols-2 gap-4" style={getAnimationStyle(0.5)}>
                                {[
                                    { name: 'firstName', text: 'Nama Depan', type: 'text', icon: 'people' },
                                    { name: 'lastName', text: 'Nama Belakang', type: 'text', icon: 'people' },
                                ].map((field, index) => (
                                    <div className="relative" key={index}>
                                        <div style={
                                            shouldShake(field.name, shakeFields)
                                                ? { animation: 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both' }
                                                : {}
                                        }>
                                            <InputText
                                                name={field.name}
                                                text={field.text}
                                                theme={theme}
                                                type={field.type}
                                                icon={field.icon}
                                                onChange={handleInputChange}
                                                className={`w-full ${theme.inputBg} backdrop-blur-sm transition-all duration-300 ${shouldShake(field.name, shakeFields) ? 'border-red-500' : theme.inputBorder}`}
                                                focusColor={isDay ? '#5A6B47' : '#16A34A'} // Emerald-600 equivalent
                                            />
                                        </div>
                                        {errors[field.name] && (
                                            <p className="text-red-500 text-xs sm:text-sm"
                                                style={{
                                                    animation: 'errorFadeIn 0.3s ease forwards'
                                                }}>
                                                {errors[field.name]}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Form Inputs */}
                            {[
                                { name: 'email', text: 'Email', type: 'email', icon: 'email', animationDelay: 0.6 },
                                { name: 'password', text: 'Kata Sandi', type: 'password', icon: 'password', animationDelay: 0.7 },
                                { name: 'confirmPassword', text: 'Konfirmasi Kata Sandi', type: 'password', icon: 'password', animationDelay: 0.8 }
                            ].map((field) => (
                                <div className="relative" key={field.name} style={getAnimationStyle(field.animationDelay)}>
                                    <div style={
                                        shouldShake(field.name, shakeFields)
                                            ? { animation: 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both' }
                                            : {}
                                    }>
                                        <InputText
                                            name={field.name}
                                            text={field.text}
                                            theme={theme}
                                            type={field.type}
                                            icon={field.icon}
                                            onChange={handleInputChange}
                                            className={`w-full ${theme.inputBg} backdrop-blur-sm transition-all duration-300 ${shouldShake(field.name, shakeFields) ? 'border-red-500' : theme.inputBorder}`}
                                            focusColor={isDay ? '#5A6B47' : '#16A34A'} // Emerald-600 equivalent
                                        />
                                    </div>
                                    {errors[field.name] && (
                                        <p className="text-red-500 text-xs sm:text-sm"
                                            style={{
                                                animation: 'errorFadeIn 0.3s ease forwards'
                                            }}>
                                            {errors[field.name]}
                                        </p>
                                    )}
                                </div>
                            ))}

                            {/* AGREE */}
                            <div className="flex items-center space-x-2 text-xs sm:text-sm" style={getAnimationStyle(0.9)}>
                                <input
                                    type="checkbox"
                                    className={`rounded transition-colors duration-200 ${theme.checkbox}`}
                                />
                                <span className={theme.regularText}>
                                    Saya menyetujui{' '}
                                    <a href="/terms" className={`underline ${theme.link} ${theme.linkHover}`}>Ketentuan</a>
                                    {' '}dan{' '}
                                    <a href="/privacy" className={`underline ${theme.link} ${theme.linkHover}`}>Kebijakan Privasi</a>
                                </span>
                            </div>

                            {/* BUTTON */}
                            <button
                                disabled={loading}
                                type="submit"
                                className={`${loading ? "cursor-not-allowed opacity-80" : ""} w-full py-3 sm:py-4 text-sm sm:text-base font-medium rounded-xl transition-all duration-300 ${theme.primary} ${theme.primaryHover} ${theme.primaryText} shadow-lg transform hover:-translate-y-0.5 active:scale-95 flex justify-center items-center`}
                                style={getAnimationStyle(1.0)}
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
                                    isDay ? 'Mulai Perjalanan Anda' : 'Buat Akun Anda'
                                )}
                            </button>

                            <div className="relative my-6">
                                <div className="absolute inset-0 flex items-center">
                                    <div className={`w-full border-t ${theme.divider}`}></div>
                                </div>
                                <div className="relative flex justify-center text-xs sm:text-sm">
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
                                            iconActive: isDay ? '#5D6E47' : '#16A34A' // Emerald-600 equivalent
                                        }}
                                    />
                                ))}
                            </div>

                            {/* DIRECT TO SIGN IN */}
                            <div className={`text-center text-xs sm:text-sm ${theme.regularText}`}
                                style={getAnimationStyle(1.1)}>
                                <span>Sudah memiliki akun? </span>
                                <a
                                    href="/login"
                                    className={`font-medium inline-block ${theme.link} ${theme.linkHover} transition-colors duration-300 hover:scale-105 active:scale-95`}
                                >
                                    Masuk di sini
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;