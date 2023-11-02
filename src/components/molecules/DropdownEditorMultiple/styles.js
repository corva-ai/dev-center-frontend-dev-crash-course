import { makeStyles } from '@material-ui/core';

import ToggleCheckbox from './assets/check_box_24px.svg';

export const useStyles = makeStyles(({ palette }) => ({
  formControl: {
    margin: '0',
    maxWidth: '100%',
    width: '100%',
  },
  icon: {
    color: `${palette.primary.text6}`,
  },
  root: {
    '& > svg': {
      color: `${palette.primary.text6}`,
    },
    '& .MuiSelect-icon': {
      color: `${palette.primary.text6}`,
    },
    // Target the SVG inside the select element
    '& .MuiSelect-root svg': {
      color: `${palette.primary.text6}`,
    },
  },
  selectMenu: {
    '& ul': {
      paddingBottom: 0,
      paddingTop: 0,
    },
    '& ul > li:first-child': {
      boxShadow: 'inset 0px -1px 0px rgba(255, 255, 255, 0.25)',
    },
    '& ul > li:first-child:not([aria-selected="true"]) span[class="MuiIconButton-label"]': {
      backgroundImage: `url("${ToggleCheckbox}")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'auto',
      backgroundPosition: 'center center',
    },
    '& ul > li:first-child:not([aria-selected="true"]) span[class="MuiIconButton-label"] > svg': {
      opacity: 0,
    },
  },
}));
