import { render, screen } from "@testing-library/react";
import { describe, it, expect, vitest } from "vitest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { Character } from "./character";
import { CharactersDTO } from "../../interfaces/characters.dto";
import { PlanetDTO } from "../../interfaces/planet.dto";

const mockCharacter: CharactersDTO = {
  name: "Luke Skywalker",
  height: "172",
  mass: "77",
  hair_color: "blond",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "19BBY",
  gender: "male",
  homeworld: "",
  films: [],
  species: [],
  vehicles: [],
  starships: [],
  created: "",
  edited: "",
  url: "",
};
const mockIsError = vitest.fn().mockReturnValue(false);
const mockIsLoading = vitest.fn().mockReturnValue(false);

const mockPlanet: PlanetDTO = {
  climate: "arid",
  created: "",
  diameter: "10465",
  edited: "",
  films: [],
  gravity: "1 standard",
  orbital_period: "304",
  population: "2000",
  rotation_period: "12",
  surface_water: "1",
  terrain: "desert",
  url: "",
  name: "Tatooine",
  residents: ["Luke Skywalker", "Anakin Skywalker"],
};

vitest.mock("../../hooks/use-get-star-wars-character", () => ({
  useGetStarWarsCharacter: () => ({
    isError: mockIsError(),
    isLoading: mockIsLoading(),
    character: mockCharacter,
  }),
}));

vitest.mock("../../hooks/use-get-star-wars-planet", () => ({
  useGetStarWarsPlanet: () => ({
    isError: mockIsError(),
    isLoading: mockIsLoading(),
    planet: mockPlanet,
  }),
}));

const customRender = (children: React.ReactNode) => {
  const testQueryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  const routes = [
    {
      path: "/",
      element: children,
    },
  ];

  const router = createMemoryRouter(routes);

  return render(
    <QueryClientProvider client={testQueryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

describe("Generic Character component", () => {
  it("renders the character information", () => {
    customRender(<Character />);

    expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument();
  });

  it("renders the planet information", () => {
    customRender(<Character />);

    expect(screen.getByText(/Tatooine/i)).toBeInTheDocument();
  });
});
