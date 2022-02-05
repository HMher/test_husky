// Button.stories.js|jsx

import React from "react";

import { Button } from "./Button";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Button",
  component: Button,
};

export const Primary = () => (
  <Button size="medium" variant="contained" color="primary">
    text
  </Button>
);
