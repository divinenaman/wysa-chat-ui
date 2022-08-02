import React from "react";

export type ChatType = {
  type: "incoming" | "outgoing";
  text: string;
};
