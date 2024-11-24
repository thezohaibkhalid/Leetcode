class Solution {
public:
    long long maxMatrixSum(vector<vector<int>>& matrix) {
        int rows = matrix.size();
        int cols = matrix[0].size();
        long long original_sum = 0;
        int min_abs_value = INT_MAX;
        int negative_count = 0;

        for (int i = 0; i < rows; ++i) {
            for (int j = 0; j < cols; ++j) {
                original_sum += abs(matrix[i][j]);
                min_abs_value = min(min_abs_value, abs(matrix[i][j]));
                if (matrix[i][j] < 0) {
                    negative_count++;
                }
            }
        }

        if (negative_count % 2 != 0) {
            original_sum -= 2 * min_abs_value;
        }

        return original_sum;
    }
};
