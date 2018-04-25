function initTest (n) {
    return (new Array(n)).fill().map((item, i) => i);
}

function testTask (d) {
    return d * 2 * 3 - 1 + d;
}

function testWhile (data, task) {
    console.time("While");
    let i = len = data.length;
    while(--i) {
        task(data[len-i]);
    }
    console.timeEnd("While");
}

function testFor(data, task) {
    console.time("For");
    let i = 0;
    for (; i < data.length; i++) {
        task(data[i]);
    }
    console.timeEnd("For");
}

function testForEach (data, task) {
    console.time("ForEach");
    data.forEach(task);
    console.timeEnd("ForEach");
}

function testForOf (data, task) {
    console.time("ForOf");
    for (const item of data) {
        task(item);
    }
    console.timeEnd("ForOf");
}

function testForIn (data, task) {
    console.time("ForIn");
    for (const i in data) {
        task(data[i]);
    }
    console.timeEnd("ForIn");
}

const n = 100000;
const data = initTest(n);

console.log("test on array of", n, "elements");

testFor(data, testTask);

testForEach(data, testTask);

testForOf(data, testTask);

testForIn(data, testTask);

testWhile(data, testTask);
