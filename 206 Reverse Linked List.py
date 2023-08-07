class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        
        prev = None
        node = head

        while node:
            next = node.next
            node.next = prev
            prev = node  
            node = next
        
        return prev