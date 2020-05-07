import { queryLimit } from "@utils/constants";

// utilites for store
export const applyScope = (scope, types) =>
  Object.fromEntries(types.map((type) => [type, `${scope}/${type}`]));

// map util for selector
export function createMap(data) {
  console.log(createMap.name, "\ndata: ", data);
  const parsed = {};
  data.forEach((row) => {
    parsed[row.id] = row;
  });
  return parsed;
}

export function buildUserInfo(data) {
  console.log(buildUserInfo.name, "\ndata: ", data);
  const res = {
    name: data.name || "",
    email: "__NA__",
  };
  return res;
}

export function formatPagination(res) {
  return {
    total: res.total || null,
    limit: res.limit || queryLimit,
    page: res.page || 1,
    pages: res.pages || null,
  };
}
