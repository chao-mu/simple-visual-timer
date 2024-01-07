// usehooks
import { useLocalStorage } from "@uidotdev/usehooks";

// Ours - Storage
import { serializeStorageKey } from "../utils";

/**
 * Use this session's storage with the given key.
 *
 * @template T - Type of value.
 *
 * @param {StorageKey} storageKey
 * @param {T} initialState
 */
const useStorage = (storageKey, initialState) => {
  const key = serializeStorageKey(storageKey);

  return useLocalStorage(key, initialState);
};

export default useStorage;
