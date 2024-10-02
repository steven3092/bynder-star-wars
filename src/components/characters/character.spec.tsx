// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
// import { MemoryRouter } from "react-router-dom";
import { Character } from "./characters";

// const customRender = (children: React.ReactElement) => {
//   const testQueryClient = new QueryClient({
//     defaultOptions: {
//       queries: {
//         retry: false,
//       },
//     },
//   });

//   return render(
//     <QueryClientProvider client={testQueryClient}>
//       <MemoryRouter>{children}</MemoryRouter>
//     </QueryClientProvider>
//   );
// };

describe("Character", () => {
  it("should render a character", () => {
    render(<Character>'Lorem ipsum'</Character>);

    const characterName = screen.getByText(/Lorem ipsum/i);
    expect(characterName).toBeInTheDocument();
  });
});
