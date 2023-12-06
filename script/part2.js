let n = 13;
// Increment n until the next prime is found
n++;
while (true) {
    let isPrime = true;
    // Check if the number is prime
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
    // If the number is prime, log it and break the loop
    if (isPrime) {
        console.log("The next prime after is: ", n);
        break;
    }
    // Increment n to check the next number
    n++;
}