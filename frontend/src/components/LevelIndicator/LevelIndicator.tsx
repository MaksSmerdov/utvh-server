import React, { useMemo } from 'react';

interface LevelIndicatorProps {
  value: number;
  range: {
    min: number;
    max: number;
  };
  threshold?: number;
}

const LevelIndicator: React.FC<LevelIndicatorProps> = ({ value, range, threshold = 25 }) => {
  const isValidLevel = !isNaN(value);
  const totalRange = range.max - range.min;

  const fillPercentage = useMemo(() => {
    if (!isValidLevel) return 0;
    const raw = ((value - range.min) / totalRange) * 100;
    return Math.min(Math.max(raw, 0), 100);
  }, [value, range, totalRange, isValidLevel]);

  const isWarningActive = isValidLevel && (fillPercentage < threshold || fillPercentage > (100 - threshold));

  return (
    <div
      className={`level-indicator ${isWarningActive ? 'warning' : ''}`}
      style={{
        position: 'absolute',
        width: '100%',
        bottom: '0',
        height: `${fillPercentage}%`,
        transition: 'height 0.5s ease-in-out',
      }}
    />
  );
};

export default LevelIndicator;
