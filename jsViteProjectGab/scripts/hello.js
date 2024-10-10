export function moduleHello(name) {
    console.log('Bonjour depuis hello.js');
    alert(`Bonjour ${name}`)
    return `Bonjour depuis hello.js : ${name}`
}
console.log(window.location.href); // Affiche l'URL actuelle