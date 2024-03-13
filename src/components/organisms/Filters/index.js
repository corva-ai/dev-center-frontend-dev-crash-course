import Select from '../../molecules/CustomSelect';
import { useStyles } from './styles';

export default function Filters({ onChange, options, value }) {
  const classes = useStyles();

  // As you can see if you look into the code of this Select component, it's expecting a lot of props, but we can just sent the ones we need to it.
  // Consider making your own components based on COrva components to apply extra layers of functionality and/or styling.
  return (
    <div className={classes.container}>
      <Select options={options} onChange={onChange} value={value} />
    </div>
  );
}
