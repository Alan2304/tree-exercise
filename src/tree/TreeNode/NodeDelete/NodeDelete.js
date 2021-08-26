import React, { useContext } from "react";
import { Button } from 'reactstrap'

import TreeContext from "../../TreeProvider/TreeContext";
import { removeNode } from "../../treeUtils";

const NodeDelete = ({ nodeName }) => {
  const { nodesAnimals, setNodeAnimals } = useContext(TreeContext);

  const onClick = (nodeToRemove) => {
    const [rootNode] = nodesAnimals;
    const copy = { ...rootNode };

    removeNode(nodeToRemove, copy);
    setNodeAnimals([copy]);
  };

  return <Button close onClick={() => onClick(nodeName)} />;
};

export default NodeDelete;
