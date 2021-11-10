const {
    getCircumference,
    getArea,
    getFullName,
    palindrome,
  } = require('./index');
  
  test('test for full name', () => {
    expect(getFullName('Arya', 'Stark')).toBe('Arya Stark');
    expect(getFullName('Anupama', 'Jain')).toBe('Anupama Jain');
    
    expect(getFullName('Arya', 'Stark')).not.toBe('AryaStark');
    expect(getFullName('Anupama', 'Jain')).not.toBe('AnupamaJain');
    
  });
  
  test('test for circumference of the circle', () => {
    expect(getCircumference(2)).toBe(`The circumference is 12.566370614359172`);
    expect(getCircumference(3)).toBe(`The circumference is 18.84955592153876`);
    expect(getCircumference(4)).toBe(`The circumference is 25.132741228718345`);
    expect(getCircumference(7)).not.toBe(`The circumference is 0`);
    expect(getCircumference(8)).not.toBe(`The circumference is 19`);
    expect(getCircumference(9)).not.toBe(`The circumference is 26`);
  });
  
  test('test for area of the circle', () => {
    expect(getArea(2)).toBe(`The area is 12.566370614359172`);
    expect(getArea(3)).toBe(`The area is 28.274333882308138`);
    expect(getArea(4)).toBe(`The area is 50.26548245743669`);
    expect(getArea(7)).not.toBe(`The circumference is 0`);
    expect(getArea(8)).not.toBe(`The circumference is 19`);
    expect(getArea(9)).not.toBe(`The circumference is 26`);
  });


  test('test for palindome', () => {
    expect(palindrome('anna')).toBe(true);
    expect(palindrome('wow')).toBe(true);
    expect(palindrome('mam')).toBe(true);
    expect(palindrome('sunshine')).not.toBe(true);
    expect(palindrome('art')).not.toBe(true);
    expect(palindrome('flowers')).not.toBe(true);
  });