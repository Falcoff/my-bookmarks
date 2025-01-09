const URL_SEARCH = "http://noembed.com/embed?url=";

export const getNoEmbed = async (url: string): Promise<Response> => {
  return fetch(URL_SEARCH + encodeURIComponent(url), {
    method: "get",
  });
};
