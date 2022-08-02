import React from "react";
import "./index.css";

import useTheme from "../../hooks/useTheme";

interface ChatBubbleProps {
  children: React.ReactNode;
  variant?: "primary" | "secondry";
  position?: "left" | "right";
}

function ChatBubble({
  children,
  variant = "primary",
  position = "left",
}: ChatBubbleProps) {
  const { selectedTheme } = useTheme();

  return (
    <div
      className="chat_bubble"
      style={{
        backgroundColor: selectedTheme?.chatBubbleColor,
        color: selectedTheme?.textColor,
      }}
      data-variant={`${variant}-${position}`}
    >
      <p>{children}</p>
    </div>
  );
}

export default ChatBubble;
