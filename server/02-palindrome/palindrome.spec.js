describe('the palindrome canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

let isPalindrome = () => {
  return true;
};

describe('Given a palindrome function ', () => {
  it('should return true when called with radar', () => {
    expect(isPalindrome('radar')).toBe(true);
  });
});