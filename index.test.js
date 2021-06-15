const fizzBuzz = require('./index');

describe('fizzbuzz()', function(){
   it('returns "FizzBuzz" for multiples of 3 and 5', function(){
      expect(fizzBuzz(15)).toBe('FizzBuzz');
      expect(fizzBuzz(30)).toBe('FizzBuzz');
   });

   it('return Fizz if divisible by 3', function(){
      expect(fizzBuzz(18)).toBe('Fizz');
      expect(fizzBuzz(33)).toBe('Fizz');
   })

   it('return Buzz if divisible by 5', function(){
      expect(fizzBuzz(25)).toBe('Buzz');
      expect(fizzBuzz(110)).toBe('Buzz');
   })

   it('returns the given number for the ones whoch arent divisible by 5 or 3', function(){
      expect(fizzBuzz(32)).toBe(32);
   });
})