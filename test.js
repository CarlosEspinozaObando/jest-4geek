const { sum, fromEuroToDollar, fromDollarToYen, fromYanToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);

    expect(total).toBe(23);
});

test('from dollar to yen', () => {
    let yens = 2;
    let total = fromDollarToYen(yens);

    expect(total).toBe(217.56);
});

test('from euro to dolar', () => {
    let total = fromEuroToDollar(1);

    expect(total).toBe(1.2);
});

test('from tan to pound', () => {
    let total = fromYanToPound(1);

    expect(total).toBe(0.0065);
});