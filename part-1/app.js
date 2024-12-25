let baseURL = "http://numbersapi.com";

// 1
let favNum = 3;
async function part1() {
    let data = await $.getJSON(`${baseURL}/${favNum}?json`);
    console.log(data);
}
part1();

// 2
const nums = [1, 2, 3];
async function part2() {
    let data = await $.getJSON(`${baseURL}/${nums}?json`);
    console.log(data);
    Object.entries(data).forEach(([key, value]) => $("body").append(`<p>${key}: ${value}</p>`))
}
part2();

// 3
async function part3() {
    let facts = await Promise.all(
        Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNum}?json`))
    );
    facts.forEach(data => {
        $('body').append(`<p>${data.text}</p>`);
    });
}
part3();
