import { http, HttpResponse } from "msw";
import { characters } from "./get-star-wars-characters.mock";
import { character } from "./get-star-wars-character.mock";
import { planet } from "./get-star-wars-planet.mock";

export const handlers = [
  http.get("https://swapi.dev/api/people", () => {
    return HttpResponse.json(characters);
  }),
  http.get("https://swapi.dev/api/people/1", () => {
    return HttpResponse.json(character[0]);
  }),
  http.get("https://swapi.dev/api/people/2", () => {
    return HttpResponse.json(character[1]);
  }),
  http.get("https://swapi.dev/api/people/3", () => {
    return HttpResponse.json(character[2]);
  }),
  http.get("https://swapi.dev/api/people/4", () => {
    return HttpResponse.json(character[3]);
  }),
  http.get("https://swapi.dev/api/people/5", () => {
    return HttpResponse.json(character[4]);
  }),
  http.get("https://swapi.dev/api/people/8", () => {
    return HttpResponse.json(character[6]);
  }),
  http.get("https://swapi.dev/api/people/10", () => {
    return HttpResponse.json(character[7]);
  }),
  http.get("https://swapi.dev/api/planets/1", () => {
    return HttpResponse.json(planet[0]);
  }),
  http.get("https://swapi.dev/api/planets/2", () => {
    return HttpResponse.json(planet[1]);
  }),
  http.get("https://swapi.dev/api/planets/3", () => {
    return HttpResponse.json(planet[2]);
  }),
  http.get("https://swapi.dev/api/planets/4", () => {
    return HttpResponse.json(planet[3]);
  }),
  http.get("https://swapi.dev/api/planets/5", () => {
    return HttpResponse.json(planet[4]);
  }),
  http.get("https://swapi.dev/api/planets/6", () => {
    return HttpResponse.json(planet[5]);
  }),
  http.get("https://swapi.dev/api/planets/7", () => {
    return HttpResponse.json(planet[6]);
  }),
  http.get("https://swapi.dev/api/planets/8", () => {
    return HttpResponse.json(planet[7]);
  }),
  http.get("https://swapi.dev/api/planets/9", () => {
    return HttpResponse.json(planet[8]);
  }),
  http.get("https://swapi.dev/api/planets/10", () => {
    return HttpResponse.json(planet[9]);
  }),
];
