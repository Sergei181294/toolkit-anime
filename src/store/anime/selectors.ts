import { RootStore } from "..";
import { State } from "./slice";

export const getAnime = (store: RootStore): State["items"] => store.anime.items;

export const getParams = (store: RootStore): State["params"] => store.anime.params;