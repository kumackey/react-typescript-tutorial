#include <iostream>
#include <vector>
#include <limits>
using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> Rt(n);
    for(int i = 0; i < n; ++i) {
        cin >> Rt[i];
    }

    int maxProfit = -numeric_limits<int>::max();
    int minPrice = numeric_limits<int>::max();

    for (int i = 0; i < n; ++i) {
        maxProfit = max(maxProfit, Rt[i] - minPrice);
        minPrice = min(minPrice, Rt[i]);
    }

    cout << maxProfit << endl;

    return 0;
}