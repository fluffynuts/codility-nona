const { solution } = require("../src");

describe(`index`, () => {
    it(`should return a single point for a single input`, async () => {
        // Arrange
        const input = [ 3 ];
        // Act
        const result = solution(input);
        // Assert
        expect(result)
            .toEqual(1);
    });

    it(`should return a single point for double input of same values`, async () => {
        // Arrange
        const
            data = [ 3, 3 ],
            expected = 1;
        // Act
        const result = solution(data);
        // Assert
        expect(result)
            .toEqual(expected);
    });

    it(`should return two sites for two points of different elevation`, async () => {
        // Arrange
        const
            data = [ 1, 2],
            expected = 2;
        // Act
        const result = solution(data);
        // Assert
        expect(result)
            .toEqual(expected);
    });

    it(`should return 3 sites for a single hill bounded by the edge of the world`, async () => {
        // Arrange
        const
            data = [ 1, 2, 3, 2, 1 ],
            expected = 3;
        // Act
        const result = solution(data);
        // Assert
        expect(result)
            .toEqual(expected);
    });

    it(`should return 4 sites for the reference example`, async () => {
        // Arrange
        const
            data = [ 2, 2, 3, 4, 3, 3, 2, 2, 1, 1, 2, 5 ],
            expected = 4;
        // Act
        const result = solution(data);
        // Assert
        expect(result)
            .toEqual(expected);
    });

    it(`should return 5 sites for a single hill surrounded by mountains`, async () => {
        // Arrange
        const
            data = [ 3, 3, 2, 1, 1, 2, 2, 3, 4, 2, 3, 3, 4, 5 ],
            expected = 5;
        // Act
        const result = solution(data);
        // Assert
        expect(result)
            .toEqual(expected);
    });

    it(`should return 3 sites for a single valley`, async () => {
        // Arrange
        const
            data = [ 5, 4, 3, 2, 1, 2, 3, 4, 5 ],
            expected = 3;
        // Act
        const result = solution(data);
        // Assert
        expect(result)
            .toEqual(expected);
    });

    it(`should return 3 sites for a really wide flat valley`, async () => {
        // Arrange
        const
            data = [ 3, 2, 1, 1, 1, 1, 1, 1, 1, 2, 3 ],
            expected = 3;
        // Act
        const result = solution(data);
        // Assert
        expect(result)
            .toEqual(expected);
    });

    it(`should return 3 sites for a wide hill`, async () => {
        // Arrange
        const
            data = [ 1, 1, 2, 3, 4, 4, 4, 4, 4, 4, 3, 2, 1 ],
            expected = 3;
        // Act
        const result = solution(data);
        // Assert
        expect(result)
            .toEqual(expected);
    });

    it(`should return two sites for a really long up-slope`, async () => {
        // Arrange
        const
            data = [ 1, 2, 2, 3, 3, 4, 5, 6, 7, 8 ],
            expected = 2;
        // Act
        const result = solution(data);
        // Assert
        expect(result)
            .toEqual(expected);
    });

    it(`should return two sites for a really long down-slope`, async () => {
        // Arrange
        const
            data = [ 1, 2, 2, 3, 3, 4, 5, 6, 7, 8 ].reverse(),
            expected = 2;
        // Act
        const result = solution(data);
        // Assert
        expect(result)
            .toEqual(expected);
    });
});
