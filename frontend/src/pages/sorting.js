export const bubbleSort = [
    {
        lang: 'C++',
        code: `
#include <iostream>
using namespace std;

void bubbleSort(int arr[], int n) {
  for (int i = 0; i < n - 1; i++) {
    for (int j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        int temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

void printArray(int arr[], int n) {
  for (int i = 0; i < n; i++) {
    cout << arr[i] << " ";
  }
  cout << endl;
}

int main() {
  int arr[] = {64, 34, 25, 12, 22, 11, 90};
  int n = sizeof(arr) / sizeof(arr[0]);

  cout << "Original array: ";
  printArray(arr, n);

  bubbleSort(arr, n);

  cout << "Sorted array: ";
  printArray(arr, n);

  return 0;
}
`
    },
    {
        lang: 'Java',
        code: `
public class BubbleSort {
  public static void bubbleSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
      for (int j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          int temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }

  public static void printArray(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
      System.out.print(arr[i] + " ");
    }
    System.out.println();
  }

  public static void main(String[] args) {
    int[] arr = {64, 34, 25, 12, 22, 11, 90};

    System.out.print("Original array: ");
    printArray(arr);

    bubbleSort(arr);

    System.out.print("Sorted array: ");
    printArray(arr);
  }
}
`
    },
    {
        lang: 'Python',
        code: `
def bubble_sort(arr):
  n = len(arr)
  for i in range(n - 1):
    for j in range(n - i - 1):
      if arr[j] > arr[j + 1]:
        arr[j], arr[j + 1] = arr[j + 1], arr[j]

def print_array(arr):
  print(' '.join(map(str, arr)))

arr = [64, 34, 25, 12, 22, 11, 90]

print("Original array:")
print_array(arr)

bubble_sort(arr)

print("Sorted array:")
print_array(arr)
`
    },
];

export const selectionSort = [
    {
        lang: 'C++',
        code: `
#include <iostream>
using namespace std;

void selectionSort(int arr[], int n) {
  for (int i = 0; i < n - 1; i++) {
    int minIndex = i;
    for (int j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    int temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
}

void printArray(int arr[], int n) {
  for (int i = 0; i < n; i++) {
    cout << arr[i] << " ";
  }
  cout << endl;
}

int main() {
  int arr[] = {64, 34, 25, 12, 22, 11, 90};
  int n = sizeof(arr) / sizeof(arr[0]);

  cout << "Original array: ";
  printArray(arr, n);

  selectionSort(arr, n);

  cout << "Sorted array: ";
  printArray(arr, n);

  return 0;
}
`
    },
    {
        lang: 'Java',
        code: `
public class SelectionSort {
  public static void selectionSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
      int minIndex = i;
      for (int j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      int temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;
    }
  }

  public static void printArray(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
      System.out.print(arr[i] + " ");
    }
    System.out.println();
  }

  public static void main(String[] args) {
    int[] arr = {64, 34, 25, 12, 22, 11, 90};

    System.out.print("Original array: ");
    printArray(arr);

    selectionSort(arr);

    System.out.print("Sorted array: ");
    printArray(arr);
  }
}
`
    },
    {
        lang: 'Python',
        code: `
def selection_sort(arr):
  n = len(arr)
  for i in range(n - 1):
    min_index = i
    for j in range(i + 1, n):
      if arr[j] < arr[min_index]:
        min_index = j
    arr[i], arr[min_index] = arr[min_index], arr[i]

def print_array(arr):
  print(' '.join(map(str, arr)))

arr = [64, 34, 25, 12, 22, 11, 90]

print("Original array:")
print_array(arr)

selection_sort(arr)

print("Sorted array:")
print_array(arr)
`
    },
];
export const insertionSort = [
    {
        lang: 'C++',
        code: `
#include <iostream>
using namespace std;

void insertionSort(int arr[], int n) {
  for (int i = 1; i < n; i++) {
    int key = arr[i];
    int j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}

void printArray(int arr[], int n) {
  for (int i = 0; i < n; i++) {
    cout << arr[i] << " ";
  }
  cout << endl;
}

int main() {
  int arr[] = {64, 34, 25, 12, 22, 11, 90};
  int n = sizeof(arr) / sizeof(arr[0]);

  cout << "Original array: ";
  printArray(arr, n);

  insertionSort(arr, n);

  cout << "Sorted array: ";
  printArray(arr, n);

  return 0;
}
`
    },
    {
        lang: 'Java',
        code: `
public class InsertionSort {
  public static void insertionSort(int[] arr) {
    int n = arr.length;
    for (int i = 1; i < n; i++) {
      int key = arr[i];
      int j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;
    }
  }

  public static void printArray(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
      System.out.print(arr[i] + " ");
    }
    System.out.println();
  }

  public static void main(String[] args) {
    int[] arr = {64, 34, 25, 12, 22, 11, 90};

    System.out.print("Original array: ");
    printArray(arr);

    insertionSort(arr);

    System.out.print("Sorted array: ");
    printArray(arr);
  }
}
`
    },
    {
        lang: 'Python',
        code: `
def insertion_sort(arr):
  for i in range(1, len(arr)):
    key = arr[i]
    j = i - 1
    while j >= 0 and arr[j] > key:
      arr[j + 1] = arr[j]
      j -= 1
    arr[j + 1] = key

def print_array(arr):
  print(' '.join(map(str, arr)))

arr = [64, 34, 25, 12, 22, 11, 90]

print("Original array:")
print_array(arr)

insertion_sort(arr)

print("Sorted array:")
print_array(arr)
`
    },
];

export const mergeSortCode = [
    {
        lang: 'C++',
        code: `
#include <iostream>
using namespace std;

void merge(int arr[], int left, int mid, int right) {
  int n1 = mid - left + 1;
  int n2 = right - mid;

  int leftArr[n1], rightArr[n2];

  for (int i = 0; i < n1; i++)
    leftArr[i] = arr[left + i];
  for (int j = 0; j < n2; j++)
    rightArr[j] = arr[mid + 1 + j];

  int i = 0, j = 0, k = left;
  while (i < n1 && j < n2) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr[k] = leftArr[i];
    i++;
    k++;
  }

  while (j < n2) {
    arr[k] = rightArr[j];
    j++;
    k++;
  }
}

void mergeSort(int arr[], int left, int right) {
  if (left < right) {
    int mid = left + (right - left) / 2;

    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);

    merge(arr, left, mid, right);
  }
}

void printArray(int arr[], int size) {
  for (int i = 0; i < size; i++)
    cout << arr[i] << " ";
  cout << endl;
}

int main() {
  int arr[] = {64, 34, 25, 12, 22, 11, 90};
  int n = sizeof(arr) / sizeof(arr[0]);

  cout << "Original array: ";
  printArray(arr, n);

  mergeSort(arr, 0, n - 1);

  cout << "Sorted array: ";
  printArray(arr, n);

  return 0;
}
`
    },
    {
        lang: 'Java',
        code: `
public class MergeSort {
  public static void merge(int[] arr, int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;

    int[] leftArr = new int[n1];
    int[] rightArr = new int[n2];

    for (int i = 0; i < n1; i++)
      leftArr[i] = arr[left + i];
    for (int j = 0; j < n2; j++)
      rightArr[j] = arr[mid + 1 + j];

    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
      if (leftArr[i] <= rightArr[j]) {
        arr[k] = leftArr[i];
        i++;
      } else {
        arr[k] = rightArr[j];
        j++;
      }
      k++;
    }

    while (i < n1) {
      arr[k] = leftArr[i];
      i++;
      k++;
    }

    while (j < n2) {
      arr[k] = rightArr[j];
      j++;
      k++;
    }
  }

  public static void mergeSort(int[] arr, int left, int right) {
    if (left < right) {
      int mid = left + (right - left) / 2;

      mergeSort(arr, left, mid);
      mergeSort(arr, mid + 1, right);

      merge(arr, left, mid, right);
    }
  }

  public static void printArray(int[] arr) {
    for (int i = 0; i < arr.length; i++)
      System.out.print(arr[i] + " ");
    System.out.println();
  }

  public static void main(String[] args) {
    int[] arr = {64, 34, 25, 12, 22, 11, 90};

    System.out.print("Original array: ");
    printArray(arr);

    mergeSort(arr, 0, arr.length - 1);

    System.out.print("Sorted array: ");
    printArray(arr);
  }
}
`
    },
    {
        lang: 'Python',
        code: `
def merge_sort(arr):
  if len(arr) <= 1:
    return arr
  mid = len(arr) // 2
  left_half = merge_sort(arr[:mid])
  right_half = merge_sort(arr[mid:])
  return merge(left_half, right_half)

def merge(left, right):
  merged = []
  while left and right:
    if left[0] <= right[0]:
      merged.append(left.pop(0))
    else:
      merged.append(right.pop(0))
  merged.extend(left if left else right)
  return merged

arr = [64, 34, 25, 12, 22, 11, 90]
sorted_arr = merge_sort(arr)
print(sorted_arr)
`
    },
];