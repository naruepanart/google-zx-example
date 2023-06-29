#!/usr/bin/env zx

const crypto = require("crypto");
const { plus, minus } = require("./sum");

const main = async () => {
    const x = plus(16, 15);
    console.log("The sum of the two numbers is:", x);
};

main();
console.log(crypto.randomUUID());