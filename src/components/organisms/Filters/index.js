import Select from '../../molecules/CustomSelect';
import { useStyles } from './styles';
import { useFilters } from '../../../hooks/useFilters';

export default function Filters({ data }) {
  const classes = useStyles();
  const { stateOptions, onStateOptionsChange, stateOptionSelected } = useFilters({ data });
  console.log('stateOptions', stateOptions);
  return (
    <div className={classes.container}>
      <Select options={stateOptions} onChange={onStateOptionsChange} value={stateOptionSelected} />
    </div>
  );
}
