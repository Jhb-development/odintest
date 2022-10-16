function capitalise(string) {
        
    let Upput = string; 
    let outpt = string;
    outpt = outpt.slice(1).toLowerCase();
    Upput = string.charAt(0).toUpperCase();
    let result = (Upput + outpt);
    console.log(result)
    }

    capitalise("hAVAscript");