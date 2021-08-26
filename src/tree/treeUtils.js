export const trampoline =
  (fn) =>
  (...args) => {
    let result = fn.bind(null, ...args);

    while (typeof result === "function") {
      console.log("hi");
      result = result();
    }

    return result;
  };

export const addNode = trampoline((nodeToSearch, newNode, tree) => {
  if (tree.name === nodeToSearch) {
    tree.children.push(newNode);
    return newNode;
  }

  tree.children.forEach((node) => {
    if (node.children) {
      return addNode(nodeToSearch, newNode, node);
    }
  });
});

export const removeNode = trampoline((nodeToRemove, tree) => {
  if (tree.children) {
    const hasNode = tree.children.filter((node) => node.name === nodeToRemove);
    if (hasNode.length > 0) {
      tree.children = tree.children.filter(
        (node) => node.name !== nodeToRemove
      );
      return tree;
    }

    tree.children.forEach((node) => {
      return removeNode(nodeToRemove, node);
    });
  }
});
