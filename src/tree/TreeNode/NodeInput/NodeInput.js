import React, { useContext } from "react";
import { Input, Spinner } from "reactstrap";

import TreeContext from "../../TreeProvider/TreeContext";
import { addNode } from "../../treeUtils";

import './NodeInput.css';

const NodeInput = ({ nodeName }) => {
  const { nodesAnimals, saveNewNodeAnimals, isLoading } = useContext(TreeContext);

  const triggerEnter = async (event) => {
    const newNode = event.target.value;
    if (event.keyCode === 13 && newNode.length > 0) {
      const [rootTree] = nodesAnimals;
      const copyOfTree = { ...rootTree };

      addNode(nodeName, { name: event.target.value }, copyOfTree);
      await saveNewNodeAnimals([copyOfTree]);
    }
  };

  return (
    <>
      {!isLoading && (
        <Input
          name="node"
          placeholder="Enter something to add it to this level"
          onKeyDown={triggerEnter}
        />
      )}
      {isLoading && (
        <div className="add-spinner">
          <Spinner />
        </div>
      )}
    </>
  );
};

export default NodeInput;
