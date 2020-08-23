
function parseJWT(token:string) {
  let base64URL = token.split('.')[1];
  let base64 = base64URL.replace(/-/g , '+').replace(/_/g , '/');
  
  let jsonPaylod = decodeURIComponent(atob(base64).split('').map(el => {
    return "%" + ( "00" + el.charCodeAt(0).toString(16)).slice(-2);
  }).join('') )
  
  return JSON.parse(jsonPaylod);
}

const MONTHS: Array<any> = [
    { id: 1, name: "January" },
    { id: 2, name: "February" },
    { id: 3, name: "March" },
    { id: 4, name: "April" },
    { id: 5, name: "May" },
    { id: 6, name: "June" },
    { id: 7, name: "July" },
    { id: 8, name: "August" },
    { id: 9, name: "September" },
    { id: 10, name: "October" },
    { id: 11, name: "November" },
    { id: 12, name: "December" }
  ];
  
  const YEARS = (function() {
    let currentYear = new Date().getFullYear() - 18,
      years: Array<number> = [];
  
    for (let i = currentYear; i >= 1960; i--) {
      years.push(i);
    }
  
    return years;
  })();
  
  const DAYS = (function() {
    let days: Array<number> = [];
    for (let i = 1; i <= 31; i++) {
      days.push(i);
    }
    return days;
  })();

  export { 
    MONTHS , 
    DAYS , 
    YEARS , 
    parseJWT
  }