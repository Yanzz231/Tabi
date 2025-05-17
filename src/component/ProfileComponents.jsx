// ICON
import {
    Trophy, Calendar, Medal, Gear,
    ChartBar, Clock, Lightning, ShieldCheck,
    Book, Envelope, SignOut, ArrowLeft 
} from 'phosphor-react';

export const ProfileContent = ({ theme, userStats, currentStreak, onLogout, setActiveTab }) => (
    <div className="space-y-6">
        <div className={`${theme.card.bg} rounded-xl p-4 md:p-6 border ${theme.card.border} shadow-md animate-fadeInUp`}>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">

                <img src={userStats.avatar} alt="User avatar" className={`w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br ${theme.accent.primary} flex items-center justify-center text-3xl md:text-5xl ${theme.text.white}`} />

                <div className="flex-grow text-center md:text-left">
                    <h2 className={`text-xl md:text-2xl font-bold ${theme.text.heading}`}>{userStats.name}</h2>
                    <p className={`text-sm ${theme.text.light} mt-1`}>{userStats.email}</p>
                    <p className={`text-xs ${theme.text.light} mt-1`}>Bergabung sejak {userStats.joinDate}</p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3 mt-3 md:mt-4">
                        <div className={`${theme.badge} px-3 py-1 rounded-full text-xs flex items-center gap-1`}>
                            <Trophy weight="fill" size={14} />
                            <span>Level {userStats.level}</span>
                        </div>
                        <div className={`${theme.badge} px-3 py-1 rounded-full text-xs flex items-center gap-1`}>
                            <ChartBar weight="fill" size={14} />
                            <span>{userStats.totalXP} XP</span>
                        </div>
                        <div className={`${theme.badge} px-3 py-1 rounded-full text-xs flex items-center gap-1`}>
                            <Clock weight="fill" size={14} />
                            <span>{currentStreak} Hari</span>
                        </div>
                    </div>

                    <div className="mt-4 md:mt-6">
                        <div className="flex justify-between items-center mb-1">
                            <span className={`text-xs font-medium ${theme.text.regular}`}>Kemajuan Level</span>
                            <span className={`text-xs font-medium ${theme.text.regular}`}>{userStats.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className={`h-2 rounded-full ${theme.accent.primary} transition-all duration-1000 ease-in-out`}
                                style={{ width: `${userStats.progress}%` }}
                            ></div>
                        </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex space-x-2">
                            <button
                            onClick={() => setActiveTab("settings")}
                                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg ${theme.button.secondary}`}
                            >
                                <Gear size={20} weight="bold" />
                                <span className="font-medium">Pengaturan</span>
                            </button>
                            <button
                                onClick={onLogout}
                                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-red-500 hover:bg-red-600 transition-colors text-white`}
                            >
                                <SignOut size={20} weight="bold" />
                                <span className="font-medium">Keluar</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className={`${theme.card.bg} rounded-xl p-4 md:p-6 border ${theme.card.border} shadow-md animate-fadeInUp`}>
                <div className="flex items-center gap-2 mb-4">
                    <ChartBar size={24} className={theme.text.heading} />
                    <h3 className={`text-lg font-bold ${theme.text.heading}`}>Statistik Belajar</h3>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${theme.accent.primary}`}>
                                <Lightning weight="fill" size={16} className="text-white" />
                            </div>
                            <span className={`text-sm ${theme.text.regular}`}>Total XP</span>
                        </div>
                        <span className={`text-lg font-bold ${theme.text.heading}`}>{userStats.totalXP}</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${theme.accent.primary}`}>
                                <Book weight="fill" size={16} className="text-white" />
                            </div>
                            <span className={`text-sm ${theme.text.regular}`}>Pelajaran Selesai</span>
                        </div>
                        <span className={`text-lg font-bold ${theme.text.heading}`}>{userStats.completedLessons}/{userStats.totalLessons}</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${theme.accent.primary}`}>
                                <Clock weight="fill" size={16} className="text-white" />
                            </div>
                            <span className={`text-sm ${theme.text.regular}`}>Streak Saat Ini</span>
                        </div>
                        <span className={`text-lg font-bold ${theme.text.heading}`}>{currentStreak} hari</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${theme.accent.primary}`}>
                                <Medal weight="fill" size={16} className="text-white" />
                            </div>
                            <span className={`text-sm ${theme.text.regular}`}>Pencapaian</span>
                        </div>
                        <span className={`text-lg font-bold ${theme.text.heading}`}>{userStats.achievements.filter(a => a.earned).length}/{userStats.achievements.length}</span>
                    </div>
                </div>
            </div>

            <div className={`${theme.card.bg} rounded-xl p-4 md:p-6 border ${theme.card.border} shadow-md animate-fadeInUp`}>
                <div className="flex items-center gap-2 mb-4">
                    <Clock size={24} className={theme.text.heading} />
                    <h3 className={`text-lg font-bold ${theme.text.heading}`}>Aktivitas Terakhir</h3>
                </div>

                <div className="space-y-3">
                    {userStats.activityHistory.map((activity, index) => (
                        <div key={index} className={`flex items-center justify-between py-2 ${index < userStats.activityHistory.length - 1 ? 'border-b ' + theme.divider : ''}`}>
                            <div className="flex-grow">
                                <p className={`text-sm font-medium ${theme.text.regular}`}>{activity.activity}</p>
                                <p className={`text-xs ${theme.text.light}`}>{activity.date}</p>
                            </div>
                            <div className={`text-xs font-medium flex items-center ${theme.badge} px-2 py-1 rounded-full`}>
                                <span>+{activity.xp} XP</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className={`${theme.card.bg} rounded-xl p-4 md:p-6 border ${theme.card.border} shadow-md animate-fadeInUp`}>
            <div className="flex items-center gap-2 mb-4">
                <Trophy size={24} className={theme.text.heading} />
                <h3 className={`text-lg font-bold ${theme.text.heading}`}>Pencapaian</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {userStats.achievements.map((achievement) => (
                    <div
                        key={achievement.id}
                        className={`border ${theme.card.border} rounded-lg p-3 ${achievement.earned ? theme.card.bg : 'bg-gray-200 dark:bg-gray-700/50'}`}
                    >
                        <div className="flex items-start gap-3">
                            <div className="text-3xl">{achievement.icon}</div>
                            <div className="flex-grow">
                                <h4 className={`text-sm font-bold ${theme.text.heading}`}>{achievement.name}</h4>
                                <p className={`text-xs ${theme.text.light} mt-1`}>{achievement.description}</p>

                                {achievement.earned ? (
                                    <div className={`flex items-center gap-1 mt-2 text-xs ${theme.text.secondary}`}>
                                        <Medal weight="fill" size={12} />
                                        <span>Diperoleh {achievement.date}</span>
                                    </div>
                                ) : (
                                    <div className="mt-2">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className={`text-xs ${theme.text.light}`}>Progress</span>
                                            <span className={`text-xs ${theme.text.light}`}>{achievement.progress}%</span>
                                        </div>
                                        <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-1.5">
                                            <div
                                                className={`h-1.5 rounded-full ${theme.accent.secondary} transition-all duration-1000 ease-in-out`}
                                                style={{ width: `${achievement.progress}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);


export const SettingsContent = ({ theme, userStats, setActiveTab }) => (
    <div className={`${theme.card.bg} rounded-xl p-4 md:p-6 border ${theme.card.border} shadow-md animate-fadeInUp`}>
        <div className="flex items-center gap-2 mb-6">
            <Gear size={24} className={theme.text.heading} />
            <h3 className={`text-lg font-bold ${theme.text.heading}`}>Pengaturan Akun</h3>
        </div>

        <div className="space-y-6">
            <div className="space-y-4">
                <h4 className={`text-base font-medium ${theme.text.heading}`}>Informasi Pribadi</h4>

                <div>
                    <label className={`block text-sm font-medium ${theme.text.light} mb-1`}>Nama</label>
                    <input
                        type="text"
                        className={`w-full px-3 py-2 rounded-lg border ${theme.inputBorder} ${theme.inputBg}`}
                        value={userStats.name}
                        readOnly
                    />
                </div>

                <div>
                    <label className={`block text-sm font-medium ${theme.text.light} mb-1`}>Email</label>
                    <input
                        type="email"
                        className={`w-full px-3 py-2 rounded-lg border ${theme.inputBorder} ${theme.inputBg}`}
                        value={userStats.email}
                        readOnly
                    />
                </div>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <h4 className={`text-base font-medium ${theme.text.heading} mb-4`}>Preferensi Aplikasi</h4>

                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Calendar size={20} className={theme.text.regular} />
                            <span className={`text-sm ${theme.text.regular}`}>Pengingat Harian</span>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                        </label>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Lightning size={20} className={theme.text.regular} />
                            <span className={`text-sm ${theme.text.regular}`}>Mode Hemat Daya</span>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                        </label>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <ShieldCheck size={20} className={theme.text.regular} />
                            <span className={`text-sm ${theme.text.regular}`}>Notifikasi</span>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                        </label>
                    </div>
                </div>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700 flex flex-col gap-3">
                <button
                    className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg ${theme.button.secondary}`}
                >
                    <Envelope size={20} />
                    <span>Ubah Email</span>
                </button>

                <button
                    onClick={() => setActiveTab("profile")}
                    className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg ${theme.button.primary} text-white`}
                >
                    <ArrowLeft size={20} />
                    <span>Kembali</span>
                </button>
            </div>
        </div>
    </div>
);