import { Node } from "./Node.js";

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

/* Time Complexity: O(n) */
/* Space complexity O(1) */

function traverseLinkedList(head) {
  let current = head;
  while (current) {
    console.info("Current val: ", current.val);
    current = current.next;
  }
  return;
}

/* Time Complexity: O(n) */
/* Space complexity O(n) because the callstack is filling up */

function traverseLinkedListRecursive(head) {
  if (!head) return;
  console.log("[Recursive] Current val: ", head.val);
  traverseLinkedListRecursive(head.next);
}

traverseLinkedList(a);
traverseLinkedListRecursive(a);
