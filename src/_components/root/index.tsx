import React, {memo} from "react";
import { ConnectedNotification } from "./_components/notification";
import { Portal } from "./_components/portal";

export const Root = memo(() => (
  <Portal prefix="notifications">
    <ConnectedNotification />
  </Portal>
));
