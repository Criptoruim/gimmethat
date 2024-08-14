import React, { useState } from 'react';
import '../index.css'; // Import the CSS file

type LeaderboardData = {
  active: { rank: number; username: string; score: number; avatar: string }[];
  discoverers: { rank: number; username: string; products: number; avatar: string }[];
  badges: { rank: number; username: string; badges: number; avatar: string }[];
};

type Tab = 'active' | 'discoverers' | 'badges';

const CombinedLeaderboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('active');
  const [userProgress, setUserProgress] = useState({ rank: 42, points: 8750, nextRank: 9000 });
  const [globalStats, setGlobalStats] = useState({ totalUsers: 54321, productsAdded: 12345, countriesRepresented: 187 });

  const leaderboardData: LeaderboardData = {
    active: [
      { rank: 1, username: 'GlobalExplorer', score: 15420, avatar: '🌍' },
      { rank: 2, username: 'CultureVulture', score: 14280, avatar: '🦅' },
      { rank: 3, username: 'WorldTaster', score: 13950, avatar: '🍴' },
      { rank: 4, username: 'TravelBuff', score: 12800, avatar: '✈️' },
      { rank: 5, username: 'CuriousCat', score: 11600, avatar: '🐱' },
    ],
    discoverers: [
      { rank: 1, username: 'FoodieFinderPro', products: 89, avatar: '🕵️' },
      { rank: 2, username: 'GlobeTrotterGuru', products: 76, avatar: '🌐' },
      { rank: 3, username: 'ExoticExplorer', products: 64, avatar: '🗺️' },
      { rank: 4, username: 'CulinaryColumbus', products: 58, avatar: '🍳' },
      { rank: 5, username: 'TreasureHunter', products: 52, avatar: '💎' },
    ],
    badges: [
      { rank: 1, username: 'AchievementMaster', badges: 42, avatar: '🏆' },
      { rank: 2, username: 'BadgeCollector', badges: 38, avatar: '🎖️' },
      { rank: 3, username: 'MedalMagnet', badges: 35, avatar: '🧲' },
      { rank: 4, username: 'AccoladeAce', badges: 33, avatar: '🎯' },
      { rank: 5, username: 'TrophyTracker', badges: 30, avatar: '🏅' },
    ],
  };

  const renderLeaderboard = (data: any[]) => (
    <div className="leaderboard-list">
      {data.map((user) => (
        <div key={user.rank} className="leaderboard-item">
          <div className="rank">{user.rank}</div>
          <div className="avatar">{user.avatar}</div>
          <div className="username">{user.username}</div>
          <div className="score">
            {activeTab === 'active' && `${user.score} points`}
            {activeTab === 'discoverers' && `${user.products} products`}
            {activeTab === 'badges' && `${user.badges} badges`}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="container">
      <header className="header">
        <h1 className="header-title">GimmeThat Leaderboards</h1>
      </header>

      <main className="main">
        <div className="user-progress-container">
          <h3 className="progress-title">Your Progress</h3>
          <p>Current Rank: {userProgress.rank}</p>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${(userProgress.points / userProgress.nextRank) * 100}%` }}
            ></div>
          </div>
          <p>{userProgress.points} / {userProgress.nextRank} points to next rank</p>
        </div>

        <div className="tabs-container">
          <button
            className={activeTab === 'active' ? 'tab active-tab' : 'tab'}
            onClick={() => setActiveTab('active')}
          >
            Most Active Users
          </button>
          <button
            className={activeTab === 'discoverers' ? 'tab active-tab' : 'tab'}
            onClick={() => setActiveTab('discoverers')}
          >
            Top Discoverers
          </button>
          <button
            className={activeTab === 'badges' ? 'tab active-tab' : 'tab'}
            onClick={() => setActiveTab('badges')}
          >
            Badge Champions
          </button>
        </div>

        <div className="leaderboard-container">
          <h2 className="leaderboard-title">
            {activeTab === 'active' && '🏃‍♂️ Most Active Users'}
            {activeTab === 'discoverers' && '🔍 Top Product Discoverers'}
            {activeTab === 'badges' && '🏅 Badge Champions'}
          </h2>
          {renderLeaderboard(leaderboardData[activeTab])}
        </div>

        <div className="global-stats-container">
          <h3 className="stats-title">Global Statistics</h3>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-value">{globalStats.totalUsers.toLocaleString()}</span>
              <span className="stat-label">Total Users</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{globalStats.productsAdded.toLocaleString()}</span>
              <span className="stat-label">Products Added</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{globalStats.countriesRepresented}</span>
              <span className="stat-label">Countries Represented</span>
            </div>
          </div>
        </div>

        <div className="info-box">
          <h3 className="info-title">How to Climb the Ranks</h3>
          <ul className="info-list">
            <li>Add new products to the global catalog</li>
            <li>Vote and review products from around the world</li>
            <li>Engage with the community by commenting and sharing</li>
            <li>Complete challenges and earn badges</li>
            <li>Log in daily for bonus points</li>
          </ul>
        </div>

        <div className="challenge-box">
          <h3 className="challenge-title">🌟 Weekly Challenge</h3>
          <p className="challenge-text">
            Discover and add 5 new breakfast items from different countries to earn the "Breakfast World Tour" badge!
          </p>
          <button className="challenge-button">Accept Challenge</button>
        </div>
      </main>
    </div>
  );
};

export default CombinedLeaderboardPage;
