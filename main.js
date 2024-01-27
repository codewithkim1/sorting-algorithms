class SortingAlgorithms {
    static bubbleSort(arr) {
        /**
         * Bubble sort algorithm.
         */
        const n = arr.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap elements
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    static insertionSort(arr) {
        /**
         * Insertion sort algorithm.
         */
        const n = arr.length;
        for (let i = 1; i < n; i++) {
            let key = arr[i];
            let j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
    }

    static selectionSort(arr) {
        /**
         * Selection sort algorithm.
         */
        const n = arr.length;
        for (let i = 0; i < n - 1; i++) {
            let min_index = i;
            for (let j = i + 1; j < n; j++) {
                if (arr[j] < arr[min_index]) {
                    min_index = j;
                }
            }
            // Swap elements
            let temp = arr[min_index];
            arr[min_index] = arr[i];
            arr[i] = temp;
        }
    }

    static mergeSort(arr) {
        /**
         * Merge sort algorithm.
         */
        const merge = (left, right) => {
            let result = [];
            let leftIndex = 0;
            let rightIndex = 0;

            while (leftIndex < left.length && rightIndex < right.length) {
                if (left[leftIndex] < right[rightIndex]) {
                    result.push(left[leftIndex]);
                    leftIndex++;
                } else {
                    result.push(right[rightIndex]);
                    rightIndex++;
                }
            }

            return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
        };

        const mergeSortRec = (array) => {
            const length = array.length;
            if (length === 1) {
                return array;
            }

            const mid = Math.floor(length / 2);
            const left = array.slice(0, mid);
            const right = array.slice(mid);

            return merge(mergeSortRec(left), mergeSortRec(right));
        };

        return mergeSortRec(arr);
    }
}

// Example usage:
let arr = [64, 34, 25, 12, 22, 11, 90];
SortingAlgorithms.bubbleSort(arr);
console.log("Bubble Sorted array is:", arr);
