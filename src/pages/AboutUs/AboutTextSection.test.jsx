import React from "react";
import { render, screen } from "@testing-library/react";
import AboutTextSection from "./AboutTextSection";
import { describe, it, expect } from "vitest";

describe("AboutTextSection", () => {
  it("Generates text", () => {
    render(<AboutTextSection heading={"heading"} text={"text"} />);
    expect(screen.getByText("heading").textContent).toMatch(/heading/);
    expect(screen.getByText("text").textContent).toMatch(/text/);
  });
});
