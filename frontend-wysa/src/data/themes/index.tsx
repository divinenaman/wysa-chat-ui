import React from "react";

export type ThemeType = {
  background: string;
  chatBubbleColor: string;
  textColor: string;
  textInputColor: string;
  buttonColor: string;
};

export type ThemesType = {
  [index: string]: ThemeType;
};