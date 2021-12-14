function solution(A) {
    let slope = undefined,
        lastElevation = undefined,
        sites = 0,
        lastIndex = A.length - 1;
    for (let i = 0; i < A.length; i++) {
        let elevation = A[i];
        if (lastElevation === undefined) {
            sites++;
        } else if (lastElevation != elevation) {
            const thisDirection = lastElevation > elevation
                ? "down"
                : "up";
            if (slope === undefined) {
                if (i == lastIndex) {
                    sites++;
                }
                slope = thisDirection;
            } else if (thisDirection != slope) {
                sites++;
                slope = thisDirection;
            } else if (i == lastIndex) {
                sites++;
            }
        }
        lastElevation = elevation;
    }
    return sites;
}

module.exports = {
    solution
};
