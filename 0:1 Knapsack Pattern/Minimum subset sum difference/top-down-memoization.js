//O(N*C) time | O(N∗C) space
//where N is the total number of elements and S is the total sum of all numbers

const canPartition = (num) => {
    const dp = [];
    return canPartitionRecursive(dp, num, 0, 0, 0);
};

const canPartitionRecursive = (dp, num, currentIndex, sum1, sum2) => {
    //base checks
    if (currentIndex === num.length) {
        return Math.abs(sum1 - sum2);
    }

    dp[currentIndex] = dp[currentIndex] || [];

    if (typeof dp[currentIndex][sum1] === 'undefined') {
        // recursive call after including the number at the currentIndex in the first set
        const diff1 = canPartitionRecursive(dp, num, currentIndex + 1, sum1 + num[currentIndex], sum2);

        // recursive call after including the number at the currentIndex in the second set
        const diff2 = canPartitionRecursive(dp, num, currentIndex + 1, sum1, sum2 + num[currentIndex]);

        dp[currentIndex][sum1] = Math.min(diff1, diff2);
    }

    //console.log(`${dp}`);
    return dp[currentIndex][sum1];
};

console.log(`Minimum subset difference is: ---> ${canPartition([1, 2, 3, 9])}`);
console.log(`Minimum subset difference is: ---> ${canPartition([1, 2, 7, 1, 5])}`);
console.log(`Minimum subset difference is: ---> ${canPartition([1, 3, 100, 4])}`);