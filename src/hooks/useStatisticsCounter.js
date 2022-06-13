import { useState } from 'react';

const useStatisticsCounter = (initialStats = {}) => {
  const [stats, setStats] = useState(initialStats);

  const updateStatsCounter = (statName, inc = 1) => {
    setStats(prevStats => ({
      ...prevStats,
      [statName]: prevStats[statName] + inc,
    }));
  };

  return [stats, updateStatsCounter];
};

export { useStatisticsCounter };
