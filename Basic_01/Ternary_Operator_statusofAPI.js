let ResponseStatus=404;
let StatusOfAPI=ResponseStatus>=200 && ResponseStatus<300?"Successfull":
ResponseStatus>=300 && ResponseStatus<400?"redirection":
ResponseStatus>=400 && ResponseStatus<500?"client error":"Server error";
console.log(StatusOfAPI);


