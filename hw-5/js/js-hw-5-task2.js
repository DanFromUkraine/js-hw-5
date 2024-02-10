
function slugify(text) {
    text = text.toLowerCase().split(' ').join('-');
    return text;
}

console.log(slugify('Top 10 benefits of React framework'));
console.log(slugify('Azure Static Web Apps are Awesome'));
console.log(slugify('Technical writing tips for non-native English speakers'));