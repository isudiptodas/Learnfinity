export const linearSearching = [
    {
        lang: 'C++',
        code: `#include <iostream>
using namespace std;

int linearSearch(int array[], int size, int target) {
    for (int i = 0; i < size; i++) {
        if (array[i] == target) {
            return i;
        }
    }
    return -1;
}

int main() {
    int array[] = {3, 5, 2, 7, 9, 1, 4};
    int target = 7;
    int size = sizeof(array) / sizeof(array[0]);

    int result = linearSearch(array, size, target);

    if (result != -1) {
        cout << "Target element found at index " << result << endl;
    } else {
        cout << "Target element not found in the array" << endl;
    }

    return 0;
}
`
    },
    {
        lang: 'Java',
        code: `public class LinearSearch {

    public static int linearSearch(int[] array, int target) {
        for (int i = 0; i < array.length; i++) {
            if (array[i] == target) {
                return i;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        int[] array = {3, 5, 2, 7, 9, 1, 4};
        int target = 7;

        int result = linearSearch(array, target);

        if (result != -1) {
            System.out.println("Target element found at index " + result);
        } else {
            System.out.println("Target element not found in the array");
        }
    }
}
`
    },
    {
        lang: 'Python',
        code: `def linear_search(array, target):
    for i in range(len(array)):
        if array[i] == target:
            return i
    return -1

array = [3, 5, 2, 7, 9, 1, 4]
target = 7

result = linear_search(array, target)

if result != -1:
    print("Target element found at index", result)
else:
    print("Target element not found in the array")
`
    },
];

export const binarySearching = [
    {
        lang: 'C++',
        code: `
#include <iostream>
using namespace std;

int binarySearch(int array[], int size, int target) {
    int left = 0;
    int right = size - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (array[mid] == target) {
            return mid;
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

int main() {
    int array[] = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};
    int target = 23;
    int size = sizeof(array) / sizeof(array[0]);

    int result = binarySearch(array, size, target);

    if (result != -1) {
        cout << "Target element found at index " << result << endl;
    } else {
        cout << "Target element not found in the array" << endl;
    }

    return 0;
}
`
    },
    {
        lang: 'java',
        code: `
public class BinarySearch {
    public static int binarySearch(int[] array, int target) {
        int left = 0;
        int right = array.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (array[mid] == target) {
                return mid;
            } else if (array[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1;
    }

    public static void main(String[] args) {
        int[] array = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};
        int target = 23;

        int result = binarySearch(array, target);

        if (result != -1) {
            System.out.println("Target element found at index " + result);
        } else {
            System.out.println("Target element not found in the array");
        }
    }
}
`
    },
    {
        lang: 'Python',
        code: `
def binary_search(array, target):
    left = 0
    right = len(array) - 1

    while left <= right:
        mid = left + (right - left) // 2

        if array[mid] == target:
            return mid
        elif array[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1

array = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
target = 23

result = binary_search(array, target)

if result != -1:
    print("Target element found at index", result)
else:
    print("Target element not found in the array")
`
    },
]