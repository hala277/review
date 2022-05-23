'use strict';

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // insert
  insert(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
    }
    else {
      node.next = this.head;
      this.head = node;
      return node;
    }
  }

  includes(value) {

    const node = this.head;
    // console.log('hhhhhhhhh',node.value)
    while (node.next !== null) {
      // console.log('hhhhhhhhh2',node.value)
      // console.log(node.value)
      // console.log('hhhhhhhhhh3', value)

      if (value === node.value) {
        console.log('hhhhh', node.value);
        return true;


      }

      // else if(value == node.value.next) {
      //  console.log('lllllllll'+node.next);
      //   return true;
      // }
      else if (value !== node.value) {
        return false;
      }

    }
    // return false;
  }

  // insert2(head,value){
  //   let node = new Node(value);

  //   node.next = head;
  //   head = node;
  //   return node;
  // }

  // delete
  deletLastNode() {
    if (!this.head) {
      return null;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }
    let prev = this.head;
    let tail = this.head.next;

    while (tail.next !== null) {
      prev = tail;
      tail = tail.next;
    }
    prev.next = null;
    return this.head;
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null;
  }

  deleteAt(idx) {
    if (!this.head) {
      this.head = new Node(value);
      return;
    }

    if (idx === 0) {
      this.head = this.head.next;
      return;
    }

    const prev = this.getAt(idx - 1);
    if (!prev || !prev.next) {
      return;
    }
    prev.next = prev.next.next;
    return this.head;

  }

  toString() {
    let string = '';

    while (this.head !== null) {
      string = string + `[${this.head.value}]-> `;
      this.head = this.head.next;
    }
    string = string + `NULL`;
    return string;
  }

  append(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
    }
    else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  insertBefore(value, newValue) {
    if (this.head.value === value) {
      this.insert(newValue);
    }

    else {
      let newNode = new Node(newValue);
      if (value.next === newValue) {
        newNode.next = this.head;
        this.head = newNode;
      } else {
        let currentNode = this.head;
        let previousNode;
        for (let i = 0; i < value; i++) {
          previousNode = currentNode;
          // console.log('  prevvvvvvvv ', previousNode)
          currentNode = currentNode.next;
          // console.log(currentNode,'  curr')
        }
        previousNode.next = newNode;
        // console.log(previousNode,'  prev')
        newNode.next = currentNode;
        // console.log(currentNode, '  curr')
      }
      // this.size++;
    }
    // if(this.head.value === value){
    //   this.insert(newValue);
    // }
    // else{
    //   let tail = this.head;
    //   while(!tail){
    //     if(tail.value === newValue){
    //       let node = new Node(newValue);
    //       node.newt = tail;
    //       tail.next = node;
    //       break;
    //     }
    //     tail = this.head;
    //     this.head = this.head.next;
    //   }
    // }
  }

  insertAfter(value, newValue) {
    let node = new Node(newValue);
    // if (this.head.value === value) {
    //   this.insert(newValue);
    // }
    if (this.head) {

      if (this.head.value === value) {
        this.head.next = node;
        node = this.head
        node = newValue;
        return;
      }

      let newNode = this.head;
      while (newNode) {
        if (newNode.value === value) {
          let temp = newNode.next;
          newNode.next = node;
          node.next = temp;
          return;
        }
        newNode = newNode.next;
      }
    }

  }

  kthFromEnd(k){
   let node = this.head;
        let temp = 0;
        if (k < 0) {
            return "k is not a positive integer"
        }


        while (node.next) {
            node = node.next;
            temp++;
        }

        node = this.head;
        let tail = temp - k;
        if (tail <= -1) {
            return "K more than the list length";
        }



        for (let i = 0; i < tail; i++) {
            node = node.next;
           
        }
        return node.value;

    }

  zipLists(list1, list2){
    let newList = new LinkedList();
    while(list1.head || list2.head){
      if(list1.head){
        newList.append(list1.head.value);
        list1.head = list1.head.next;
      }
      if(list2.head){
        newList.append(list2.head.value);
        list2.head = list2.head.next;
      }
    }
    return newList.toString();
  }

}
let ll = new LinkedList();
let ll2 = new LinkedList();
let newll = new LinkedList();

ll2.append(1)
ll2.append(2)
ll2.append(3)
ll2.append(4)


// ll2.insertBefore(4, 9);
// ll.kthFromEnd(0)
// console.log(ll2.toString())
// console.log(ll.insert(2));
// console.log(ll.insert(3));
// console.log(ll.insert(2));

// console.log(ll.includes(2));
// console.log(ll.includes(2));

// ll.deletLastNode()
// ll.deletLastNode()
// ll.deletLastNode()
// ll.deletLastNode()
// console.log(ll.getAt(2));
// ll.deleteAt(2);
// ll.deleteAt(4);
// ll.deleteAt(3);
// ll.deleteAt(2);
// ll.deleteAt(1);
// ll.deleteAt(0);
// ll.toString();

ll.append(10);
ll.append(20);
ll.append(30);
ll.append(40);

console.log(newll.zipLists(ll, ll2))

// console.log(ll.kthFromEnd(0))
// console.log(ll.toString())
// ll.insertBefore(1, 6);
// ll.insertAfter(3, 10);
// let newValue = ll.toString();
// console.log(newValue)
// console.log(ll.toString())

// ll.deletLastNode()
// ll.deletLastNode()
// ll.deletLastNode()
// ll.deletLastNode()
// ll.deleteAt(3);
// console.log(ll.getAt(4))
// console.log(ll.includes(4))

// console.log(ll.toString())
// console.log(ll.toString())
// console.log(ll);
