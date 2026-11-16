import { Approach } from "./Approach";
import { Capabilities } from "./Capabilities";
import { EntryPortal } from "./EntryPortal";
import { Initiate } from "./Initiate";
import { LabFrame } from "./LabFrame";
import { SelectedWork } from "./SelectedWork";

export function LabHome() {
  return (
    <LabFrame>
      <EntryPortal />
      <SelectedWork />
      <Capabilities />
      <Approach />
      <Initiate />
    </LabFrame>
  );
}
