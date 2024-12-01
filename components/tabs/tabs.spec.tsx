import React from "react";
import { beforeAll, describe, test } from "vitest";
import userEvent from "@testing-library/user-event";
import * as Tabs from "./tabs";
import { render, screen, waitFor } from "@testing-library/react";
import { Archive, MinusCircle, SendDiagonal } from "iconoir-react";
import { setTimeout } from "timers/promises";

describe("@tabs", () => {
  beforeAll(() => userEvent.setup());

  test("displays an indicator that tracks the active tab", async ({
    expect,
  }) => {
    render(
      <Tabs.Root defaultValue="pending" width="full">
        <Tabs.List>
          <Tabs.Trigger value="sent" style={{ width: "48px", height: "48px" }}>
            <SendDiagonal />
            Sent
          </Tabs.Trigger>
          <Tabs.Trigger
            value="pending"
            data-testid="newsletters-pending"
            style={{ width: "48px", height: "48px" }}
          >
            <MinusCircle />
            Pending Newsletters
          </Tabs.Trigger>
          <Tabs.Trigger
            value="archived"
            style={{ width: "48px", height: "48px" }}
          >
            <Archive />
            Archived
          </Tabs.Trigger>

          <Tabs.Indicator data-testid="tabs-indicator" />
        </Tabs.List>

        <Tabs.Content value="pending">
          These newsletters are pending
        </Tabs.Content>
        <Tabs.Content value="sent">
          These newsletters were already sent
        </Tabs.Content>
        <Tabs.Content value="archived">Archived newsletters</Tabs.Content>
      </Tabs.Root>,
    );
    const pendingTab = () =>
      screen.getByRole("tab", { name: /Pending Newsletters/ });

    await userEvent.click(pendingTab());

    const pending = pendingTab();

    expect(pending.getAttribute("aria-selected")).toBe("true");
  });
});
