// ICON
import {
    Star, 
    ArrowUp, ArrowDown, Minus
} from 'phosphor-react';

export const RankingChange = ({ change }) => {
    if (change > 0) {
        return (
            <div className="flex items-center text-green-500">
                <ArrowUp size={16} weight="bold" />
                <span className="ml-0.5 text-xs">{change}</span>
            </div>
        );
    } else if (change < 0) {
        return (
            <div className="flex items-center text-red-500">
                <ArrowDown size={16} weight="bold" />
                <span className="ml-0.5 text-xs">{Math.abs(change)}</span>
            </div>
        );
    } else {
        return (
            <div className="flex items-center text-gray-400">
                <Minus size={16} weight="bold" />
            </div>
        );
    }
};

export const RankingCard = ({ ranking, isLeader, theme }) => {
    return (
        <div className={`
    ${ranking.isCurrentUser ? `${theme.accent.primary} text-white` : `${theme.card.bg} ${theme.text.primary}`}
    ${isLeader ? 'border-2 border-yellow-400' : `border ${theme.card.border}`}
    rounded-lg p-3 md:p-4 flex items-center shadow-md transition-all hover:shadow-lg animate-fadeIn
  `}>
            <div className="flex items-center flex-grow">
                <div className={`w-8 h-8 flex items-center justify-center rounded-full 
        ${isLeader ? 'bg-yellow-400 text-yellow-800' : 'bg-white/20'}
        font-bold text-sm mr-3`}>
                    {ranking.id}
                </div>

                <div className="h-10 w-10 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden">
                    <img src={ranking.avatar} alt="User avatar" className="h-full w-full object-cover" />
                </div>

                <div className="ml-3 flex-grow">
                    <div className="flex items-center">
                        <h3 className={`font-semibold text-sm ${ranking.isCurrentUser ? 'text-white' : theme.text.primary}`}>
                            {ranking.name}
                        </h3>
                        {ranking.isCurrentUser && (
                            <span className="ml-2 bg-white/20 text-xs px-2 py-0.5 rounded-full">
                                Anda
                            </span>
                        )}
                    </div>
                    <div className="flex items-center mt-1">
                        <Star weight="fill" size={12} className={ranking.isCurrentUser ? "text-yellow-300" : "text-yellow-500"} />
                        <span className="ml-1 text-xs">{ranking.points} poin</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <div className={`px-2 py-1 rounded-md text-xs ${ranking.isCurrentUser ? 'bg-white/20' : 'bg-white/10'}`}>
                    Level {ranking.level}
                </div>
                <RankingChange change={ranking.change} />
            </div>
        </div>
    )
};