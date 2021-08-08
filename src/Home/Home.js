import React from "react";
import { Button } from "@material-ui/core";
import TimelineCards from "../TimelineCard/TimelineCards";
function Home() {
  return (
    <div>
      <Button color="secondary">Secondary</Button>
      <TimelineCards />
    </div>
  );
}

export default Home;
