let BugSeverity=1;
if(BugSeverity===9 || BugSeverity===10){
    console.log(`Input : ${BugSeverity}\nOutput :Severity :Critical Block Release`)
}else if(BugSeverity===8 || BugSeverity===7){
    console.log(`Input : ${BugSeverity}\nOutput :Severity :High`)
}else if(BugSeverity ===4 || BugSeverity ===5||BugSeverity===6){
    console.log(`Input : ${BugSeverity}\nOutput :Severity :Medium`)
}else if(BugSeverity ===1 || BugSeverity ===2||BugSeverity===3){
    console.log(`Input : ${BugSeverity}\nOutput :Severity :Low`)
}