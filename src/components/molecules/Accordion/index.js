import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import classNames from 'classnames';
import { typography } from '@corva/ui/styles';

const useStyles = makeStyles(({ arrowPosition }) => ({
  root: {
    width: '100%',
  },
  expandIcon: {
    order: arrowPosition === 'right' ? 1 : 0,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    paddingLeft: '0.5rem',
    paddingTop: '1rem',
  },
}));

export default function AccordionComponent({
  label,
  size,
  arrowPosition,
  children,
  defaultExpanded = true,
}) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const classes = useStyles({ size, arrowPosition });

  const handleChange = () => {
    setExpanded(prevState => !prevState);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded} onChange={() => handleChange()}>
        <AccordionSummary
          className={classNames(size, arrowPosition)}
          expandIcon={<ExpandMoreIcon />}
        >
          <span className={classNames(typography.bold16)}>{label}</span>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>{children}</AccordionDetails>
      </Accordion>
    </div>
  );
}
