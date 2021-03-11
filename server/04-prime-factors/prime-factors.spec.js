describe('the prime factors canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

const primeFactors = number => {
  if(number === 1) return []
  return [2];
};

describe('a prime factors function should', () => {
  it('return none for 1', () => {
    expect(primeFactors(1)).toEqual([]);
  });
  
  it('return 2 for 2', () => {
    expect(primeFactors(2)).toEqual([2]);
  });

  it.todo('return 3 for 3');
  it.todo('return 2, 2 for 4');
  it.todo('return 5 for 5');
  it.todo('return 2, 3 for 6');
  it.todo('return 7 for 7');
  it.todo('return 2, 2, 2 for 8');
  it.todo('return 3, 3 for 9');
});