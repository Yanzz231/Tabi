export const isDaytime = () => {
  const hour = new Date().getHours();
  // return hour >= 7 && hour < 18;
  return true
};

export const colorData = (page) => {
  if (page === "home") {
    return {
      day: {
        bg: "rgba(245, 242, 235, 0.6)",
        text: {
          heading: "text-[#3C4A2A] drop-shadow-md",
          primary: "text-white",
          regular: "text-[#3C4A2A] font-medium",
          light: "text-[#3C4A2A]/90",
        },
        button: {
          primary: "bg-[#5D6E47] hover:bg-[#4A583A] text-white",
          secondary:
            "bg-white/10 hover:bg-white/20 text-white border border-white/20",
          cta: "bg-white text-[#5D6E47] hover:bg-green-50",
        },
        card: {
          bg: "bg-[#F5F2EB]/90",
          border: "border-[#F5F2EB]/20",
        },
        badge: "bg-[#F5F2EB]/90 text-[#3C4A2A]",
        highlight: "text-[#3C4A2A]",
      },
      night: {
        bg: "rgba(25, 25, 112, 0.8)",
        text: {
          heading: "text-white",
          primary: "text-white",
          regular: "text-white/80",
          light: "text-white/60",
        },
        button: {
          primary: "bg-green-500 hover:bg-green-600 text-white",
          secondary:
            "bg-white/10 hover:bg-white/20 text-white border border-white/20",
          cta: "bg-white text-green-600 hover:bg-green-50",
        },
        card: {
          bg: "bg-white/10",
          border: "border-white/10",
        },
        badge: "bg-green-500/20 text-green-300",
        highlight: "text-green-400",
      },
    };
  } else  if (page === "login") {
    return {
      day: {
        cardBg: "bg-[#F5F2EB]/90",
        cardBorder: "border-[#F5F2EB]/20",
        primary: "bg-[#5D6E47]",
        primaryHover: "hover:bg-[#4A583A]",
        primaryText: "text-[#FFFFFF]",
        headingText: "text-[#3C4A2A]",
        regularText: "text-[#5A6B47]",
        lightText: "text-[#5A6B47]/80",
        inputBg: "bg-[#F5F2EB]/50",
        inputBorder: "border-[#CAC3B8]",
        inputBorderFocus: "border-[#5A6B47]",
        inputColor: "text-gray-700 placeholder-gray-500",
        link: "text-[#7D5F40]",
        linkHover: "hover:text-[#5A4427]",
        divider: "border-[#D8D0C5]",
        socialButton: "border-[#D8D0C5] bg-[#F5F2EB]/70",
        socialButtonHover: "border-[#7D5F40]",
        socialButtonShadow: "shadow-[0_5px_15px_rgba(93,110,71,0.25)]",
      },
      night: {
        cardBg: "bg-[#1A2238]/60",
        cardBorder: "border-indigo-900",
        primary: "bg-green-500",
        primaryHover: "hover:bg-green-600",
        primaryText: "text-white",
        headingText: "text-white",
        regularText: "text-white/80",
        lightText: "text-white/60",
        inputBg: "bg-[#1A2238]/40",
        inputBorder: "border-indigo-700",
        inputBorderFocus: "border-green-500",
        inputColor: "text-white placeholder-white",
        link: "text-green-400",
        linkHover: "hover:text-green-300",
        divider: "border-indigo-800",
        socialButton: "border-indigo-800 bg-[#1A2238]/50",
        socialButtonHover: "border-green-500",
        socialButtonShadow: "shadow-[0_5px_15px_rgba(16,185,129,0.25)]",
      },
    };
  } else if (page === "register") {
    return {
      day: {
        cardBg: "bg-[#F5F2EB]/90",
        cardBorder: "border-[#F5F2EB]/20",
        primary: "bg-[#5D6E47]",
        primaryHover: "hover:bg-[#4A583A]",
        primaryText: "text-[#FFFFFF]",
        headingText: "text-[#3C4A2A]",
        regularText: "text-[#5A6B47]",
        lightText: "text-[#5A6B47]/80",
        inputBg: "bg-[#F5F2EB]/50",
        inputBorder: "border-[#CAC3B8]",
        inputBorderFocus: "border-[#5A6B47]",
        inputColor: "text-gray-700 placeholder-gray-500",
        link: "text-[#7D5F40]",
        linkHover: "hover:text-[#5A4427]",
        divider: "border-[#D8D0C5]",
        socialButton: "border-[#D8D0C5] bg-[#F5F2EB]/70",
        socialButtonHover: "border-[#7D5F40]",
        socialButtonShadow: "shadow-[0_5px_15px_rgba(93,110,71,0.25)]",
        checkbox: "border-[#CAC3B8] text-[#5D6E47] focus:ring-[#5D6E47]",
      },
      night: {
        cardBg: "bg-[#1A2238]/60",
        cardBorder: "border-indigo-900",
        primary: "bg-green-500",
        primaryHover: "hover:bg-green-600",
        primaryText: "text-white",
        headingText: "text-white",
        regularText: "text-white/80",
        lightText: "text-white/60",
        inputBg: "bg-[#1A2238]/40",
        inputBorder: "border-indigo-700",
        inputBorderFocus: "border-green-500",
        inputColor: "text-white placeholder-white",
        link: "text-green-400",
        linkHover: "hover:text-green-300",
        divider: "border-indigo-800",
        socialButton: "border-indigo-800 bg-[#1A2238]/50",
        socialButtonHover: "border-green-500", 
        socialButtonShadow: "shadow-[0_5px_15px_rgba(16,185,129,0.25)]",
        checkbox: "border-indigo-700 text-green-500 focus:ring-green-500",
      },
    };
  }
};

export const getAnimationStyle = (delay) => {
  return {
    opacity: 0,
    transform: "translateY(1rem)",
    animation: `fadeInUp 0.5s ease ${delay}s forwards`,
  };
};

export const shouldShake = (fieldName, shakeFields) => {
  return shakeFields.includes(fieldName);
};
