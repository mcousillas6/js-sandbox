const myFunction = require('../index');

describe('Test function behaviour', () => {
  it('should work', () => {
    const result = myFunction();
    expect(result).toEqual(1);
  });
});
