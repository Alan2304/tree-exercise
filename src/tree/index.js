import React, { useState } from "react";

import TreeNode from "./TreeNode/TreeNode";
import TreeContext from "./TreeProvider/TreeContext";

import "./index.css";

import data from "./data.json";

export default function Tree() {
  const { nodes } = data;
  const [nodesAnimals, setNodeAnimals] = useState(nodes);

  // console.log(reduce((count, n) => count + 1, nodes[0], 0));
  // console.log(addLeaf("dog", { name: "pito" }, nodes[0]));
  // console.log(nodes);
  return (
    <TreeContext.Provider value={{nodesAnimals, setNodeAnimals}}>
      <div className="tree">
        <ol>
          {nodesAnimals.map((node) => {
            return <TreeNode key={node.name} node={node} />;
          })}
        </ol>
      </div>
    </TreeContext.Provider>
  );
}
