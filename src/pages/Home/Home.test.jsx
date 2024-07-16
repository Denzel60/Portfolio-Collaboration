import { screen, render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "./Home";

describe("it should display the home", () => {
    it("should display the dashboard paragraph", () => {
        render(<Home />)
        // screen.logTestingPlaygroundURL();
        const dashboard = screen.getByText(/dashboard/i)
        expect(dashboard).toBeInTheDocument()
    })
    it("should display the illustrations paragraph", () => {
        render(<Home />)
        const illustrations = screen.getByText(/illustrations/i)
        expect(illustrations).toBeInTheDocument()
    })
    it("should display the topography paragraph", () => {
        render(<Home />)
        const topography = screen.getByText(/topography/i)
        expect(topography).toBeInTheDocument()
    })
    it("renders a heading element", () => {
        render(<Home />);
        const heading = screen.getByRole("heading", { name: "hi i am john," });
        expect(heading).toBeInTheDocument();
    });
    // it("renders an image",()=>{
    //     render(<Home/>);
    //     const profimg = screen.getAllByAltText('');
    //     expect(profimg).toHaveAttribute('src');
    //      });

    it("renders a button", () => {
        render(<Home />);
        const downloadButton = screen.getByText(/download resume/i);
        expect(downloadButton).toBeInTheDocument();

    });

    it("renders recent post", () => {
        render(<Home />);
        expect(screen.getByText(/making adesign system from scratch/i)).toBeInTheDocument();
        expect(screen.getByText(/creating pixel perfect icons in figma/i)).toBeInTheDocument();
    });

    it("renders the featured post images", () => {
        render(<Home />);
        const dashboardImage = screen.getAllByAltText('')[1];
        expect(dashboardImage).toHaveAttribute('src');

        const illustrationsImage = screen.getAllByAltText('')[2];
        expect(illustrationsImage).toHaveAttribute('src');
    })
})