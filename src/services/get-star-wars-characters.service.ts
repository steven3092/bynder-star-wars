export async function fetchStarWarsCharacters() {
  const urls = [
    "https://swapi.dev/api/people/",
    "https://swapi.dev/api/people/?page=2",
    "https://swapi.dev/api/people/?page=3",
    "https://swapi.dev/api/people/?page=4",
    "https://swapi.dev/api/people/?page=5",
    "https://swapi.dev/api/people/?page=6",
    "https://swapi.dev/api/people/?page=7",
    "https://swapi.dev/api/people/?page=8",
    "https://swapi.dev/api/people/?page=9",
  ];
  const allCharacters = await Promise.all(
    urls.map(async (url) => {
      const resp = await fetch(url);
      const data = await resp.json();

      const characters = data.results;

      return characters;
    })
  );

  return allCharacters.flat();
}
