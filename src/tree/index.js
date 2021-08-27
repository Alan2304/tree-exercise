import React, { useEffect, useState } from "react";

import TreeNode from "./TreeNode/TreeNode";
import TreeContext from "./TreeProvider/TreeContext";

import "./index.css";
import { saveNodesData, getNodesData } from "../utils";

export default function Tree() {
  const [nodesAnimals, setNodeAnimals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTreeApi = async () => {
    const { nodes } = await getNodesData();
    setNodeAnimals(nodes);
  };

  const saveNewNodeAnimals = async (newTree) => {
    setIsLoading(true);
    await saveNodesData({ nodes: newTree });
    setIsLoading(false);
    setNodeAnimals(newTree);
  };

  useEffect(() => {
    fetchTreeApi();
  }, []);

  return (
    <TreeContext.Provider
      value={{ nodesAnimals, saveNewNodeAnimals, isLoading }}
    >
      <div className="tree">
        <ol>
          {nodesAnimals.length > 0 &&
            nodesAnimals.map((node) => {
              const key =
              node.name === "root" ? "rootNode" : node.name;
              return <TreeNode key={key} node={node} />;
            })}
        </ol>
      </div>
    </TreeContext.Provider>
  );
}
