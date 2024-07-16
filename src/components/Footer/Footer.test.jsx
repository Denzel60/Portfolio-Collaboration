import { screen, render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "./Footer";

describe("Footer", () => {
    it("should render a footer", () => {
        render(<Footer />);
        const footer = screen.getByRole("contentinfo");
        expect(footer).toBeInTheDocument();
    })
    it("should render a paragraph", () => {
        render(<Footer />);
        const copyright = screen.getByText(/copyright @2024 all rights reserved/i)
        expect(copyright).toBeInTheDocument();
    })
})