export const queue = [
    {
        lang: 'C++',
        code: `
#include <iostream>
using namespace std;

class Queue {
private:
    int* arr;
    int front;
    int rear;
    int capacity;
    int size;

public:
    Queue(int capacity) {
        this->capacity = capacity;
        this->front = this->rear = -1;
        this->size = 0;
        this->arr = new int[capacity];
    }

    ~Queue() {
        delete[] arr;
    }

    bool isEmpty() {
        return size == 0;
    }

    bool isFull() {
        return size == capacity;
    }

    void enqueue(int data) {
        if (isFull()) {
            cout << "Queue is full. Cannot enqueue." << endl;
            return;
        }

        if (isEmpty()) {
            front = rear = 0;
        } else {
            rear = (rear + 1) % capacity;
        }

        arr[rear] = data;
        size++;
    }

    int dequeue() {
        if (isEmpty()) {
            cout << "Queue is empty. Cannot dequeue." << endl;
            return -1;
        }

        int data = arr[front];

        if (front == rear) {
            front = rear = -1;
        } else {
            front = (front + 1) % capacity;
        }

        size--;
        return data;
    }

    int peek() {
        if (isEmpty()) {
            cout << "Queue is empty." << endl;
            return -1;
        }

        return arr[front];
    }

    void printQueue() {
        if (isEmpty()) {
            cout << "Queue is empty." << endl;
            return;
        }

        int tempFront = front;
        for (int i = 0; i < size; i++) {
            cout << arr[tempFront] << " ";
            tempFront = (tempFront + 1) % capacity;
        }
        cout << endl;
    }
};

int main() {
    Queue q(5);

    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);
    q.enqueue(5);

    cout << "Queue: ";
    q.printQueue();

    cout << "Dequeued: " << q.dequeue() << endl;

    cout << "Queue: ";
    q.printQueue();

    cout << "Peek: " << q.peek() << endl;

    return 0;
}
`
    },
    {
        lang: 'Java',
        code: `
public class Queue {
    private int[] arr;
    private int front;
    private int rear;
    private int capacity;
    private int size;

    public Queue(int capacity) {
        this.capacity = capacity;
        this.front = this.rear = -1;
        this.size = 0;
        this.arr = new int[capacity];
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public boolean isFull() {
        return size == capacity;
    }

    public void enqueue(int data) {
        if (isFull()) {
            System.out.println("Queue is full. Cannot enqueue.");
            return;
        }

        if (isEmpty()) {
            front = rear = 0;
        } else {
            rear = (rear + 1) % capacity;
        }

        arr[rear] = data;
        size++;
    }

    public int dequeue() {
        if (isEmpty()) {
            System.out.println("Queue is empty. Cannot dequeue.");
            return -1;
        }

        int data = arr[front];

        if (front == rear) {
            front = rear = -1;
        } else {
            front = (front + 1) % capacity;
        }

        size--;
        return data;
    }

    public int peek() {
        if (isEmpty()) {
            System.out.println("Queue is empty.");
            return -1;
        }

        return arr[front];
    }

    public void printQueue() {
        if (isEmpty()) {
            System.out.println("Queue is empty.");
            return;
        }

        int tempFront = front;
        for (int i = 0; i < size; i++) {
            System.out.print(arr[tempFront] + " ");
            tempFront = (tempFront + 1) % capacity;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Queue q = new Queue(5);

        q.enqueue(1);
        q.enqueue(2);
        q.enqueue(3);
        q.enqueue(4);
        q.enqueue(5);

        System.out.print("Queue: ");
        q.printQueue();

        System.out.println("Dequeued: " + q.dequeue());

        System.out.print("Queue: ");
        q.printQueue();

        System.out.println("Peek: " + q.peek());
    }
}
`
    },
    {
        lang: 'Python',
        code: `
class Queue:
    def __init__(self, capacity):
        self.capacity = capacity
        self.front = self.rear = -1
        self.size = 0
        self.arr = [None] * capacity

    def is_empty(self):
        return self.size == 0

    def is_full(self):
        return self.size == self.capacity

    def enqueue(self, data):
        if self.is_full():
            print("Queue is full. Cannot enqueue.")
            return

        if self.is_empty():
            self.front = self.rear = 0
        else:
            self.rear = (self.rear + 1) % self.capacity

        self.arr[self.rear] = data
        self.size += 1

    def dequeue(self):
        if self.is_empty():
            print("Queue is empty. Cannot dequeue.")
            return -1

        data = self.arr[self.front]

        if self.front == self.rear:
            self.front = self.rear = -1
        else:
            self.front = (self.front + 1) % self.capacity

        self.size -= 1
        return data

    def peek(self):
        if self.is_empty():
            print("Queue is empty.")
            return -1

        return self.arr[self.front]

    def print_queue(self):
        if self.is_empty():
            print("Queue is empty.")
            return

        temp_front = self.front
        for _ in range(self.size):
            print(self.arr[temp_front], end=" ")
            temp_front = (temp_front + 1) % self.capacity
        print()

# Test the Queue class
q = Queue(5)

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)

print("Queue:", end=" ")
q.print_queue()

print("Dequeued:", q.dequeue())

print("Queue:", end=" ")
q.print_queue()

print("Peek:", q.peek())
`
    },
];