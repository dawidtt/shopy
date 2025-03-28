import React from "react";
import { render, screen } from "@testing-library/react";
import MainButton from "./MainButton";
import { describe, it, expect } from "vitest";

describe("MainButton", () => {
  it("renders empty button", () => {
    render(<MainButton text={""} />);
    expect(screen.getByRole("button"));
  });
  it("renders button with text", () => {
    render(<MainButton text={"text"} />);
    expect(screen.getByRole("button", { name: /text/i }));
  });
});
