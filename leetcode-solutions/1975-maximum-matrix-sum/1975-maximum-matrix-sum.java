class Solution {
    public long maxMatrixSum(int[][] matrix) {
        int n = matrix.length;

        long sumOfElements = 0; 
        int leastElement = Integer.MAX_VALUE, numOfNegativeNumbers = 0;

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (matrix[i][j] < 0) {
                    numOfNegativeNumbers++;
                }

                int element = Math.abs(matrix[i][j]);

                sumOfElements = (long)element + sumOfElements;

                if (element < leastElement) {
                    leastElement = element;
                }
            }
        }

        if ((numOfNegativeNumbers & 1) == 1) {
            return sumOfElements - (2 * leastElement);
        } else {
            return sumOfElements;
        }
    }
}
