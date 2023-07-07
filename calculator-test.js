
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 1000, rate: 0.1, years: 1})).toEqual("87.92");
  expect(calculateMonthlyPayment({amount: 1000, rate: 0.1, years: 5})).toEqual("21.25");
  expect(calculateMonthlyPayment({amount: 3000, rate: 0.000001, years: 5})).toEqual("50.00");
  expect(calculateMonthlyPayment({amount: 50000, rate: 0.1995, years: 5})).toEqual("1323.30");
});


it("should return a result with 2 decimal places", function() {
  expect(formatWithTwoDecimals(23.47)).toEqual("23.47");
  expect(formatWithTwoDecimals(23)).toEqual("23.00");
  expect(formatWithTwoDecimals(23.2)).toEqual("23.20");
});

/// etc
