const fibonacci = function(n) {
    n = +n;
    if (n == 1 || n == 2) {
        return 1;
    } else if ( n <= 0) {
        return "OOPS";
    }
    let previus = 1;
    let next = 1;
    for (let i = 3; i <= n; i++) {
        let temporal = next;
        next += previus;
        previus = temporal;
    }
    return next; 
};

module.exports = fibonacci;
