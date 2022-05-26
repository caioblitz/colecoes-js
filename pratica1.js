function getAdmins(map) {
    let admins = [];
for ([key,value] of map){
if (value ==='Admin'){
    admins.push(key);
}
}
return admins;
}



const usuarios = new Map ();

usuarios.set ('Caio', 'Admin');
usuarios.set ('Thais', 'Admin');
usuarios.set ('Tina', 'Usuer');
usuarios.set ('Will', 'Admin');

console.log(getAdmins(usuarios));