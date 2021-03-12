const {unusualSpending} = require('./unusual-spending');
const {fetch} = require('./fetch');
const {categorize} = require('./categorize');
const {email} = require('./email');

jest.mock('./fetch');
jest.mock('./categorize');
jest.mock('./email');

describe('unusual spending test suite',() => {
    it('canary show test infrastructure is working',() => {
        expect(true).toBe(true);
    });

    it('orchestrates the collaboration between fetch, categorize and email',() => {
       // Arrange
        const userID = 'userID1';
        
        const payments = [
            {
              month: { year: 2021, month: 3 },
              payments: [
                { amount: 90, catagory: "golf" },
                { amount: 110, catagory: "dinner" },
                { amount: 180, catagory: "golf" },
                { amount: 140, catagory: "dinner" },
              ],
            },
            {
              month: { year: 2021, month: 2 },
              payments: [
                { amount: 80, catagory: "basketball" },
                { amount: 140, catagory: "bicycling" },
                { amount: 700, catagory: "basketball" },
                { amount: 150, catagory: "bicycling" },
              ],
            },
          ];
  
          const categorizedPayments = [
            {
              month: { year: 2020, month: 3 },
              payments: [
                { amount: 270, catagory: "golf" },
                { amount: 250, catagory: "dinner" },
              ],
            },
            {
              month: { year: 2020, month: 2 },
              payments: [
                { amount: 780, catagory: "basketball" },
                { amount: 290, catagory: "bicycling" },
              ],
            },
          ];
          
          fetch.mockReturnValue(payments);
          categorize.mockReturnValue(categorizedPayments);
       // Act

       unusualSpending(userID);
       // Assert
       expect(fetch).toHaveBeenCalledWith(userID);
       expect(categorize).toHaveBeenCalledWith(payments);
       expect(email).toHaveBeenCalledWith(userID, categorizedPayments);

        
    });
});