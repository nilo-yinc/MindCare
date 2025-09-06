import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Calendar, 
  Heart, 
  TrendingUp, 
  BookOpen,
  Users,
  Brain,
  Target,
  Clock,
  Award,
  Volume2,
  Play
} from 'lucide-react';
import { MoodTracker } from './components/MoodTracker';
import { ChatInterface } from './components/ChatInterface';
import { StressPredictor } from './components/StressPredictor';

export function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [showChat, setShowChat] = useState(false);

  const quickStats = [
    { label: 'Mood Score', value: '7.2/10', trend: '+0.8', color: 'text-green-600', icon: Heart },
    { label: 'Streak Days', value: '12', trend: '+3', color: 'text-blue-600', icon: Target },
    { label: 'Sessions', value: '8', trend: '+2', color: 'text-purple-600', icon: Calendar },
    { label: 'Stress Level', value: 'Low', trend: '-15%', color: 'text-green-600', icon: TrendingUp },
  ];

  const recentActivities = [
    { type: 'Mood Check-in', time: '2 hours ago', status: 'Completed' },
    { type: 'Meditation Session', time: '1 day ago', status: 'Completed' },
    { type: 'AI Chat', time: '2 days ago', status: 'Helpful' },
    { type: 'Counselling Booked', time: '3 days ago', status: 'Scheduled' },
  ];

  const recommendations = [
    {
      title: 'Breathing Exercise',
      description: '5-minute guided breathing for exam stress',
      duration: '5 min',
      icon: Volume2,
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Study Break Meditation',
      description: 'Perfect for between study sessions',
      duration: '10 min',
      icon: Brain,
      color: 'from-green-500 to-blue-500'
    },
    {
      title: 'Sleep Story',
      description: 'Fall asleep with calming narratives',
      duration: '20 min',
      icon: Play,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome back! 👋
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            How are you feeling today? Let's check in on your mental wellness journey.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {quickStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
                <span className={`text-sm font-medium ${stat.color}`}>
                  {stat.trend}
                </span>
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Mood Tracker */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <MoodTracker />
            </motion.div>

            {/* Stress Predictor */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <StressPredictor />
            </motion.div>

            {/* Recent Activities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Clock className="h-6 w-6 mr-2 text-purple-600" />
                Recent Activities
              </h3>
              <div className="space-y-3">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        {activity.type}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {activity.time}
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-full text-sm font-medium">
                      {activity.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowChat(true)}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-lg font-medium flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Talk to AI Assistant</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-green-600 text-white p-4 rounded-lg font-medium flex items-center justify-center space-x-2"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Book Counselling</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-orange-600 text-white p-4 rounded-lg font-medium flex items-center justify-center space-x-2"
                >
                  <BookOpen className="h-5 w-5" />
                  <span>Browse Resources</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-pink-600 text-white p-4 rounded-lg font-medium flex items-center justify-center space-x-2"
                >
                  <Users className="h-5 w-5" />
                  <span>Find Peer Buddy</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Recommendations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Award className="h-6 w-6 mr-2 text-yellow-600" />
                Recommended for You
              </h3>
              <div className="space-y-4">
                {recommendations.map((rec, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className={`bg-gradient-to-r ${rec.color} p-4 rounded-lg text-white cursor-pointer`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <rec.icon className="h-5 w-5 mr-2" />
                          <span className="font-medium">{rec.title}</span>
                        </div>
                        <p className="text-sm opacity-90 mb-2">
                          {rec.description}
                        </p>
                        <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                          {rec.duration}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Chat Interface */}
      {showChat && (
        <ChatInterface onClose={() => setShowChat(false)} />
      )}
    </div>
  );
}