import React, { useContext } from "react";
import { Button, Spinner } from "reactstrap";

import TreeContext from "../../TreeProvider/TreeContext";
import { removeNode } from "../../treeUtils";

import "./NodeDelete.css";

const NodeDelete = ({ nodeName }) => {
  const { nodesAnimals, saveNewNodeAnimals, isLoading } = useContext(TreeContext);

  const onClick = async (nodeToRemove) => {
    const [rootNode] = nodesAnimals;
    const copy = { ...rootNode };

    removeNode(nodeToRemove, copy);
    await saveNewNodeAnimals([copy]);
  };

  return (
    <>
      {!isLoading && <Button close onClick={() => onClick(nodeName)} />}
      {isLoading && (
        <div className="delete-spinner">
          <Spinner />
        </div>
      )}
    </>
  );
};

export default NodeDelete;
