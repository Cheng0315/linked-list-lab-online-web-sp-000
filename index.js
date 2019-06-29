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

const addressAt = function(idx, ll, coll) {
  if (idx === 0) {
    return ll
  }

  let address;

  for (let i = 0; i < idx; i++) {
    address = coll[ll].next
  }

  return address;
}

const indexAt = function(node,coll,ll) {
  let idx = 0;
  let curNode = coll[ll];

  while (curNode.name !== node.name) {
    idx += 1;
  }

  return idx;
}
