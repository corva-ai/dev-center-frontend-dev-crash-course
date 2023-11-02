import { find } from 'lodash';
import PropTypes from 'prop-types';
import { StyledDropdownEditor, TruncatedText } from '@corva/ui/components';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import { useStyles } from './styles';

// Create a new component for the icon.
const DropdownIcon = () => {
  const classes = useStyles();
  return <ArrowDropDownIcon className={classes.icon} />;
};

function DropdownEditorMultiple(props) {
  const classes = useStyles();
  return (
    <StyledDropdownEditor
      {...props}
      IconComponent={DropdownIcon}
      classes={{
        formControl: classes.formControl,
        icon: classes.icon,
        selectMenu: classes.selectMenu,
      }}
      multiple
      renderValue={(selected = []) => {
        let valueText = '';

        if (selected.length === 0) valueText = 'Select an option';
        else if (selected.includes(props.allID)) valueText = `All (${selected.length} wells)`;
        else if (props.renderValueWithLabels) {
          valueText = selected
            .map(optionSelected => {
              return find(props.options, { value: optionSelected })?.label;
            })
            .join(', ');
        } else valueText = selected.join(', ');

        return <TruncatedText>{valueText}</TruncatedText>;
      }}
    />
  );
}

DropdownEditorMultiple.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
  renderValueWithLabels: PropTypes.bool.isRequired,
};

export default DropdownEditorMultiple;
