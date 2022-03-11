var users = {
    "Akmal": {
        name: "Akmal",
        surname: "O'ktamov",
        age: 27,
        salary: 800
    },
    "Oybek": {
        name: "Oybek",
        surname: "Sattorov",
        age: 36,
        salary: 1500
    },
    "Umid": {
        name: "Umid",
        surname: "Abdushukurov",
        age: 21,
        salary: 400
    }
}

function avarageAge(item) {
    var middleAge = 0
    var i = 0
    for(let user in users){
        middleAge += item[user].age 
        i++
    }

    return middleAge / i   
}

function sumSalary(item2) {
    var count = 0;
    var j = 0;
    for (var user in users) {
        count += item2[user].salary 
        j++
    }

    return count
}
console.log( "O'rtacha yoshi : " + avarageAge(users));
console.log( "Oyliklari : " + sumSalary(users));

