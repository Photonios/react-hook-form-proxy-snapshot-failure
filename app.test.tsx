import React from "react";
import { useForm } from "react-hook-form";
import ShallowRenderer from "react-test-renderer/shallow";

test("that it works", () => {
  const OtherComponent = () => null;

  const Component = () => {
    const form = useForm();
    // @ts-ignore
    return <OtherComponent form={form} />;
  };

  const renderer = new ShallowRenderer();
  renderer.render(<Component />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
