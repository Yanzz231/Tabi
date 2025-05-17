import React, { useState } from 'react';

export const CardLogin = ({ provider, colors }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    
    return (
        <button
            key={provider}
            type='button'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setIsPressed(false);
            }}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            className={`flex items-center justify-center px-4 py-2 border ${colors.buttonBg} rounded-xl transition-all duration-300 ${
                isHovered ? `${colors.buttonShadow} ${colors.buttonHover}` : ''
            }`}
            style={{
                transform: isPressed 
                    ? 'scale(0.95)' 
                    : isHovered 
                        ? 'scale(1.05) translateY(-3px)' 
                        : 'scale(1) translateY(0)',
                transition: 'transform 0.3s ease'
            }}
        >
            <div 
                className={`relative mr-2 transition-all duration-300 ${isHovered ? 'animate-bounce' : ''}`} 
                style={{
                    transform: isHovered ? 'rotate(10deg)' : 'rotate(0)',
                    animation: isHovered ? 'icon-wiggle 0.5s ease' : 'none',
                }}
            >
                <img
                    src={`/img/icon/${provider.toLowerCase()}Icon.png`}
                    alt={provider}
                    className={`w-8 h-8 transition-all duration-300 ${isHovered ? 'scale-110' : ''}`}
                />
                {isHovered && (
                    <div
                        className="absolute -top-1 -right-1 w-2 h-2 rounded-full animate-ping"
                        style={{ backgroundColor: colors.iconActive }}
                    />
                )}
            </div>
            <span className={`text-base ${colors.textColor} transition-all duration-300 ${isHovered ? 'font-medium' : ''}`}>
                {provider}
            </span>
        </button>
    )
}