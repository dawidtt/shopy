import React from "react";
import { render, screen } from "@testing-library/react";
import Advantage from "./Advantage";
import { describe, it, expect } from "vitest";

describe("Advantege", () => {
  it("generates proper text", () => {
    render(<Advantage />);
  });
});
