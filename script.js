function stringChop(str, size) {
    if (!str) return "";
    size = parseInt(size, 10);

    if (isNaN(size) || size <= 0) return "";

    let result = [];
    for (let i = 0; i < str.length; i += size) {
        result.push(str.substring(i, i + size));
    }
    return result.join(","); 
}

const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
