// Write your solution here
let statuscode = 401;
switch (statuscode) {
  case 1:
    if (statuscode === 200) {
      console.log(`status code:${statuscode}\n Result :"PASS - OK: Request successful"`)
    }
    break;
    case 2:
    if (statuscode === 201) {
      console.log(`status code:${statuscode}\n Result :"PASS - Created: Resource created successfully"`)
    }
    break;
    case 3:
    if (statuscode === 301) {
      console.log(`status code:${statuscode}\n Result :"WARNING - Moved Permanently: URL has changed"`)
    }
    break;
    case 4:
    if (statuscode === 400) {
      console.log(`status code:${statuscode}\n Result :"FAIL - Bad Request: Check request payload"`)
    }
    break;
    case 5:
    if (statuscode === 401) {
      console.log(`status code:${statuscode}\n Result :"FAIL - Unauthorized: Check auth token"`)
    }
    break;
    case 6:
    if (statuscode === 403) {
      console.log(`status code:${statuscode}\n Result :"FAIL - Forbidden: Insufficient permissions"`)
    }
    break;
     case 7:
    if (statuscode === 404) {
      console.log(`status code:${statuscode}\n Result :"FAIL - Forbidden: Insufficient permissions"`)
    }
    break;
     case 8:
    if (statuscode === 500) {
      console.log(`status code:${statuscode}\n Result :"FAIL - Internal Server Error: Backend issue""`)
    }
    break;
  default:
console.log(`status code:${statuscode}\n Result :"UNKNOWN - Unhandled status code"`)

}