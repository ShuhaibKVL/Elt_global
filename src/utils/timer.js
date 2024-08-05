
const timer = (classTime, nowTime) => {
    const classDate = new Date(classTime);
    const nowDate = new Date(nowTime);
    const diffMs = classDate - nowDate;
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHrs = Math.floor(diffMin / 60);
    const diffDays = Math.floor(diffHrs / 24);
  
    if (diffMs > 0) {
      return {
        days: diffDays,
        hours: diffHrs % 24,
        minutes: diffMin % 60,
        seconds: diffSec % 60,
      };
    } else {
      return null;
    }
  };
  
  export default timer;