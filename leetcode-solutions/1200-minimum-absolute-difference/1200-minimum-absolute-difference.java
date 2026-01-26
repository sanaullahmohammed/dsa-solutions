class Solution {
    public List<List<Integer>> minimumAbsDifference(int[] arr) {
        Arrays.sort(arr);

        List<List<Integer>> result = new ArrayList<List<Integer>>();

        int n = arr.length, minDiff = Integer.MAX_VALUE;

        for(int i = 1; i < n; i++) {
            int diff = arr[i] - arr[i - 1];
            minDiff = Math.min(minDiff, diff);
        }

        for (int i = 1; i < n; i++) {
            int diff = arr[i] - arr[i-1];

            if (diff == minDiff) {
                List<Integer> pair = new ArrayList<Integer>(2);

                pair.add(arr[i-1]);
                pair.add(arr[i]);

                result.add(pair);
            }
        }

        return result;
    }
}
