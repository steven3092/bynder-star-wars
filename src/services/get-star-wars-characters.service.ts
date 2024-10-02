export async function fetchStarWarsCharacters() {
  const response = await fetch("https://swapi.dev/api/people");
  const data = await response.json();

  const characters = data.results;

  return characters;
}
