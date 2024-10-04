import { render, screen } from "@testing-library/react";
import { CharactersList } from "./characters-list";
import { CharactersDTO } from "../../interfaces/characters.dto";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

const mockCharacters: CharactersDTO[] = [
  {
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
  },
  {
    name: "C-3PO",
    height: "167",
    mass: "75",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a",
    homeworld: "",
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    created: "",
    edited: "",
    url: "",
  },
];

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

describe("Character List component", () => {
  it("should render a list of characters", () => {
    customRender(<CharactersList characters={mockCharacters} />);

    expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument();
  });
});
