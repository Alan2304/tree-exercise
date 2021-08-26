import React, { useContext } from "react";
import { Input } from "reactstrap";

import TreeContext from "../../TreeProvider/TreeContext";
import { addNode } from "../../treeUtils";

const NodeInput = ({ nodeName }) => {
  const { nodesAnimals, setNodeAnimals } = useContext(TreeContext);

  const triggerEnter = (event) => {
    const newNode = event.target.value;
    if (event.keyCode === 13 && newNode.length > 0) {
      const [rootTree] = nodesAnimals;
      const copyOfTree = { ...rootTree };

      addNode(nodeName, { name: event.target.value }, copyOfTree);
      setNodeAnimals([copyOfTree]);
    }
  };

  return (
    <Input
      name="node"
      placeholder="Enter something to add it to this level"
      onKeyDown={triggerEnter}
    />
  );
};

export default NodeInput;
