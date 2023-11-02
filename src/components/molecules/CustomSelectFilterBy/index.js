import classNames from 'classnames';
import PropTypes from 'prop-types';
import { MenuItem, ListItemIcon, InputAdornment } from '@material-ui/core';
import { SelectFilterBy } from '@corva/ui/components/';
import { typography } from '@corva/ui/styles';

export default function CustomSelectFilterBy({ label, onChange, options, types, value }) {
  const renderValue = () => {
    return (
      <span className={classNames(typography.regular16, typography.colors.t1)}>
        {types[value].LABEL}
      </span>
    );
  };

  const renderStartAdornment = () => {
    const IconComponent = types[value].ICON;
    return (
      <InputAdornment position="start">
        <IconComponent />
      </InputAdornment>
    );
  };

  const renderOptions = () => {
    return options.map(({ value, label, IconComponent }) => (
      <MenuItem key={value} value={value}>
        <ListItemIcon>
          <IconComponent />
        </ListItemIcon>
        {label}
      </MenuItem>
    ));
  };

  return (
    <SelectFilterBy
      label={label}
      onChange={onChange}
      renderValue={renderValue}
      startAdornment={renderStartAdornment()}
      value={value}
    >
      {renderOptions()}
    </SelectFilterBy>
  );
}

CustomSelectFilterBy.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
      IconComponent: PropTypes.elementType.isRequired,
    })
  ).isRequired,
  types: PropTypes.objectOf(
    PropTypes.shape({
      ID: PropTypes.string.isRequired,
      LABEL: PropTypes.string.isRequired,
      ICON: PropTypes.elementType.isRequired,
    })
  ).isRequired,

  value: PropTypes.string.isRequired,
};
