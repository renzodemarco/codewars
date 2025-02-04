// Our online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// My Solution:

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode === correctCode && new Date(currentDate) <= new Date(expirationDate)
}