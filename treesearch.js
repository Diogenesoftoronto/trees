const breadthfirst = (node, element) => {
  children = node.children;
  parent = node.parent;
  siblings = parent.children;
  // base case is that the element is present on the node
  if (Object.hasOwn(node, element)) return "found";
  // assume the node being sent in is the root and search from there
  // breadth first search all immediate children of the given node
  // take the children and add them to search list
  //
  searchlist = children;
  //
};

treeroot = {
  "children": [],
  "element": null,
  "parent": null
}


console.log(searchlistbreadthfirst(treeroot));
