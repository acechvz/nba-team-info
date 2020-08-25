import { API_PLAYER_IMAGE, API_PLAYER_STATS } from "../constants";

const textWithoutDots = (text) =>
  Array.from(text)
    .filter((c) => c !== ".")
    .join("");

export const getPlayerImageUrl = (name, lastName) => {
  const nameCleaned = textWithoutDots(name);
  const lastNameCleaned = textWithoutDots(lastName);
  return `${API_PLAYER_IMAGE}${lastNameCleaned}/${nameCleaned}`;
};

export const getIntegerFromMinutes = (value) =>
  parseInt(String(value).replace(":", "."));
