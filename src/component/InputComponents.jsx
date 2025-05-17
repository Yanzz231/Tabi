import React, { useState } from 'react';
// ICON
import { EnvelopeSimple, LockKey, User } from 'phosphor-react';

export function InputText({ type, text, icon, onChange, name, onFocus, onBlur, className, focusColor, theme }) {
    const [isFocused, setIsFocused] = useState(false);
    
    const handleFocus = (e) => {
        setIsFocused(true);
        if (onFocus) onFocus(e);
    };
    
    const handleBlur = (e) => {
        setIsFocused(false);
        if (onBlur) onBlur(e);
    };
    
    const iconFocusColor = focusColor || '#61674D';
    
    const getIcon = () => {
        switch (icon) {
            case "email":
                return <EnvelopeSimple size={25} weight={isFocused ? "fill" : "regular"} />;
            case "password":
                return <LockKey size={25} weight={isFocused ? "fill" : "regular"} />;
            case "people":
                return <User size={25} weight={isFocused ? "fill" : "regular"} />;
            default:
                return null;
        }
    };
    
    return (
        <div className={`flex items-center border rounded-lg p-2 w-full transition-all duration-300 ${className} ${
            isFocused ? 'shadow-md' : ''
        }`}>
            <span className="text-gray-500 mr-2 transition-all duration-300 input-icon" style={{
                transform: isFocused ? 'scale(1.1)' : 'scale(1)',
                color: isFocused ? iconFocusColor : '#6B7280',
            }}>
                {getIcon()}
            </span>
            <input
                name={name}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                type={type}
                placeholder={text}
                className={`w-full text-sm ${theme.inputColor} outline-none bg-transparent p-2 transition-all duration-300 ${
                    isFocused ? 'placeholder-opacity-70' : ''
                }`}
                style={{
                    transform: isFocused ? 'translateX(2px)' : 'translateX(0)',
                }}
            />
            
            <style jsx>{`
                @keyframes input-focus {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.02); }
                    100% { transform: scale(1); }
                }
            `}</style>
        </div>
    )
}