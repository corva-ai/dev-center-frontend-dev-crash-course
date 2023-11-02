// hooks/useWitsData.js
import { useState, useEffect } from 'react';
import { fetchWitsData } from '../api';
import { createSubscription } from '../api/subscription';

const useWitsData = ({ assetId, companyId, stateOptionSelected }) => {
  const [witsData, setWitsData] = useState([]);

  const [loading, setLoading] = useState(false);

  const updateData = newData => {
    setWitsData(prevData => {
      if (prevData.length > 0) {
        const tempPrevData = [...prevData];
        tempPrevData.splice(0, newData.length);
        return tempPrevData.concat(newData);
      }
      return [];
    });
  };

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      let response = [];
      const query = {
        asset_id: assetId,
        'data.state': stateOptionSelected, // Our filter applied in the query
      };

      try {
        response = await fetchWitsData({ query });
        setWitsData(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getData();

    const unsubscribe = createSubscription(assetId, updateData);

    return () => unsubscribe();
  }, [assetId, companyId, stateOptionSelected]);

  return { loading, witsData };
};

export default useWitsData;
