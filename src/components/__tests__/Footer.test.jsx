import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import Footer from "../Footer";

const renderFooter = () =>
  render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );

describe("Footer", () => {
  it("renders the brand name and tagline", () => {
    renderFooter();
    expect(screen.getByRole("heading", { name: /Kingdom Sweetz/i })).toBeInTheDocument();
    expect(
      screen.getByText(/faith inspires every recipe/i)
    ).toBeInTheDocument();
  });

  it("renders all quick links", () => {
    renderFooter();
    const links = screen.getAllByRole("link");
    const hrefs = links.map((l) => l.getAttribute("href"));
    expect(hrefs).toContain("/");
    expect(hrefs).toContain("/menu");
    expect(hrefs).toContain("/contact");
    expect(hrefs).toContain("/gallery");
    expect(hrefs).toContain("/specials");
  });

  it("renders Instagram link with safe rel attribute", () => {
    renderFooter();
    const instagram = screen.getByRole("link", { name: /instagram/i });
    expect(instagram).toHaveAttribute("rel", "noreferrer");
    expect(instagram).toHaveAttribute("target", "_blank");
  });

  it("renders the scripture quote", () => {
    renderFooter();
    expect(screen.getByText(/Psalm 34:8/i)).toBeInTheDocument();
  });

  it("renders the current year in the copyright notice", () => {
    renderFooter();
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });
});
