export const linkedList = [
    {
        lang: 'C++',
        code: `
#include <iostream>

class Node {
public:
  int data;
  Node* next;

  Node(int value) {
    data = value;
    next = nullptr;
  }
};

class LinkedList {
private:
  Node* head;

public:
  LinkedList() {
    head = nullptr;
  }

  void insert(int value) {
    Node* newNode = new Node(value);
    if (head == nullptr) {
      head = newNode;
    } else {
      Node* temp = head;
      while (temp->next != nullptr) {
        temp = temp->next;
      }
      temp->next = newNode;
    }
  }

  void deleteNode(int value) {
    if (head == nullptr) return;

    if (head->data == value) {
      Node* temp = head;
      head = head->next;
      delete temp;
      return;
    }

    Node* temp = head;
    while (temp->next != nullptr) {
      if (temp->next->data == value) {
        Node* nodeToDelete = temp->next;
        temp->next = temp->next->next;
        delete nodeToDelete;
        return;
      }
      temp = temp->next;
    }
  }

  void printList() {
    Node* temp = head;
    while (temp != nullptr) {
      std::cout << temp->data << " ";
      temp = temp->next;
    }
    std::cout << std::endl;
  }
};

int main() {
  LinkedList list;
  list.insert(1);
  list.insert(2);
  list.insert(3);
  list.insert(4);
  list.insert(5);

  std::cout << "Linked List: ";
  list.printList();

  list.deleteNode(3);

  std::cout << "Linked List after deletion: ";
  list.printList();

  return 0;
}
`
    },
    {
        lang: 'Java',
        code: `
class Node {
  int data;
  Node next;

  public Node(int value) {
    data = value;
    next = null;
  }
}

class LinkedList {
  Node head;

  public void insert(int value) {
    Node newNode = new Node(value);
    if (head == null) {
      head = newNode;
    } else {
      Node temp = head;
      while (temp.next != null) {
        temp = temp.next;
      }
      temp.next = newNode;
    }
  }

  public void deleteNode(int value) {
    if (head == null) return;

    if (head.data == value) {
      Node temp = head;
      head = head.next;
      temp = null;
      return;
    }

    Node temp = head;
    while (temp.next != null) {
      if (temp.next.data == value) {
        Node nodeToDelete = temp.next;
        temp.next = temp.next.next;
        nodeToDelete = null;
        return;
      }
      temp = temp.next;
    }
  }

  public void printList() {
    Node temp = head;
    while (temp != null) {
      System.out.print(temp.data + " ");
      temp = temp.next;
    }
    System.out.println();
  }
}

public class Main {
  public static void main(String[] args) {
    LinkedList list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    list.insert(5);

    System.out.print("Linked List: ");
    list.printList();

    list.deleteNode(3);

    System.out.print("Linked List after deletion: ");
    list.printList();
  }
}
`
    },
    {
        lang: 'Python',
        code: `
class Node:
  def __init__(self, data=None):
    self.data = data
    self.next = None

class LinkedList:
  def __init__(self):
    self.head = None

  def insert(self, data):
    if not self.head:
      self.head = Node(data)
    else:
      cur_node = self.head
      while cur_node.next:
        cur_node = cur_node.next
      cur_node.next = Node(data)

  def delete(self, data):
    if self.head is None:
      return

    if self.head.data == data:
      self.head = self.head.next
      return

    cur_node = self.head
    while cur_node.next:
      if cur_node.next.data == data:
        cur_node.next = cur_node.next.next
        return
      cur_node = cur_node.next

  def print_list(self):
    cur_node = self.head
    while cur_node:
      print(cur_node.data, end=" ")
      cur_node = cur_node.next
    print()

ll = LinkedList()
ll.insert(1)
ll.insert(2)
ll.insert(3)
ll.insert(4)
ll.insert(5)

print("Linked List:")
ll.print_list()

ll.delete(3)

print("Linked List after deletion:")
ll.print_list()
`
    },
];