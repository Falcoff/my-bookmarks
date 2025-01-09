const URL_SEARCH = "http://noembed.com/embed?url=";

export const getNoEmbed = async (url: string): Promise<Response> => {
  return fetch(URL_SEARCH + encodeURIComponent(url), {
    method: "get",
    // headers: { Accept: "application/json, text/javascript, */*; q=0.01" },
  });
};
