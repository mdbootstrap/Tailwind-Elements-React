import React from "react";

interface InputTheme {
  wrapper?: string;
  input?: string;
  activeInput?: string;
  label?: string;
  activeLabel?: string;
  notch?: string;
  notchLeading?: string;
  activeNotchLeading?: string;
  focusedNotchLeading?: string;
  notchLeadingDefault?: string;
  focusedNotchLeadingDefault?: string;
  notchLeadingWhite?: string;
  focusedNotchLeadingWhite?: string;
  notchMiddle?: string;
  activeNotchMiddle?: string;
  focusedNotchMiddle?: string;
  notchMiddleDefault?: string;
  focusedNotchMiddleDefault?: string;
  notchMiddleWhite?: string;
  focusedNotchMiddleWhite?: string;
  notchTrailing?: string;
  activeNotchTrailing?: string;
  focusedNotchTrailing?: string;
  notchTrailingDefault?: string;
  focusedNotchTrailingDefault?: string;
  notchTrailingWhite?: string;
  focusedNotchTrailingWhite?: string;
  counter?: string;
}

type InputELement = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">;

type InputProps = InputELement & {
  label?: React.ReactNode;
  labelStyle?: React.CSSProperties;
  labelClass?: string;
  labelRef?: React.RefObject<HTMLLabelElement>;
  ref?: React.Ref<HTMLInputElement>;
  readonly?: boolean;
  disabled?: boolean;
  size?: string;
  wrapperTag?: React.ComponentProps<any>;
  wrapperClass?: string;
  wrapperStyle?: React.CSSProperties;
  theme?: InputTheme;
  formWhite?: boolean;
  counter?: boolean;
  maxLength?: number;
};

export { InputProps };
