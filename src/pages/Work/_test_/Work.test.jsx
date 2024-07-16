/* eslint-disable no-unused-vars */
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Work from "../Work";

describe("Work ", () => {
  it("renders all titles  correctly", () => {
    render(<Work />);
    expect(screen.getByText("Work")).toBeInTheDocument();
    const cardTitles = [
      "Designing Dashboards",
      "Vibrant Portraits Of 2020",
      "36 Days of Malayalam type",
      "Components",
    ];
    cardTitles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it("renders all paragraph years correctly", () => {
    render(<Work />);
    expect(screen.getByText("Work")).toBeInTheDocument();
    const cardYear = ["2020", "2018", "2018", "2018"];
    cardYear.forEach((year) => {
      const yearElements = screen.getAllByText(year);
    });
  });
  it("renders all paragraph names correctly", () => {
    render(<Work />);
    expect(screen.getByText("Work")).toBeInTheDocument();
    const names = [
      "Dashboard",
      "ilustration",
      "Typography",
      "Components,Design",
    ];
    names.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });
  it("renders all paragraph texts", () => {
    render(<Work />);
    expect(screen.getByText("Work")).toBeInTheDocument();
    const texts = [
      "Eirmod sanctus gubergren consetetur dolor sit. Dolore vero sed diam ea. Diam at dolor sed dolor. Ipsum nonumy aliquyam accusam.",
      "Erat eos et voluptua eos eirmod tempor. No consetetur sit tempor consetetur eos takimata. Labore sit elitr tempor magna ut.",
      "Ea sed diam diam elitr no elitr et eirmod. Labore elitr clita justo et duo, sanctus sit lorem dolore duo.",
      "Consetetur lorem ipsum consetetur invidunt sed et. Et vero eirmod duo aliquyam accusam rebum. Est duo eirmod dolores lorem et.",
    ];

    texts.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });
});
