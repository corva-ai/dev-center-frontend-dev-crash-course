import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  chartButtonsContainer: {
    marginBottom: 16,
    marginRight: 8,
    opacity: 0,
    transition: 'opacity 0.3s',
    '&:hover': {
      opacity: 1, // this is for when hovering directly over buttons
    },
  },
  chartButtonsContainerVisible: {
    // Show buttons when the chart is hovered
    opacity: 1,
  },
}));
