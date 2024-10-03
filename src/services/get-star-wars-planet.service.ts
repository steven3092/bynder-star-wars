export async function fetchStarWarsPlanet(planetId: string | undefined) {
  const response = await fetch(`https://swapi.dev/api/planets/${planetId}`);
  const data = await response.json();

  const planet = data;

  return planet;
}
