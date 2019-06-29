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

  let name = ll;

  for (let i = 0; i < idx; i++) {
    let node = coll[name]
    name = next(node, coll)
  }

  return coll[name]
}
