const number=1234562043;
 const format=new Intl.NumberFormat('en-US').format(number);
 console.log(format);

 const value=99.99;
  const formatted=new Intl.NumberFormat('en-US',{
    style:'currency',
    currency:'USD',
    
  }).format(value);
  console.log(formatted);
 
  