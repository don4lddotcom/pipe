const generateRandomNumber = require('./index');
test('generateRandomNumber should return a number between 1 and 100', () => {
    const randomNumber = generateRandomNumber();
    expect(randomNumber).toBeGreaterThanOrEqual(1);
    expect(randomNumber).toBeLessThanOrEqual(100);
}
);