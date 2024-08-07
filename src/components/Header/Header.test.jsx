import { render, screen } from "@testing-library/react";
import { describe, it, expect } from 'vitest'
import Header from "./Header";

describe('Header', () => {
    it('should render the header', () => {
        render(< Header />)
        screen.logTestingPlaygroundURL();
        // const header = screen.getByTestId(/header/i)
        const header = screen.getByRole("banner")
        expect(header).toBeInTheDocument()
    })
})