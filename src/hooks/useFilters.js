import { useState, useEffect } from 'react';
import { uniqBy } from 'lodash';

import { fetchStateData } from '../api';

export default function useFilters({ companyId, assetId }) {
  const [loading, setLoading] = useState(false);
  const [stateRecords, setStateRecords] = useState([]);
  const [stateOptions, setStateOptions] = useState([]);
  const [stateOptionSelected, setStateOptionSelected] = useState(null);

  //   We fetch new data for the options of the select component when the companyId or assetId (or whatever variable we need to focus on) changes.
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      let response = [];
      const query = {
        asset_id: assetId,
        company_id: companyId,
      };

      try {
        response = await fetchStateData({ query });
        setStateRecords(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [companyId, assetId]);

  //   If new options(data records) for the select component are available, we update the stateOptions variable.
  useEffect(() => {
    const uniqRecords = uniqBy(stateRecords, 'data.state');
    let options = [];
    if (uniqRecords.length)
      options = uniqRecords.map(record => ({
        label: record.data.state,
        value: record.data.state,
      }));
    setStateOptions(options);
  }, [stateRecords]);

  const onStateOptionsChange = event => {
    setStateOptionSelected(event.target.value);
  };

  return { loading, stateOptions, onStateOptionsChange, stateOptionSelected };
}
