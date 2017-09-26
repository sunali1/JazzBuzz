describe('Javabuzz', function() {

  var javabuzz;
  beforeEach(function() {
    javabuzz = new Javabuzz();
  });
  describe('knows when a number is', function() {

    it('divisible by 3', function () {
      expect(javabuzz.isDivisbleByThree(3)).toBe(true);
    });

    it('returns false if not divisible by 3', function() {
    expect(javabuzz.isDivisbleByThree(4)).toBe(false);
    });

    it('divisible by 5', function() {
      expect(javabuzz.isDivisbleByFive(5)).toBe(true);
    });

    it('returns false if not divisible by 5', function() {
      expect(javabuzz.isDivisbleByFive(6)).toBe(false);
    });

    it('divisible by 15', function() {
      expect(javabuzz.isDivisibleByThreeAndFive(15)).toBe(true);
    });

    it('returns false if not divisible by 15', function() {
      expect(javabuzz.isDivisibleByThreeAndFive(16)).toBe(false);
    });
  });
});
