import { createContext } from "react";

const TreeContext = createContext({
  nodesAnimals: [],
  setNodeAnimals: () => {},
});

export default TreeContext;
