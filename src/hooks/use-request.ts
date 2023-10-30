export const useRequest = <T>(
  queryKey: QueryKey,
  queryFn: () => Promise<T>,
  options: Omit<
    UseQueryOptions<T, unknown, T, QueryKey>,
    'queryKey' | 'queryFn'
  >,
): UseQueryResult<T> => {
  const queryClient = useQueryClient();
  const initialData: T = queryClient.getQueryData(queryKey);
  const queryResult = useQuery<T>(queryKey, () => queryFn(), {
    initialData,
    ...options,
  });
  return queryResult;
};

export const useMultipleRequests = <T extends UseQueryOptions<App.Any>[]>(
  queriesOptions: readonly [...QueriesOptions<T>],
): QueriesResults<T> => {
  const queryClient = useQueryClient();
  forEach(queriesOptions, (queryOptions) => ({
    initialData: queryClient.getQueryData(queryOptions.queryKey),
    ...queryOptions,
  }));
  const queryResult = useQueries<T>({ queries: queriesOptions });
  return queryResult;
};
