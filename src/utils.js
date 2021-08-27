export const fetchBin = async (method, options) => {
    const getLatest = method === 'GET' ? '/latest' : '';
    const responseJson = await fetch(
        `https://api.jsonbin.io/b/<YOUR_BIN>${getLatest}`,
        {
          method,
          headers: {
            "secret-key":
              "<SECRET_KEY>",
            "Content-Type": "application/json",
          },
          ...options
        }
      );
      const response = await responseJson.json();

      return response;
}

export const saveNodesData = async (newTree) => {
  const response = await fetchBin('PUT', {body: JSON.stringify(newTree)});
  return response;
};

export const getNodesData = async () => {
    return await fetchBin('GET');
}


