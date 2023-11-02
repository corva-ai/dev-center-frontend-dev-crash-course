import { AppSettingsPopover } from '@corva/ui/components';

export default function CustomAppSettingsPopover({ children }) {
  return (
    <AppSettingsPopover
      iconSettingsProps={{
        size: 'small',
        tooltipProps: { title: 'Settings' },
      }}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: -8,
        horizontal: 'center',
      }}
    >
      {children}
    </AppSettingsPopover>
  );
}
