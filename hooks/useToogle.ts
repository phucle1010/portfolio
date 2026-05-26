import { useState } from "react";

export function useToggle() {
  const [enabled, setEnabled] = useState<boolean>(false);

  return { enabled, onSwitch: setEnabled };
}
