import TreeNode from "./TreeNode";

import "./index.css";

import data from "./data.json";

export default function Tree() {
  const { nodes } = data;
  return (
    <>
      <div className="tree">
          <ol>
            {nodes.map((node) => {
              return <TreeNode key={node.name} node={node} />;
            })}
          </ol>
      </div>
    </>
  );
}
