import type { Meta, StoryFn } from "@storybook/react";
import * as React from "react";
import * as DashboardLayout from "./dashboard-layout";
import * as UserDropdown from "../user-dropdown/user-dropdown";
import { LetterAvatar } from "../letter-avatar/letter-avatar";
import * as CommandSearch from "../command-search/command-search";
import {
  User,
  Settings,
  LogOut,
  BookStack,
  HomeAltSlimHoriz,
  SwipeLeftGesture,
  SecureWindow,
  Plus,
} from "iconoir-react";

import "./dashboard-layout.css";
import "../user-dropdown/user-dropdown.css";
import "../letter-avatar/letter-avatar.css";
import "../command-search/command-search.css";
import "../text-field/text-field.css";

const meta: Meta<typeof DashboardLayout> = {
  title: "Components/DashboardLayout",
};

type DashboardLayoutStoryFn = StoryFn<typeof DashboardLayout>;

export const Default: DashboardLayoutStoryFn = () => {
  const [selectedItem, setSelectedItem] = React.useState("acme");

  return (
    <>
      <DashboardLayout.Root>
        <DashboardLayout.SidebarDropdown>
          <UserDropdown.Root>
            <UserDropdown.Trigger>
              <LetterAvatar size="small" color="info">
                Acme Corp
              </LetterAvatar>
              <span>Acme Corp</span>
            </UserDropdown.Trigger>
            <UserDropdown.Content align="start">
              <UserDropdown.Item
                selected={selectedItem === "acme"}
                onClick={() => setSelectedItem("acme")}
              >
                <LetterAvatar size="small" color="info">
                  Acme Corp
                </LetterAvatar>
                Acme Corp
              </UserDropdown.Item>
              <UserDropdown.Item
                selected={selectedItem === "techstart"}
                onClick={() => setSelectedItem("techstart")}
              >
                <LetterAvatar size="small" color="positive">
                  TechStart
                </LetterAvatar>
                TechStart
              </UserDropdown.Item>
              <UserDropdown.Item
                selected={selectedItem === "designco"}
                onClick={() => setSelectedItem("designco")}
              >
                <LetterAvatar size="small" color="notice">
                  DesignCo
                </LetterAvatar>
                DesignCo
              </UserDropdown.Item>
              <UserDropdown.Item
                selected={selectedItem === "devstudio"}
                onClick={() => setSelectedItem("devstudio")}
              >
                <LetterAvatar size="small" color="highlight">
                  DevStudio
                </LetterAvatar>
                DevStudio
              </UserDropdown.Item>
              <UserDropdown.Divider />
              <UserDropdown.Item
                selected={selectedItem === "profile"}
                onClick={() => setSelectedItem("profile")}
              >
                <User />
                Profile
              </UserDropdown.Item>
              <UserDropdown.Item
                selected={selectedItem === "settings"}
                onClick={() => setSelectedItem("settings")}
              >
                <Settings />
                Settings
              </UserDropdown.Item>
              <UserDropdown.Divider />
              <UserDropdown.Item onClick={() => console.log("Logout clicked")}>
                <LogOut />
                Logout
              </UserDropdown.Item>
            </UserDropdown.Content>
          </UserDropdown.Root>
          <CommandSearch.Root>
            <CommandSearch.Trigger placeholder="Search" />
            <CommandSearch.Content>
              <CommandSearch.Input placeholder="Search..." />
              <CommandSearch.List>
                <CommandSearch.Empty>No results found.</CommandSearch.Empty>
                <CommandSearch.Group heading="Pages">
                  <CommandSearch.Item>
                    <BookStack />
                    Getting started
                  </CommandSearch.Item>
                  <CommandSearch.Item>
                    <HomeAltSlimHoriz />
                    Dashboard
                  </CommandSearch.Item>
                  <CommandSearch.Item>
                    <User />
                    Engage
                  </CommandSearch.Item>
                  <CommandSearch.Item>
                    <SwipeLeftGesture />
                    Send
                  </CommandSearch.Item>
                  <CommandSearch.Item>
                    <SecureWindow />
                    Settings
                  </CommandSearch.Item>
                </CommandSearch.Group>
                <CommandSearch.Group heading="Actions">
                  <CommandSearch.Item>
                    <Plus />
                    Add broadcast
                  </CommandSearch.Item>
                  <CommandSearch.Item>
                    <Plus />
                    Add contact
                  </CommandSearch.Item>
                  <CommandSearch.Item>
                    <Plus />
                    Add segment
                  </CommandSearch.Item>
                </CommandSearch.Group>
              </CommandSearch.List>
              <CommandSearch.Footer />
            </CommandSearch.Content>
          </CommandSearch.Root>
          <DashboardLayout.SidebarGroup title="Navigation">
            <DashboardLayout.SidebarItem active>
              <HomeAltSlimHoriz />
              Dashboard
            </DashboardLayout.SidebarItem>
            <DashboardLayout.SidebarItem>
              <User />
              Engage
            </DashboardLayout.SidebarItem>
            <DashboardLayout.SidebarItem>
              <SwipeLeftGesture />
              Send
            </DashboardLayout.SidebarItem>
            <DashboardLayout.SidebarItem>
              <SecureWindow />
              Settings
            </DashboardLayout.SidebarItem>
          </DashboardLayout.SidebarGroup>
          <DashboardLayout.SidebarGroup title="Quick Actions">
            <DashboardLayout.SidebarItem>
              <Plus />
              New Broadcast
            </DashboardLayout.SidebarItem>
            <DashboardLayout.SidebarItem>
              <Plus />
              Add Contact
            </DashboardLayout.SidebarItem>
          </DashboardLayout.SidebarGroup>
          <DashboardLayout.SidebarFooter>
            <DashboardLayout.FooterNotes>
              <DashboardLayout.FooterNotesLinkGroup>
                <DashboardLayout.FooterNotesLink>Privacy</DashboardLayout.FooterNotesLink>
                <DashboardLayout.FooterNotesLink>Terms</DashboardLayout.FooterNotesLink>
                <DashboardLayout.FooterNotesLink>Help Center</DashboardLayout.FooterNotesLink>
              </DashboardLayout.FooterNotesLinkGroup>
            </DashboardLayout.FooterNotes>
          </DashboardLayout.SidebarFooter>
        </DashboardLayout.SidebarDropdown>
        <DashboardLayout.Sidebar>
          <UserDropdown.Root>
            <UserDropdown.Trigger>
              <LetterAvatar size="small" color="info">
                Acme Corp
              </LetterAvatar>
              <span>Acme Corp</span>
            </UserDropdown.Trigger>
            <UserDropdown.Content align="start">
              <UserDropdown.Item
                selected={selectedItem === "acme"}
                onClick={() => setSelectedItem("acme")}
              >
                <LetterAvatar size="small" color="info">
                  Acme Corp
                </LetterAvatar>
                Acme Corp
              </UserDropdown.Item>
              <UserDropdown.Item
                selected={selectedItem === "techstart"}
                onClick={() => setSelectedItem("techstart")}
              >
                <LetterAvatar size="small" color="positive">
                  TechStart
                </LetterAvatar>
                TechStart
              </UserDropdown.Item>
              <UserDropdown.Item
                selected={selectedItem === "designco"}
                onClick={() => setSelectedItem("designco")}
              >
                <LetterAvatar size="small" color="notice">
                  DesignCo
                </LetterAvatar>
                DesignCo
              </UserDropdown.Item>
              <UserDropdown.Item
                selected={selectedItem === "devstudio"}
                onClick={() => setSelectedItem("devstudio")}
              >
                <LetterAvatar size="small" color="highlight">
                  DevStudio
                </LetterAvatar>
                DevStudio
              </UserDropdown.Item>
              <UserDropdown.Divider />
              <UserDropdown.Item
                selected={selectedItem === "profile"}
                onClick={() => setSelectedItem("profile")}
              >
                <User />
                Profile
              </UserDropdown.Item>
              <UserDropdown.Item
                selected={selectedItem === "settings"}
                onClick={() => setSelectedItem("settings")}
              >
                <Settings />
                Settings
              </UserDropdown.Item>
              <UserDropdown.Divider />
              <UserDropdown.Item onClick={() => console.log("Logout clicked")}>
                <LogOut />
                Logout
              </UserDropdown.Item>
            </UserDropdown.Content>
          </UserDropdown.Root>
          <CommandSearch.Root>
            <CommandSearch.Trigger placeholder="Search" />
            <CommandSearch.Content>
              <CommandSearch.Input placeholder="Search..." />
              <CommandSearch.List>
                <CommandSearch.Empty>No results found.</CommandSearch.Empty>
                <CommandSearch.Group heading="Pages">
                  <CommandSearch.Item>
                    <BookStack />
                    Getting started
                  </CommandSearch.Item>
                  <CommandSearch.Item>
                    <HomeAltSlimHoriz />
                    Dashboard
                  </CommandSearch.Item>
                  <CommandSearch.Item>
                    <User />
                    Engage
                  </CommandSearch.Item>
                  <CommandSearch.Item>
                    <SwipeLeftGesture />
                    Send
                  </CommandSearch.Item>
                  <CommandSearch.Item>
                    <SecureWindow />
                    Settings
                  </CommandSearch.Item>
                </CommandSearch.Group>
                <CommandSearch.Group heading="Actions">
                  <CommandSearch.Item>
                    <Plus />
                    Add broadcast
                  </CommandSearch.Item>
                  <CommandSearch.Item>
                    <Plus />
                    Add contact
                  </CommandSearch.Item>
                  <CommandSearch.Item>
                    <Plus />
                    Add segment
                  </CommandSearch.Item>
                </CommandSearch.Group>
              </CommandSearch.List>
              <CommandSearch.Footer />
            </CommandSearch.Content>
          </CommandSearch.Root>
          <DashboardLayout.SidebarGroup title="Navigation">
            <DashboardLayout.SidebarItem active>
              <HomeAltSlimHoriz />
              Dashboard
            </DashboardLayout.SidebarItem>
            <DashboardLayout.SidebarItem>
              <User />
              Engage
            </DashboardLayout.SidebarItem>
            <DashboardLayout.SidebarItem>
              <SwipeLeftGesture />
              Send
            </DashboardLayout.SidebarItem>
            <DashboardLayout.SidebarItem>
              <SecureWindow />
              Settings
            </DashboardLayout.SidebarItem>
          </DashboardLayout.SidebarGroup>
          <DashboardLayout.SidebarGroup title="Quick Actions">
            <DashboardLayout.SidebarItem>
              <Plus />
              New Broadcast
            </DashboardLayout.SidebarItem>
            <DashboardLayout.SidebarItem>
              <Plus />
              Add Contact
            </DashboardLayout.SidebarItem>
          </DashboardLayout.SidebarGroup>
          <DashboardLayout.SidebarFooter>
            <DashboardLayout.FooterNotes>
              <DashboardLayout.FooterNotesLinkGroup>
                <DashboardLayout.FooterNotesLink>Privacy</DashboardLayout.FooterNotesLink>
                <DashboardLayout.FooterNotesLink>Terms</DashboardLayout.FooterNotesLink>
                <DashboardLayout.FooterNotesLink>Help Center</DashboardLayout.FooterNotesLink>
              </DashboardLayout.FooterNotesLinkGroup>
            </DashboardLayout.FooterNotes>
          </DashboardLayout.SidebarFooter>
        </DashboardLayout.Sidebar>
        <DashboardLayout.ContentShell />
      </DashboardLayout.Root>
    </>
  );
};

export default meta;
