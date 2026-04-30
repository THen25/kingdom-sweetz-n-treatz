import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import Navbar from "../Navbar";

const renderNavbar = () =>
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

describe("Navbar", () => {
  it("renders the brand name", () => {
    renderNavbar();
    expect(screen.getByText(/Kingdom Sweetz/i)).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    renderNavbar();
    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /menu/i })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /order & contact/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /gallery/i })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /specials/i })
    ).toBeInTheDocument();
  });

  it("toggles mobile menu open and closed", async () => {
    const user = userEvent.setup();
    renderNavbar();
    const hamburger = screen.getByRole("button", {
      name: /open navigation menu/i,
    });
    const navLinks = document.querySelector(".navbar-links");

    expect(navLinks).not.toHaveClass("open");
    await user.click(hamburger);
    expect(navLinks).toHaveClass("open");
    await user.click(hamburger);
    expect(navLinks).not.toHaveClass("open");
  });
});
