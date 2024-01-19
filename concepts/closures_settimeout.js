// Learning settimeout function and it's closure
// print numbers in order after 1 second

function a() {
    // creating for loop with var key
    for(var i = 1; i<=5; i++) {
        setTimeout(function() {
            console.log(i);
        }, i * 1000);
    }
}

// executing function a
// a();

function b() {
    // creating for loop with let key
    for(let i = 1; i<=5; i++) {
        setTimeout(function() {
            console.log(i);
        }, i * 1000);
    }
}

// executing function b
// b();

function c() {
    // creating children function to use var and achieve the solution
    for(var i = 1; i<=5; i++) {
        function closure(j) {
            setTimeout(function() {
                console.log(j);
            }, j * 1000);
        }
        closure(i);
    }
}

// executing function c
c();

