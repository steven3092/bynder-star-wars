export async function fetchStarWarsCharacter(id: string | undefined) {
  const response = await fetch(`https://swapi.dev/api/people/${id}`);
  const data = await response.json();

  const character = data;

  return character;
}
