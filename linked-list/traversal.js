const { Node } = require("./Node");

const  a = new Node("a");
const  b = new Node("b");
const  c = new Node("c");
const  d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

function traverseLinkedList(head) {
  let current = head;
  while (current) {
    console.info("Current val: ", current.val);
    current = current.next;
  }
  return;
}

traverseLinkedList(a)

