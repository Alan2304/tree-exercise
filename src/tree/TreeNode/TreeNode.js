import React, { useRef } from "react";

import "./TreeNode.css";

import NodeInput from "./NodeInput/NodeInput";
import NodeDelete from "./NodeDelete/NodeDelete";

const TreeNode = ({ node, level = 0 }) => {
  const [firstLetter, ...restOfLetters] = node.name;
  const stringLevel = useRef(Array(level).fill(".").join(""));
  const name = useRef(
    `${firstLetter}${stringLevel.current}${restOfLetters.join("")}`
  );

  const renderChildren = () => {
    if (node.children) {
      return (
        <ol>
          {node.children.map((childrenNode, index, array) => {
            if (index === array.length - 1) {
              return (
                <>
                  <TreeNode
                    key={`${childrenNode.name}-${index}`}
                    node={childrenNode}
                    level={level + 1}
                  />
                  <NodeInput nodeName={node.name} />
                </>
              );
            }
            return (
              <TreeNode
                key={`${childrenNode.name}-${index}`}
                node={childrenNode}
                level={level + 1}
              />
            );
          })}
        </ol>
      );
    }

    return null;
  };

  return (
    <li>
      <div className="tree-item">
        <p>{name.current}</p>
        <NodeDelete nodeName={node.name} />
      </div>
      {renderChildren()}
    </li>
  );
};

export default TreeNode;
