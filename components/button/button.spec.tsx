import React from "react";
import { describe, test } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { Button } from "./button";
import { variants } from "./button.props";
import { beforeEach } from "vitest";

describe("@button", () => {
  beforeEach(cleanup);

  test("renders any children passed to it", ({ expect }) => {
    render(<Button>Confirm payment</Button>);

    expect(screen.getByText("Confirm payment")).toBeInTheDocument();
  });

  test("applies the correct variant classes based on the variant prop", ({
    expect,
  }) => {
    for (const variant of variants) {
      const CONTENT = `Confirm payment - ${variant}`;

      render(<Button variant={variant}>{CONTENT}</Button>);

      const buttonClasses = screen.getByText(CONTENT).classList.toString();
      expect(buttonClasses).toContain(`kb-variant-${variant}`);
    }
  });

  test("can change the default rendered html element using the asChild prop", ({
    expect,
  }) => {
    render(
      <Button asChild>
        <a href="https://kibamail.com">View shipment</a>
      </Button>,
    );

    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  test("applies the correct responsive classes based on the size responsive property", ({
    expect,
  }) => {
    render(<Button size={{ xl: "sm", sm: "md" }}>Shipped</Button>);

    const buttonClasses = screen.getByText("Shipped").classList.toString();

    expect(buttonClasses).toEqual(
      "kb-button kb-variant-primary xl:kb-r-size-sm sm:kb-r-size-md kb-r-size-lg",
    );
  });
});
