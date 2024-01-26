# Sorting Algorithms Repository

This repository contains implementations of various sorting algorithms in Python.

## Sorting Algorithms Included

1. **Bubble Sort**: Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.

2. **Insertion Sort**: Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time.

3. **Selection Sort**: Selection sort is a simple in-place comparison-based sorting algorithm that divides the input list into two parts: the sublist of items already sorted and the sublist of items remaining to be sorted.

4. **Merge Sort**: Merge sort is an efficient, stable, comparison-based, divide and conquer sorting algorithm.

## Usage

To use any of the sorting algorithms, simply import the `SortingAlgorithms` class from the `SortingAlgorithms.py` file and call the respective sorting method with your list of elements.

Example:

```python
from SortingAlgorithms import SortingAlgorithms

arr = [64, 34, 25, 12, 22, 11, 90]

SortingAlgorithms.bubble_sort(arr)
print("Bubble Sorted array is:", arr)
