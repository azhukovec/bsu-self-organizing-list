class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class SelfOrganizedList {
    constructor() {
        this._length = 0;
        this.head = null;
        this.tail = null;
    }

    insert(data) {
        var node = new Node(data);
 
        if (this._length) {
          this.tail.next = node;
          node.prev = this.tail;
          this.tail = node;
        } else {
          this.head = node;
          this.tail = node;
        }
 
        this._length++;
 
        return node;
    }

    size() {
        return this._length;
    }

    at(index) {
        var currentNode = this.head,
        count = 0;
 
        if (this._length === 0 || index > this._length || index < 0) {
          return null;
        }
 
        while (count < index) {
          currentNode = currentNode.next;
          count++;
        }

        return currentNode.data;
    }

    findNode(data) {
        var currentNode = this.head;
         
        while (currentNode) {
            if (currentNode.data == data) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }

        return null;
    }

    toArray() {
        var currentNode = this.head, 
            arrayNode = [],
            i = 0;
        while(currentNode) {
            arrayNode[i] = currentNode.data;
            i++;
            currentNode = currentNode.next;
        }
        
        return arrayNode;
    }

    removeAt(index) {
        var currentNode = this.head,
        count = 0;
 
        if (index === 0) {
            this.head = currentNode.next;
            if (!this.head) {
                this.tail = null;
            } else {
                this.head.prev = null;
            }

        } else if (index === this._length-1) {
            currentNode = this.tail;
            this.tail = currentNode.prev;
            this.tail.next = null;
            
        } else {
            while (count++ < index) {
                currentNode = currentNode.next;
            }
            currentNode.prev.next = currentNode.next;
        }
   
        this._length--;
 
        return currentNode.data;

    }

    moveToFront(node) {
        var currentNode = this.head,
            prevNode = null;

        while (currentNode != null) {

            if(currentNode == node) {

                if(prevNode != null){
                    prevNode.next = currentNode.next;
                    currentNode.next = this.head;
                    this.head = currentNode;
                } else if(currentNode.next = null) {
                    this.tail = currentNode;
                }

            }

            prevNode = currentNode;
            currentNode = currentNode.next;
        }

    }

    reorganize(data) {
        var wantedData = this.findNode(data);

        if (wantedData) {
            this.moveToFront(wantedData);
            return true;
        } 

        return false;
    }

}

module.exports = {
    SelfOrganizedList,
    Node
};
