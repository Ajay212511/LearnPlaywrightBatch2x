let HealthPercentage=90;

if(HealthPercentage===100)
{
    console.log(`Input : ${HealthPercentage}\n Output:🟢 Application Stable`)

}else if(HealthPercentage>=90 && HealthPercentage<100)
{
    console.log(`Input : ${HealthPercentage}\n Output: 🟡 Stable-Investigate Failure`)

}else if(HealthPercentage>=70 && HealthPercentage<90)
{
    console.log(`Input : ${HealthPercentage}\n Output: 🔴UnStable`)

}else if(HealthPercentage<70)
{
    console.log(`Input : ${HealthPercentage}\n Output: 🔴 Broken Build -Block Development`)

}

