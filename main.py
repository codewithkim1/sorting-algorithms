class SortingAlgorithms:
    @staticmethod
    def bubble_sort(arr):
        """
        Bubble sort algorithm.
        """
        n = len(arr)
        for i in range(n - 1):
            for j in range(0, n - i - 1):
                if arr[j] > arr[j + 1]:
                    arr[j], arr[j + 1] = arr[j + 1], arr[j]

    @staticmethod
    def insertion_sort(arr):
        """
        Insertion sort algorithm.
        """
        for i in range(1, len(arr)):
            key = arr[i]
            j = i - 1
            while j >= 0 and key < arr[j]:
                arr[j + 1] = arr[j]
                j -= 1
            arr[j + 1] = key

    @staticmethod
    def selection_sort(arr):
        """
        Selection sort algorithm.
        """
        for i in range(len(arr)):
            min_index = i
            for j in range(i + 1, len(arr)):
                if arr[min_index] > arr[j]:
                    min_index = j
            arr[i], arr[min_index] = arr[min_index], arr[i]

    @staticmethod
    def merge_sort(arr):
        """
        Merge sort algorithm.
        """
        if len(arr) > 1:
            mid = len(arr) // 2
            left_half = arr[:mid]
            right_half = arr[mid:]

            SortingAlgorithms.merge_sort(left_half)
            SortingAlgorithms.merge_sort(right_half)

            i = j = k = 0

            while i < len(left_half) and j < len(right_half):
                if left_half[i] < right_half[j]:
                    arr[k] = left_half[i]
                    i += 1
                else:
                    arr[k] = right_half[j]
                    j += 1
                k += 1

            while i < len(left_half):
                arr[k] = left_half[i]
                i += 1
                k += 1

            while j < len(right_half):
                arr[k] = right_half[j]
                j += 1
                k += 1


if __name__ == "__main__":
    arr = [64, 34, 25, 12, 22, 11, 90]
    SortingAlgorithms.bubble_sort(arr)
    print("Bubble Sorted array is:", arr)
