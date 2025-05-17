import { motion } from 'framer-motion';
import { useMemo } from 'react';

export const FireFlies = ({ amount }) => {
    const fireflies = useMemo(() => {
        return [...Array(amount)].map((_, i) => ({
            id: i,
            top: `${((i * 17) % 100 + (i * 7) % 13)}%`,
            left: `${((i * 23) % 100 + (i * 11) % 17)}%`,
            duration: 3 + (i % 5) * 0.5,
            delay: (i % 3) * 0.7,
        }));
    }, [amount]);

    return (
        <>
            {fireflies.map((firefly) => (
                <motion.div
                    key={firefly.id}
                    className="fixed w-2 h-2 bg-[#E5DED6] rounded-full opacity-70"
                    style={{
                        top: firefly.top,
                        left: firefly.left,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.2, 0.8, 0.2],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: firefly.duration,
                        repeat: Infinity,
                        delay: firefly.delay,
                    }}
                />
            ))}
        </>
    );
};

export const FallingLeaves = ({ amount = 20 }) => {
    const leaves = useMemo(() => {
        return [...Array(amount)].map((_, i) => ({
            id: i,
            initialX: ((i * 13) % 100 + (i * 7) % 23) % 100,
            initialDelay: (i * 0.27) % 5,
            durationBase: 8 + (i % 4),
            xOffset: 30 + (i % 40)
        }));
    }, [amount]);

    return (
        <>
            {leaves.map(leaf => (
                <motion.div
                    key={leaf.id}
                    className="fixed w-8 h-8 pointer-events-none"
                    style={{
                        left: `${leaf.initialX}%`,
                        top: '-20px'
                    }}
                    initial={{ y: -20, rotate: 0 }}
                    animate={{
                        y: ['0vh', '100vh'],
                        x: [0, leaf.xOffset, -leaf.xOffset, 0],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: leaf.durationBase,
                        repeat: Infinity,
                        delay: leaf.initialDelay,
                        ease: "linear"
                    }}
                >
                    <svg
                        viewBox="0 0 24 24"
                        className="w-full h-full fill-[#61674D]/40"
                    >
                        <path d="M17.75,9.35C17.75,9.35 14.39,6.28 9.79,8.71C5.2,11.14 4.89,15.89 4.89,15.89C4.89,15.89 8.26,19.63 12.85,17.2C17.44,14.77 17.75,9.35 17.75,9.35M12.31,15.94C9.33,17.55 6.93,15.33 6.93,15.33C6.93,15.33 7.14,12.14 10.11,10.53C13.09,8.92 15.5,11.14 15.5,11.14C15.5,11.14 15.28,14.33 12.31,15.94Z" />
                    </svg>
                </motion.div>
            ))}
        </>
    );
};

export const Sunlight = () => {
    const sunlightBeams = useMemo(() => {
        return [...Array(6)].map((_, i) => ({
            id: i,
            left: `${(i * 20) + 10}%`,
            rotation: i * 30,
            delay: i * 0.5
        }));
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {sunlightBeams.map((beam) => (
                <motion.div
                    key={beam.id}
                    className="absolute origin-center w-8 h-[200%] bg-gradient-to-b from-[#E5DED6]/40 to-transparent"
                    style={{
                        left: beam.left,
                        top: '-50%',
                        transform: `rotate(${beam.rotation}deg)`,
                    }}
                    animate={{
                        opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: beam.delay,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    );
};

export const Stars = ({ amount }) => {
    const stars = useMemo(() => {
        return [...Array(amount)].map((_, i) => ({
            id: i,
            top: `${((i * 19) % 100 + (i * 7) % 11)}%`,
            left: `${((i * 23) % 100 + (i * 13) % 17)}%`,
            duration: 3 + (i % 5) * 0.4,
            delay: (i % 3) * 0.7,
        }));
    }, [amount]);

    return (
        <>
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="fixed w-2 h-2 bg-yellow-300 rounded-full opacity-70"
                    style={{
                        top: star.top,
                        left: star.left,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.2, 0.8, 0.2],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        delay: star.delay,
                    }}
                />
            ))}
        </>
    );
};

export const SunorMoon = ({ type }) => {
    const craters = useMemo(() => {
        return [
            { id: 1, top: 3, left: 3, size: 4 },
            { id: 2, bottom: 4, right: 2, size: 3 },
            { id: 3, top: 8, right: 4, size: 2 }
        ];
    }, []);

    return (
        <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-10 right-16"
        >
            <div className={`absolute w-32 h-32 rounded-full ${type === "sun"
                ? "bg-[#E5DED6]/20"
                : "bg-white/20"
                } blur-xl transform -translate-x-6 -translate-y-6`} />

            <div className={`w-20 h-20 rounded-full ${type === "sun"
                ? "bg-[#E5DED6]/90 shadow-[0_0_60px_20px_rgba(229,222,214,0.4)]"
                : "bg-white/90 shadow-[0_0_60px_20px_rgba(255,255,255,0.4)]"
                } relative overflow-hidden`}>
                {type === "moon" && (
                    <>
                        {craters.map(crater => (
                            <div
                                key={crater.id}
                                className="absolute rounded-full bg-gray-200/60"
                                style={{
                                    top: crater.top !== undefined ? `${crater.top}px` : 'auto',
                                    left: crater.left !== undefined ? `${crater.left}px` : 'auto',
                                    bottom: crater.bottom !== undefined ? `${crater.bottom}px` : 'auto',
                                    right: crater.right !== undefined ? `${crater.right}px` : 'auto',
                                    width: `${crater.size}px`,
                                    height: `${crater.size}px`
                                }}
                            />
                        ))}
                    </>
                )}
            </div>
        </motion.div>
    );
};

export const Weather = ({ isDay }) => {
    const backgroundClass = useMemo(() => {
        return `fixed inset-0 ${isDay ? 'bg-[#8B7355]/40' : 'bg-blue-900/60'}`;
    }, [isDay]);

    return (
        <div className={backgroundClass} />
    );
};

export const Cloud = ({ isDay }) => {
    const gradientClass = useMemo(() => {
        return `fixed inset-0 bg-gradient-to-b ${isDay
            ? 'from-[#8B7355] via-[#A67B5B] to-[#8B7355]'
            : 'from-blue-900 via-blue-800 to-blue-900'
            }`;
    }, [isDay]);

    return (
        <div className={gradientClass} />
    );
};

export const CloudAnimation = ({ isDay }) => {
    const clouds = Array.from({ length: 5 });

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {clouds.map((_, i) => {
                const randomTop = 5 + Math.random() * 20;
                const randomLeft = -20;
                const randomDuration = 60 + Math.random() * 60;
                const scale = 0.5 + Math.random() * 1.5;
                const opacity = isDay ? 0.8 : 0.3;

                return (
                    <div
                        key={i}
                        className="absolute"
                        style={{
                            left: `${randomLeft}%`,
                            top: `${randomTop}%`,
                            opacity: opacity,
                            transform: `scale(${scale})`,
                            animation: `fadeInUp ${randomDuration}s linear ${i * 10}s infinite`,
                        }}
                    >
                        <Cloud className="w-16 h-16 text-white" />
                    </div>
                );
            })}
        </div>
    );
};
