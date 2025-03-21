export const stack = [
    {
        lang: 'C++',
        code: `
#include <iostream>

class Stack {
private:
    int* arr;
    int top;
    int capacity;

public:
    // Constructor
    Stack(int capacity) {
        this->capacity = capacity;
        this->top = -1;
        this->arr = new int[capacity];
    }

    // Destructor
    ~Stack() {
        delete[] arr;
    }

    // Push element onto the stack
    void push(int element) {
        if (top >= capacity - 1) {
            std::cout << "Stack overflow!" << std::endl;
            return;
        }
        arr[++top] = element;
    }

    // Pop element from the stack
    int pop() {
        if (top < 0) {
            std::cout << "Stack underflow!" << std::endl;
            return -1;
        }
        return arr[top--];
    }

    // Get the top element of the stack
    int peek() {
        if (top < 0) {
            std::cout << "Stack is empty!" << std::endl;
            return -1;
        }
        return arr[top];
    }

    // Check if the stack is empty
    bool isEmpty() {
        return top < 0;
    }

    // Check if the stack is full
    bool isFull() {
        return top >= capacity - 1;
    }
};

int main() {
    Stack stack(5);

    stack.push(10);
    stack.push(20);
    stack.push(30);
    stack.push(40);
    stack.push(50);

    std::cout << "Top element: " << stack.peek() << std::endl;

    std::cout << "Popped element: " << stack.pop() << std::endl;

    return 0;
}
`
    },
    {
        lang: 'Java',
        code: `
public class Stack {
    private int[] arr;
    private int top;
    private int capacity;

    // Constructor
    public Stack(int capacity) {
        this.capacity = capacity;
        this.top = -1;
        this.arr = new int[capacity];
    }

    // Push element onto the stack
    public void push(int element) {
        if (top >= capacity - 1) {
            System.out.println("Stack overflow!");
            return;
        }
        arr[++top] = element;
    }

    // Pop element from the stack
    public int pop() {
        if (top < 0) {
            System.out.println("Stack underflow!");
            return -1;
        }
        return arr[top--];
    }

    // Get the top element of the stack
    public int peek() {
        if (top < 0) {
            System.out.println("Stack is empty!");
            return -1;
        }
        return arr[top];
    }

    // Check if the stack is empty
    public boolean isEmpty() {
        return top < 0;
    }

    // Check if the stack is full
    public boolean isFull() {
        return top >= capacity - 1;
    }

    public static void main(String[] args) {
        Stack stack = new Stack(5);

        stack.push(10);
        stack.push(20);
        stack.push(30);
        stack.push(40);
        stack.push(50);

        System.out.println("Top element: " + stack.peek());

        System.out.println("Popped element: " + stack.pop());
    }
}
`
    },
    {
        lang: 'Python',
        code: `
class Stack:
    def __init__(self, capacity):
        self.capacity = capacity
        self.top = -1
        self.arr = [0] * capacity

    def push(self, element):
        if self.top >= self.capacity - 1:
            print("Stack overflow!")
            return
        self.arr[self.top + 1] = element
        self.top += 1

    def pop(self):
        if self.top < 0:
            print("Stack underflow!")
            return -1
        element = self.arr[self.top]
        self.top -= 1
        return element

    def peek(self):
        if self.top < 0:
            print("Stack is empty!")
            return -1
        return self.arr[self.top]

    def is_empty(self):
        return self.top < 0

    def is_full(self):
        return self.top >= self.capacity - 1

# Example usage
stack = Stack(5)

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)

print("Top element:", stack.peek())

print("Popped element:", stack.pop())
`
    },
]