import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals/base';

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    getCLS(onPerfEntry);
    getFID(onPerfEntry);
    getLCP(onPerfEntry);
  }
};

export default reportWebVitals;
