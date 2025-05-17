// ICON
import {
  Fire, Heart, Star,
} from 'phosphor-react';

// COMPONENTS
import { LevelIndicator } from './LearingComponents';

export const HeaderStat = ({ theme, hearts, points, currentStreak }) => {
    return (
        <header className={`sticky top-0 z-50 ${theme.card.bg} backdrop-blur-md border-b ${theme.card.border} p-2 sm:p-3 shadow-md`}>
            <div className="container mx-auto flex justify-between items-center">
                <a href='/beranda' className="flex items-center space-x-1.5 sm:space-x-2">
                    <img
                        src="/img/logo/logo.png"
                        alt="Tabi Logo"
                        className="w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 rounded-full"
                    />
                    <span className={`text-lg sm:text-xl md:text-3xl font-bold ${theme.text.heading}`}>TABI</span>
                </a>

                <div className="flex items-center space-x-1.5 sm:space-x-3 md:space-x-4">
                    <div className="flex items-center bg-white/10 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-lg">
                        <Fire weight="fill" size={16} className="text-orange-500" />
                        <span className={`ml-0.5 text-xs sm:text-sm font-semibold ${theme.text.primary}`}>{currentStreak}</span>
                    </div>
                    <div className="flex items-center bg-white/10 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-lg">
                        <Heart weight="fill" size={16} className="text-red-500" />
                        <span className={`ml-0.5 text-xs sm:text-sm font-semibold ${theme.text.primary}`}>{hearts}</span>
                    </div>
                    <div className="flex items-center bg-white/10 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-lg">
                        <Star weight="fill" size={16} className="text-yellow-500" />
                        <span className={`ml-0.5 text-xs sm:text-sm font-semibold ${theme.text.primary}`}>{points}</span>
                    </div>
                    <LevelIndicator level={localStorage.getItem("level")} theme={theme} />
                </div>
            </div>
        </header>
    )
}