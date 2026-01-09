// Helper: Check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

// Helper: Get all rotations of a number
function getRotations(num) {
    const str = num.toString();
    const rotations = [];
    
    for (let i = 0; i < str.length; i++) {
        const rotated = str.slice(i) + str.slice(0, i);
        rotations.push(parseInt(rotated));
    }
    
    return rotations;
}

function isCircularPrime(n) {    
    // Check if all rotations are prime
    const rotations = getRotations(n);
    return rotations.every(rotation => isPrime(rotation));
}
