const getName = function(node) {
  return node.name
}

const headNode = function(linkedList, coll) {
  return coll[linkedList]
}

const next = function(head, coll) {
  return coll[head.next]
}

const nodeAt = function(idx, ll, coll) {
  return coll[ll]
}
