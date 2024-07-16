import { screen, render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Blogs from "./Blogs";

describe("it should render a heading one", () => {
    it("should render a heading one", () => {
        render(<Blogs />)
        const heading = screen.getByRole("heading", { name: /Blog/i })
        expect(heading).toBeInTheDocument()
    })
    it("should render a heading two", () => {
        render(<Blogs />)
        // screen.logTestingPlaygroundURL();
        const heading = screen.getByRole('heading', { name: /ui interactions of the week/i })
        expect(heading).toBeInTheDocument()
    })
})