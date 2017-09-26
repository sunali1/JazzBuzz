describe('Javabuzz', function() {

  var javabuzz;

  describe('knows when a number is', function() {

    it('divisible by 3', function () {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisbleByThree(3)).toBe(true);
    });

    it('returns false if not divisible by 3', function() {
    javabuzz = new Javabuzz();
    expect(javabuzz.isDivisbleByThree(4)).toBe(false);
    });

    it('divisible by 5', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisbleByFive(5)).toBe(true);
    });

    it('returns false if not divisible by 5', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisbleByFive(6)).toBe(false);
    });

    it('divisible by 15', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByThreeAndFive(15)).toBe(true);
    });

    it('returns false if not divisible by 15', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByThreeAndFive(16)).toBe(false);
    });
  });
});

// describe('Javabuzz', function() {
//
//   var javabuzz;
//
//   describe('knows when a number is', function() {
//
//     it('divisible by 3', function() {
//       javabuzz = new Javabuzz();
//       expect(isDivisibleByThree(3)).toBe(true);
//     });
//
//   });
//
// });
