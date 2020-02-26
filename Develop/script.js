




var char = 'abcdefghijklmnopqrstuvwxyz';
let charUpp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num = '0123456789';
var sym = '!@#$%^&*=-_';





let characters = ('char', 'charUpp')
console.log(password(7, characters))

function password(l,characters){
		let pwd = '';
    for(let i = 0; i<l; i++){
    		pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}






