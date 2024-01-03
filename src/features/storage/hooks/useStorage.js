// usehooks
import { useLocalStorage } from "@uidotdev/usehooks";

// Ours - Storage
import { serializeStorageKey } from "../utils";

/**
 * Use this session's storage with the given key.
 *
 * @param {StorageKey} storageKey
 * @param {Object} defaultState
 */
const useStorage = (storageKey, defaultState) => {
  const key = serializeStorageKey(storageKey);

  return useLocalStorage(key, defaultState);
};

export default useStorage;
