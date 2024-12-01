import React from "react";
import * as BaseTabs from "./tabs-primitive";
import { Archive, CheckCircle, MinusCircle, SendDiagonal } from "iconoir-react";

export const Tabs = () => {
  return (
    <BaseTabs.Root defaultValue="sent">
      <BaseTabs.List className="kb-tabs-list">
        <BaseTabs.Trigger value="sent" className="kb-reset">
          <SendDiagonal />
          Sent
        </BaseTabs.Trigger>
        <BaseTabs.Trigger value="pending" className="kb-reset">
          <MinusCircle />
          Pending
        </BaseTabs.Trigger>
        <BaseTabs.Trigger value="draft" className="kb-reset">
          <Archive />
          Drafts is a really, really long tab name
        </BaseTabs.Trigger>
        <BaseTabs.Indicator className="kb-tabs-indicator" />
      </BaseTabs.List>
      <BaseTabs.Content value="sent">
        <p>These are your newsletters in sent</p>
      </BaseTabs.Content>
      <BaseTabs.Content value="pending">
        <p>These are your newsletters in pending</p>
      </BaseTabs.Content>
      <BaseTabs.Content value="draft">
        <p>These are your newsletters in draft</p>

        <BaseTabs.Root defaultValue="sent">
          <BaseTabs.List className="kb-tabs-list">
            <BaseTabs.Trigger value="sent" className="kb-reset">
              <SendDiagonal />
              Sent
            </BaseTabs.Trigger>
            <BaseTabs.Trigger value="pending" className="kb-reset">
              <MinusCircle />
              Pending
            </BaseTabs.Trigger>
            <BaseTabs.Trigger value="draft" className="kb-reset">
              <Archive />
              Drafts
            </BaseTabs.Trigger>
            <BaseTabs.Indicator className="kb-tabs-indicator" />
          </BaseTabs.List>
          <BaseTabs.Content value="sent">
            <p>These are your newsletters in sent</p>
          </BaseTabs.Content>
          <BaseTabs.Content value="pending">
            <p>These are your newsletters in pending</p>
            <BaseTabs.Root defaultValue="sent">
              <BaseTabs.List className="kb-tabs-list">
                <BaseTabs.Trigger value="sent" className="kb-reset">
                  <SendDiagonal />
                  Sent
                </BaseTabs.Trigger>
                <BaseTabs.Trigger value="pending" className="kb-reset">
                  <MinusCircle />
                  Pending
                </BaseTabs.Trigger>
                <BaseTabs.Trigger value="draft" className="kb-reset">
                  <Archive />
                  Drafts
                </BaseTabs.Trigger>
                <BaseTabs.Indicator className="kb-tabs-indicator" />
              </BaseTabs.List>
              <BaseTabs.Content value="sent">
                <p>These are your newsletters in sent</p>
              </BaseTabs.Content>
              <BaseTabs.Content value="pending">
                <p>These are your newsletters in pending</p>
              </BaseTabs.Content>
              <BaseTabs.Content value="draft">
                <p>These are your newsletters in draft</p>
              </BaseTabs.Content>
            </BaseTabs.Root>
          </BaseTabs.Content>
          <BaseTabs.Content value="draft">
            <p>These are your newsletters in draft</p>
          </BaseTabs.Content>
        </BaseTabs.Root>
      </BaseTabs.Content>
    </BaseTabs.Root>
  );
};
