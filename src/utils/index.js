export const prepareHighchartData = witsData => {
  return witsData.map(record => {
    const timestamp = record.timestamp * 1000; // Convert to milliseconds
    const hookLoad = record.data.hook_load;
    return [timestamp, hookLoad];
  });
};
