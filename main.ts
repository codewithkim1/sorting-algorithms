class SortingAlgorithms {
    static bubbleSort(arr: number[]): void {
        /**
         * Bubble sort algorithm.
         */
        const n: number = arr.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap elements
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
    }

    static insertionSort(arr: number[]): void {
        /**
         * Insertion sort algorithm.
         */
        const n: number = arr.length;
        for (let i = 1; i < n; i++) {
            let key: number = arr[i];
            let j: number = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
    }

    static selectionSort(arr: number[]): void {
        /**
         * Selection sort algorithm.
         */
        const n: number = arr.length;
        for (let i = 0; i < n - 1; i++) {
            let minIndex: number = i;
            for (let j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            // Swap elements
            [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
        }
    }

    static mergeSort(arr: number[]): number[] {
        /**
         * Merge sort algorithm.
         */
        const merge = (left: number[], right: number[]): number[] => {
            let result: number[] = [];
            let leftIndex: number = 0;
            let rightIndex: number = 0;

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

        const mergeSortRec = (array: number[]): number[] => {
            const length: number = array.length;
            if (length === 1) {
                return array;
            }

            const mid: number = Math.floor(length / 2);
            const left: number[] = array.slice(0, mid);
            const right: number[] = array.slice(mid);

            return merge(mergeSortRec(left), mergeSortRec(right));
        };

        return mergeSortRec(arr);
    }
}

// Example usage:
let arr: number[] = [64, 34, 25, 12, 22, 11, 90];
SortingAlgorithms.bubbleSort(arr);
console.log("Bubble Sorted array is:", arr);
