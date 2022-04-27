const breadthfirst = (node) => {
  children = node.children;
  parent = node.parent;
  siblings = parent.children;
  // base case is that the element is present on the node
  if (node.element) return "found";
  // assume the node being sent in is the root and search from there
  // breadth first search all immediate children of the given node
  // siblings and children are arrays
  // push all the elements in the siblings array into the searching array
  searching.concat(siblings)
  // visit the siblings by passing the sibling node into the function but before that pop it out of the array of siblings
  siblingBeingSearched = searching.pop()
  return breadthfirst(siblingBeingSearched)

};
alice = {
  "children":["sameer", "vince"],
  "element": false,
  "parent": "treeroot"
}
// example child of treeroot
Johnathan = {
  "children":["alice", "billy", "gregory", "arnold", "melanie"],
  "element": false,
  "parent": "treeroot"
}

// root of a tree
treeroot = {
  "children": ["Johnathan", "Khayo", "simple questions", "Llort"],
  "element": true,
  "parent": null
}




console.log(searchlistbreadthfirst(treeroot)); // should return found
