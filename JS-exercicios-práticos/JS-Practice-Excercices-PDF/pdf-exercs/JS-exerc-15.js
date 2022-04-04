//write a js program to replace the first character in a string (should contain at least one digit)
//with $ character

//primeiro método

const replaceChar = (str) => {
    if (str.length > 0) {
        let strFinal = `$${str.slice(1)}`;
        return strFinal;
    }
};

//segundo método: ternário

const replaceChar2 = (str2) =>
    str2.length > 0 ? `$${str2.slice(1)}` : "formato inválido";

//usando .replace

const replaceChar3 = (str3) => str3.replace(str3[0], "$");
