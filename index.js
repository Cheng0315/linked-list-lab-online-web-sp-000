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

  let node = coll[ll];

  for (let i = 0; i < idx; i++) {
    node = next(node, coll)
  }

  return node
}
