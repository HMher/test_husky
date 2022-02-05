import React from "react";
import { Button as MUI_Button } from "@mui/material";

export const Button = (
  props
  //     {
  //   variant = 'contained',
  //   size = 'medium',
  //   children = 'Click me!',
  //   color = 'primary',
  //   disabled = false,
  // }
) => {
  return (
    // <Button
    //   {...props}
    //   //   color={color}
    //   //   variant={variant}
    //   //   size={size}
    //   //   children={children}
    //   //   disabled={disabled}
    // />
    <MUI_Button {...props} />
  );
};
