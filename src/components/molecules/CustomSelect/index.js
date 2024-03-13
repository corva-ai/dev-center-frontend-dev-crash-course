import PropTypes from 'prop-types';
import { MenuItem } from '@material-ui/core';
import { Select } from '@corva/ui/components';
export default function CustomSelect({
  FormControlProps,
  formHelperText,
  label,
  onChange,
  options,
  style,
  value,
}) {
  return (
    <Select
      label={label}
      value={value}
      style={style}
      onChange={onChange}
      formHelperText={formHelperText}
      FormControlProps={FormControlProps}
    >
      {options.map(({ label, value }) => (
        <MenuItem key={value} value={value}>
          {label}
        </MenuItem>
      ))}
    </Select>
  );
}

CustomSelect.propTypes = {
  FormControlProps: PropTypes.object,
  formHelperText: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  style: PropTypes.object,
  value: PropTypes.string.isRequired,
};

CustomSelect.defaultProps = {
  FormControlProps: {},
  formHelperText: '',
  style: {},
};
