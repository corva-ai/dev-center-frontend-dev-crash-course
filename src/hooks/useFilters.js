import { useState, useEffect } from 'react';
import { uniqBy } from 'lodash';

export function useFilters({ data }) {
  const [stateOptions, setStateOptions] = useState([]);
  const [stateOptionSelected, setStateOptionSelected] = useState(null);

  useEffect(() => {
    const uniqRecords = uniqBy(data, 'data.state');
    let options = [];
    if (uniqRecords.length)
      options = uniqRecords.map(record => ({
        label: record.data.state,
        value: record.data.state,
      }));
    setStateOptions(options);
  }, [data]);

  const onStateOptionsChange = event => {
    setStateOptionSelected(event.target.value);
  };

  return { stateOptions, onStateOptionsChange, stateOptionSelected };
}
