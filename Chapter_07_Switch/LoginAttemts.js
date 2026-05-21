let loginattempt=3;

switch(loginattempt)
     {
        case 0:
            console.log(`Input :Attempts= ${loginattempt}\noutput:Login Successful`)
        break;  
        case 1:
            console.log(`Input :Attempts= ${loginattempt}\noutput:2 Attempt left before lockout`)
        break;
        case 2:
            console.log(`Input :Attempts= ${loginattempt}\noutput:1 Attempt left before lockout`)
        break;
        case 3:    
            console.log(`Input :Attempts= ${loginattempt}\noutput:🔒Account Locked-Contact Support`)
            break;
     }