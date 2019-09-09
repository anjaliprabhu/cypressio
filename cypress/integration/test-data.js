export const buttons = new Map([
  ['=' , '[aria-label="equals"]'],
  ['+' , '[aria-label="plus"]'],
  ['−' , '[aria-label="minus"]'],
  ['×' , '[aria-label="multiply"]'],
  ['÷' , '[aria-label="divide"]'],
  ['CE' , '[aria-label="clear entry"]'],
  ['AC' , '[aria-label="all clear"]'],
  ['.' , '[aria-label="point"]'],
  ['0' , '[jsname="bkEvMb"]'],
  ['1' , '[jsname="N10B9"]'],
  ['2' , '[jsname="lVjWed"]'],
  ['3' , '[jsname="KN1kY"]'],
  ['4' , '[jsname="xAP7E"]'],
  ['5' , '[jsname="Ax5wH"]'],
  ['6' , '[jsname="abcgof"]'],
  ['7' , '[jsname="rk7bOd"]'],
  ['8' , '[jsname="T7PMFe"]'],
  ['9' , '[jsname="XoxYJ"]']
]);

export const additionTestCases = new Map([
  [['1','+','2','='] , '3'],           // addition of 2 postivie numbers
  [['1','2','+','2','3','='] , '35']    // addition of 2 postivie numbers
]);

export const subtractionTestCases = new Map([
  [['6','−','2','='] , '4'],            // check the subtraction of bigger number with smaller number
  [['1','−','2','='] , '-1']           // check the subtraction of smaller number with bigger number
]);

export const multiplicationTestCases = new Map([
  [['1','×','2','='] , '2'],            // check the multiplication of two positive numbers
  [['−','1','×','2','='] , '-2'],       // check the multiplication of with one negative number
  [['−','1','×','−','2','='] , '2'],    // check the multiplication of with two negative numbers
  [['−','.','5','×','−','.','5','='] , '0.25'],    // check the multiplication of with two decimal numbers
  [['9','9','9','9','9','9','9','×','9','9','9','9','9','9','='] , '9.999989e+12'] //// check the multiplication of bigger numbers
]);

export const divisionTestCases = new Map([
  [['2','÷','2','='] , '1'],            // check the regular division
  [['1','÷','2','='] , '0.5'],          // check the division produces decimal numbers
  [['1','÷','−','2','='] , '-0.5'],       // check the division with one negative number
  [['−','1','÷','−','1','='] , '1']    // check the division with tow negative numbers
]);

export const clearEntryTestCases = new Map([
  [['2','CE'] , '0'],                   // check if CE button works
  [['3','CE','2'] , '2'],               // check if CE button works fine and check the entries after clicking CE
  [['4','CE','1','+','1','='] , '2'],   // check if CE button works  and followed by an arthimetic operation
  [['5','+','2','=','AC'] , '0']       // check if AC button works
]);

export const allClearTestCases = new Map([
  [['5','+','2','=','AC'] , '0']       // check if AC button works
]);

export const decimalNumberTestCases = new Map([
  [['1','.','2','='] , '1.2'],          // check the division with decimal numbers
  [['1','.','2','+',".",'8','='] , '2'] // check the addition of decimal numbers
]);

export const negativeTestCases = new Map([
  [['1','÷','0','='] , 'Infinity']
]);
