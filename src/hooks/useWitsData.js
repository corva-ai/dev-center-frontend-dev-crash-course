import { useState, useEffect } from 'react';
import { fetchWitsData } from '../api';

const useWitsData = ({ assetId }) => {
  const [witsData, setWitsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getData(assetId);
  }, []);

  const getData = async assetId => {
    let response = [];
    const query = {
      asset_id: assetId,
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

  return { loading, witsData };
};

export default useWitsData;
