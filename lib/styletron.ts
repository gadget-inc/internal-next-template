import { Client, Server } from "styletron-engine-atomic";

const getHydrateElement = () => document.getElementsByClassName("_styletron_hydrate_") as any;

export const styletron =
  typeof window === "undefined"
    ? new Server()
    : new Client({
        hydrate: getHydrateElement(),
      });
