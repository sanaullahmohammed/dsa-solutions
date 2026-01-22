class Solution {
    public int minimumPairRemoval(int[] nums) {
        int operations = 0;
        
        while (!isNonDecreasing(nums)) {
            int minSum = Integer.MAX_VALUE;
            int minIndex = -1;
            
            for (int i = 0; i < nums.length - 1; i++) {
                int sum = nums[i] + nums[i + 1];
                if (sum < minSum) {
                    minSum = sum;
                    minIndex = i;
                }
            }
            
            nums = mergePair(nums, minIndex);
            operations++;
        }
        
        return operations;
    }
    
    private boolean isNonDecreasing(int[] nums) {
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] < nums[i - 1]) {
                return false;
            }
        }
        return true;
    }
    
    private int[] mergePair(int[] nums, int index) {
        int[] result = new int[nums.length - 1];
        int j = 0;
        
        for (int i = 0; i < nums.length; i++) {
            if (i == index) {
                result[j++] = nums[i] + nums[i + 1];
                i++;
            } else {
                result[j++] = nums[i];
            }
        }
        
        return result;
    }
}
