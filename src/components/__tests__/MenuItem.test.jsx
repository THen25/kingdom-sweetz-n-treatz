import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import MenuItem from "../MenuItem";

describe("MenuItem", () => {
  it("renders name, description, and price", () => {
    render(
      <MenuItem
        name="Custom Cake"
        description="Made to order with your choice of flavor and design."
        price="Starting at $45"
      />
    );
    expect(screen.getByText("Custom Cake")).toBeInTheDocument();
    expect(
      screen.getByText("Made to order with your choice of flavor and design.")
    ).toBeInTheDocument();
    expect(screen.getByText("Starting at $45")).toBeInTheDocument();
  });

  it("renders without description", () => {
    render(<MenuItem name="Cupcakes" description="" price="$3 each" />);
    expect(screen.getByText("Cupcakes")).toBeInTheDocument();
    expect(screen.getByText("$3 each")).toBeInTheDocument();
  });
});
