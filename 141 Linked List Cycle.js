
// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

function ListNode(val) {
    this.val = val;
    this.next = null;
}

// O(1) memory solution using a pointer
var hasCycle = function(head) {
    let fast = head; 
    let slow = head; 
    let cycle = false; 

    while (slow.next !== null) {
        if (fast === slow) {cycle = true; break};

        fast = fast.next.next;
        slow = slow.next;
    }
}

// O(n) memory solution 
var hasCycleNoPointer = function(head) {
    let node = head;
    let cycle = false;

    while (node.next) {
        if (node.passed === true) {cycle = true; break};

        node.passed = true; 
        node = node.next;
    }

    return cycle
};
