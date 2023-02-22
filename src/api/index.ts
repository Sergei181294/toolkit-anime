// import { Anime } from "../types";
// export const getAnime = (): Promise<Anime[]> =>
//   fetch("https://api.jikan.moe/v4/anime")
//     .then((r) => r.json())
//     .then((r) => r.data);

import { Anime } from "../types";

const BASE_URL = "https://api.jikan.moe";

const fetchAnime = (url: string, params: Record<string, string | number> = {}) => {
       const searchParams = new URLSearchParams({ ...params } as Record<string, string>);

       const fullUrl = new URL(url, BASE_URL);
       fullUrl.search = searchParams.toString();

       return fetch(fullUrl)
       .then((response) => response.json())
       .then((animes) => animes.data)
       
};

export const getAnime = (params?: { page?: number, limit?: number}): Promise<Anime[]> => fetchAnime("/v4/anime", params);