const reverseList = function (head) {
    // Base case: if the list is empty or has only one node, return the head (no need to reverse).
    if (head == null || head.next == null) return head;

    // Recursively reverse the rest of the list starting from the second node.
    var res = reverseList(head.next);

    // After reversing the rest, set the next node's next pointer to point back to the current head.
    head.next.next = head;

    // Set the current head's next pointer to null to break the original forward link.
    head.next = null;

    // Return the new head of the reversed list.
    return res;
};