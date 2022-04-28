const breadthfirst = (node) => {
  children = node.children;
  parent = node.parent;
  siblings = parent.children;
  // base case is that the element is present on the node
  if (node.element) return "found"
  // initialize searching as an array if it does not exist
  
  if (searching[0] === "undefined"){const searching = []; searching.concat(siblings)}
  // assume the node being sent in is the root and search from there
  // breadth first search all immediate children of the given node
  // siblings and children are arrays
  // concat all the elements in the siblings array into the searching array
  // visit the siblings by passing the sibling node into the 
  // function but before that pop it out of the array of siblings
  siblingBeingSearched = searching.pop()
  // if there are no siblings left to be searched then the function ret
  if (siblingBeingSearched) return breadthfirst(siblingBeingSearched)
  return breadthfirst()
}; // 

billy = {
  "children":[],
  "element": true,
  "parent": "Johnathan"
}
alice = {
  "children":[],
  "element": true,
  "parent": "Johnathan"
}
// example child of treeroot
Johnathan = {
  "children": [alice, billy],
  "element": false,
  "parent": treeroot
}

// root of a tree
treeroot = {
  "children": [Johnathan],
  "element": false,
  "parent": null
}

baseroot = {
  "children": [],
  "element": true,
  "parent": null
}


console.log(searchlistbreadthfirst(baseroot)); // should return found
