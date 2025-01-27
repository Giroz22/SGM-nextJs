import { Button } from "@heroui/react";
import React from "react";

interface AppButtonProps {
  text: string;
  action: () => void;
}

function AppButton({ text, action }: AppButtonProps) {
  return (
    <Button color="primary" onPress={action}>
      {text}
    </Button>
  );
}

export default AppButton;
