// hooks/useWitsData.js
import { useState, useEffect } from 'react';
import { fetchWitsData } from '../api';
import { createSubscription } from '../api/subscription';

const useWitsData = ({ assetId, companyId }) => {
  const [witsData, setWitsData] = useState([]);
  const [witsCompanyData, setWitsCompanyData] = useState([]);
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

    getData(assetId);

    const unsubscribe = createSubscription(assetId, updateData);

    return () => unsubscribe();
  }, [assetId]);

  useEffect(() => {
    setLoading(true);
    const getData = async companyId => {
      let response = [];
      const query = {
        asset_id: assetId,
        company_id: companyId,
      };

      try {
        response = await fetchWitsData({ query });
        setWitsCompanyData(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getData(companyId);
  }, [companyId]);

  return { loading, witsData, witsCompanyData };
};

export default useWitsData;
