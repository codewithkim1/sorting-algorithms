package main

import "fmt"

// BubbleSort sorts an array using the bubble sort algorithm
func BubbleSort(arr []int) {
	n := len(arr)
	for i := 0; i < n-1; i++ {
		for j := 0; j < n-i-1; j++ {
			if arr[j] > arr[j+1] {
				// Swap elements
				arr[j], arr[j+1] = arr[j+1], arr[j]
			}
		}
	}
}

// InsertionSort sorts an array using the insertion sort algorithm
func InsertionSort(arr []int) {
	n := len(arr)
	for i := 1; i < n; i++ {
		key := arr[i]
		j := i - 1
		for j >= 0 && arr[j] > key {
			arr[j+1] = arr[j]
			j--
		}
		arr[j+1] = key
	}
}

// SelectionSort sorts an array using the selection sort algorithm
func SelectionSort(arr []int) {
	n := len(arr)
	for i := 0; i < n-1; i++ {
		minIndex := i
		for j := i + 1; j < n; j++ {
			if arr[j] < arr[minIndex] {
				minIndex = j
			}
		}
		// Swap elements
		arr[minIndex], arr[i] = arr[i], arr[minIndex]
	}
}

// MergeSort sorts an array using the merge sort algorithm
func MergeSort(arr []int) []int {
	merge := func(left, right []int) []int {
		result := []int{}
		leftIndex, rightIndex := 0, 0

		for leftIndex < len(left) && rightIndex < len(right) {
			if left[leftIndex] < right[rightIndex] {
				result = append(result, left[leftIndex])
				leftIndex++
			} else {
				result = append(result, right[rightIndex])
				rightIndex++
			}
		}

		result = append(result, left[leftIndex:]...)
		result = append(result, right[rightIndex:]...)
		return result
	}

	if len(arr) <= 1 {
		return arr
	}

	mid := len(arr) / 2
	left := MergeSort(arr[:mid])
	right := MergeSort(arr[mid:])

	return merge(left, right)
}

func main() {
	arr := []int{64, 34, 25, 12, 22, 11, 90}
	BubbleSort(arr)
	fmt.Println("Bubble Sorted array is:", arr)

	arr = []int{64, 34, 25, 12, 22, 11, 90}
	InsertionSort(arr)
	fmt.Println("Insertion Sorted array is:", arr)

	arr = []int{64, 34, 25, 12, 22, 11, 90}
	SelectionSort(arr)
	fmt.Println("Selection Sorted array is:", arr)

	arr = []int{64, 34, 25, 12, 22, 11, 90}
	arr = MergeSort(arr)
	fmt.Println("Merge Sorted array is:", arr)
}
