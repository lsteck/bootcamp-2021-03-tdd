describe('the palindrome canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

let isPalindrome = (phrase) => {
  phrase = phrase.toLowerCase().replace(/ /g, '');

  return phrase === reverseOf(phrase);
};

const reverseOf = (value) => value.split('').reverse().join('')

describe('Given a palindrome function ', () => {
  it('should return true when called with radar', () => {
    expect(isPalindrome('radar')).toBe(true);
  });

  it('should return false when called with dog', () => {
    expect(isPalindrome('dog')).toBe(false);
  });

  it('should return true when called with "race car"', () => {
    expect(isPalindrome('race car')).toBe(true);
  });

  it('should return true when called with "mom dad mom"', () => {
    expect(isPalindrome('mom dad mom')).toBe(true);
  });

  it('should return true when called with "Mom Dad Mom"', () => {
    expect(isPalindrome('Mom Dad Mom')).toBe(true);
  });
});
