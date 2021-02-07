const { TARGET_URI, PORT } = process.env;

export const getFetch = (path, params = {}) => {
  const qs = Object.entries(params)
    .map(([k, v]) => `${k}=${v}`)
    .join("&");
  return fetch(new URL(path + (qs ? "?" + qs : ""), `${TARGET_URI}:${PORT}`))
    .then((res) => res.json())
    .catch((err) => console.error("getFetch"));
};
