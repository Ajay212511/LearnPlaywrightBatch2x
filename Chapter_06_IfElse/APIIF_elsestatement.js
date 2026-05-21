let statuscode=600;

if(statuscode>=200 && statuscode <300){
    console.log(`Input : ${statuscode}\nOutput : Successfull`)
}else if (statuscode>=300 && statuscode <400)
{
console.log(`Input : ${statuscode}\nOutput : Redirected`)
}else if (statuscode>=400 && statuscode<500)
{
console.log(`Input : ${statuscode}\nOutput : ClientError`)
}else if (statuscode>=500 && statuscode <600)
{
console.log(`Input : ${statuscode}\nOutput :ServerError`)
}else
    {
console.log("Invalid API Status code")
}

