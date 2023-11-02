export const generateSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S,
) => {
  const store = _store as App.WithSelectors<typeof _store>;
  store.use = {};
  for (const k of Object.keys(store.getState())) {
    (store.use as App.Any)[k] = () => store((s) => s[k as keyof typeof s]);
  }

  return store;
};

const storeResetFns = new Set<() => void>();

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export const createStore = (<T extends unknown>(
  f: StateCreator<T> | undefined,
) => {
  if (f === undefined) return create;
  const store = create(f);
  const initialState = store.getState();
  storeResetFns.add(() => {
    store.setState(initialState, true);
  });
  return store;
}) as typeof create;

export const resetAllStores = () => {
  storeResetFns.forEach((resetFn) => {
    resetFn();
  });
};
