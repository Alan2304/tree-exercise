const TreeNode = ({ node, level = 0 }) => {
  const [firstLetter, ...restOfLetters] = node.name;
  const stringLevel = Array(level).fill('.').join('');
  const name = `${firstLetter}${stringLevel}${restOfLetters.join('')}`;

  const renderChildren = () => {
    if (node.children) {
      return (
        <ol>
          {node.children.map((childrenNode) => (
            <TreeNode key={node.name} node={childrenNode} level={level + 1} />
          ))}
        </ol>
      );
    }

    return null;
  };

  return (
    <li>
      <p>{name}</p>
      {renderChildren()}
    </li>
  );
};

export default TreeNode;
