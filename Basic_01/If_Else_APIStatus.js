let StatusMessage;
let ResponseMessage=404;
if(ResponseMessage>=200 && ResponseMessage<201)
{
    StatusMessage="Successfull";
}else if(ResponseMessage>=201 && ResponseMessage<300){
    StatusMessage="Created";
}else if(ResponseMessage>=300 && ResponseMessage<400){
    StatusMessage="redirection";
}else if(ResponseMessage>=400 && ResponseMessage<401){
    StatusMessage="Bad Request";
}else if(ResponseMessage>=401 && ResponseMessage<402){
    StatusMessage="Unauthorized";
}else if(ResponseMessage>=402 && ResponseMessage<403){
    StatusMessage="Payment Required";
}else if(ResponseMessage>=403 && ResponseMessage<404){
    StatusMessage="Forbidden";
}else if(ResponseMessage>=404 && ResponseMessage<500){
    StatusMessage="Not Found";
}else
{
    StatusMessage="Server error";
}
console.log(StatusMessage);