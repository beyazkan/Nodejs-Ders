function getName(){
    return "Mehmet Ali";
}

function getEmail(){
    return "adanaDeneme@gmail.com";
}

// module.exports.isim_al = getName;
// module.exports.mail_al = getEmail;
// exports.isim_al = getName;
// exports.mail_al = getEmail;

var data = {
    name: "Ali",
    age: 19,
    getMail(){
        return "ali.abc@gmail.com";
    }
}

module.exports = data;