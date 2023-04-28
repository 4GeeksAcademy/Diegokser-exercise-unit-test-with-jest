const {fromDollarToYen, fromEuroToDollar, fromYenToPound} = require ('./app.js');

test ('Convertir dollar a yen',() => {
    expect (fromDollarToYen(1)).toBe (106.58333333333334)
});

test ('Convertir euro a dolar', () => {
    expect (fromEuroToDollar(1)).toBe (1.2)
});

test ('Convertir yen a pound', () => {
    expect (fromYenToPound(1)).toBe (0.006254886630179828)
});
