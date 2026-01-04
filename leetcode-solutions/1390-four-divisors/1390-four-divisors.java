class Solution {
    public int sumFourDivisors(int[] nums) {
        int sum = 0;

        for(int i = 0; i < nums.length; i++) {
            int numOfFactors = 0;
            int sumOfFactors = 0;
            int num = nums[i];
            int roundedSqrt = (int)(Math.sqrt(num));

            for (int j = 1; j <= roundedSqrt; j++) {
                if (num % j == 0) {
                    numOfFactors++;
                    sumOfFactors += j;

                    if ((num / j) != j) {
                        numOfFactors++;
                        sumOfFactors += (num/j);
                    }
                }
            }

            if (numOfFactors == 4) {
                sum += sumOfFactors;
            }
        }

        return sum;
    }
}
