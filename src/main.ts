declare let kintone: any;

// Example
kintone.events.on("portal.show", (event: any) => {
  console.log("ts: portal.show", event);
});
