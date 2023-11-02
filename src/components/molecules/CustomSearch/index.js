import { Search } from '@corva/ui/components';

export default function CustomSearch({
  disabled,
  disabledLastSelectedOption,
  isLoading,
  label,
  multiple,
  onChange,
  options,
  placeholder,
  value,
}) {
  return (
    <Search
      AutocompleteProps={{
        forcePopupIcon: true,
        getOptionDisabled: disabledLastSelectedOption
          ? option => {
              if (value.length !== 1) return false;
              return option?.id === value[0].id;
            }
          : undefined,
      }}
      disabled={disabled}
      loading={isLoading}
      multiple={multiple}
      onChange={onChange}
      options={options}
      placeholder={placeholder}
      TextFieldProps={{ label }}
      value={value}
    />
  );
}
