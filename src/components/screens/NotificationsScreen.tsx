import React from 'react';
import { Heart, MessageCircle, Eye, UserPlus, TrendingUp } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export function NotificationsScreen() {
  const { isDarkMode } = useTheme();
  const notifications = [
    {
      id: 1,
      icon: Heart,
      iconColor: 'text-red-500',
      iconBg: 'bg-red-50',
      message: 'Nike a aimé votre publicité',
      time: 'Il y a 5 min',
      unread: true
    },
    {
      id: 2,
      icon: Eye,
      iconColor: 'text-[#FF6A00]',
      iconBg: 'bg-orange-50',
      message: 'Votre publicité a atteint 1 000 vues',
      time: 'Il y a 1h',
      unread: true
    },
    {
      id: 3,
      icon: MessageCircle,
      iconColor: 'text-blue-500',
      iconBg: 'bg-blue-50',
      message: 'Nouveau commentaire sur "Collection Printemps"',
      time: 'Il y a 2h',
      unread: true
    },
    {
      id: 4,
      icon: UserPlus,
      iconColor: 'text-green-500',
      iconBg: 'bg-green-50',
      message: 'Adidas a commencé à vous suivre',
      time: 'Il y a 3h',
      unread: false
    },
    {
      id: 5,
      icon: TrendingUp,
      iconColor: 'text-purple-500',
      iconBg: 'bg-purple-50',
      message: 'Votre pub est en tendance dans la catégorie Mode',
      time: 'Il y a 5h',
      unread: false
    },
    {
      id: 6,
      icon: Heart,
      iconColor: 'text-red-500',
      iconBg: 'bg-red-50',
      message: 'Apple a publié une nouvelle publicité',
      time: 'Il y a 1 jour',
      unread: false
    },
    {
      id: 7,
      icon: MessageCircle,
      iconColor: 'text-blue-500',
      iconBg: 'bg-blue-50',
      message: 'Tesla a répondu à votre commentaire',
      time: 'Il y a 2 jours',
      unread: false
    },
    {
      id: 8,
      icon: Eye,
      iconColor: 'text-[#FF6A00]',
      iconBg: 'bg-orange-50',
      message: 'Votre publicité a atteint 5 000 vues',
      time: 'Il y a 3 jours',
      unread: false
    }
  ];

  return (
    <div className={`w-full h-full ${isDarkMode ? 'bg-[#0D0D0D]' : 'bg-white'} overflow-y-auto scrollbar-hide pb-20`}>
      {/* Header */}
      <div className={`sticky top-0 ${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-white'} z-10 px-4 py-6 border-b ${isDarkMode ? 'border-[#2A2A2A]' : 'border-gray-200'}`}>
        <h1 className={`text-2xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Poppins' }}>Notifications</h1>
      </div>

      {/* Notifications list */}
      <div className={`divide-y ${isDarkMode ? 'divide-[#2A2A2A]' : 'divide-gray-100'}`}>
        {notifications.map((notification) => {
          const Icon = notification.icon;
          return (
            <div
              key={notification.id}
              className={`px-4 py-4 flex items-start gap-3 ${isDarkMode ? 'hover:bg-[#1E1E1E]' : 'hover:bg-gray-50'} transition-colors ${
                notification.unread ? (isDarkMode ? 'bg-[#FF6A00]/5' : 'bg-orange-50/30') : ''
              }`}
            >
              <div className={`w-10 h-10 rounded-full ${isDarkMode ? notification.iconBg.replace('50', '500/10') : notification.iconBg} flex items-center justify-center flex-shrink-0`}>
                <Icon size={20} className={notification.iconColor} />
              </div>
              
              <div className="flex-1 min-w-0">
                <p className={`${isDarkMode ? 'text-white' : 'text-[#1C1F33]'} mb-1`}>{notification.message}</p>
                <p className={`text-sm ${isDarkMode ? 'text-[#B3B3B3]' : 'text-gray-500'}`}>{notification.time}</p>
              </div>

              {notification.unread && (
                <div className="w-2 h-2 bg-[#FF6A00] rounded-full flex-shrink-0 mt-2" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
