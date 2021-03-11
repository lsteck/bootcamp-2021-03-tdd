describe('the palindrome canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

let isPalindrome = (word) => {
  const reversedWord = word.split('').reverse().join('');

  return word === reversedWord;
};

describe('Given a palindrome function ', () => {
  it('should return true when called with radar', () => {
    expect(isPalindrome('radar')).toBe(true);
  });

  it('should return false when called with dog', () => {
    expect(isPalindrome('dog')).toBe(false);
  });
});