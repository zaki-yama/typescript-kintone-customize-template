import React from "react";
import { render } from "react-dom";
// @ts-ignore
import { Button } from "kintone-ui-component";

declare let kintone: any;

// Example
kintone.events.on("portal.show", (event: any) => {
  console.log("ts: portal.show", event);
  const App = <Button text="hello" />;
  render(App, document.getElementsByClassName("ocean-portal-body")[0]);
});
