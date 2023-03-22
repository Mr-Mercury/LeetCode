var mergeTwoLists = function(list1, list2) {
  
    if (!list1 && !list2) {return null}
    if (!list1) return list2;
    if (!list2) return list1; 
  
    let mergeHead = new ListNode(); 
    let currNode = mergeHead;
  
    while (list1 !== null && list2 !== null) {
      if (list1.val <= list2.val) {
          currNode.next = list1; 
          list1 = list1.next;
      } else {
          currNode.next = list2;
          list2 = list2.next;
      }
      currNode = currNode.next; 
    }
  
    if (list1 !== null) {currNode.next = list1}
    if (list2 !== null) {currNode.next = list2}
  
    mergeHead = mergeHead.next;
  
    return mergeHead
  };