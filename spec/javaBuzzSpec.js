describe('Javabuzz', function() {

  var javabuzz;

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe('knows when a number is', function() {

    it('divisible by 3', function () {
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('returns false if not divisible by 3', function() {
    expect(javabuzz.isDivisibleByThree(4)).toBe(false);
    });

    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('returns false if not divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(6)).toBe(false);
    });

    it('divisible by 15', function() {
      expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);
    });

    it('returns false if not divisible by 15', function() {
      expect(javabuzz.isDivisibleByFifteen(16)).toBe(false);
    });
  });
});
