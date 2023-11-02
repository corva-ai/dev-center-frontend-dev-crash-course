import { socketClient } from '@corva/ui/clients';
import { API } from '../constants/api';

export function createSubscription(asset_id, updateData) {
  const subscription = {
    assetId: asset_id,
    dataset: API.WITS_DATASET,
    provider: API.PROVIDER,
  };

  const onDataReceive = event => {
    const entries = event.data;
    updateData(entries);
  };

  return socketClient.subscribe(subscription, { onDataReceive });
}
