var _; // globals

describe("About Applying What We Have Learnt", function() {
  var products;

  beforeEach(function () { 
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {
    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {
      var productsICanEat = [];

      /* solve using filter() & all() / any() */
      productsICanEat = _.filter(products, function(product){
        return (product.containsNuts === false && _.all(product.ingredients, function(i){
          return i !== "mushrooms";
        }))
      });

      expect(productsICanEat.length).toBe(1);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {
    var sum = 0;

    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    
    expect(sum).toBe(sum);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {
    var sum = _.reduce(_.range(0,1000), function(memo, num){ 
      if (num % 3 === 0 || num % 5 === 0) {return memo + num;} 
      return memo;});    /* try chaining range() and reduce() */

    expect(233168).toBe(sum);
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(ingredientCount.mushrooms);
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    /* chain() together map(), flatten() and reduce() */

    expect(ingredientCount['mushrooms']).toBe(ingredientCount.mushrooms);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR ADVANCED */
  
  it("should find the largest prime factor of a composite number", function () {
    var largestPrimeFactor = function(num){
      num = Math.floor(num / 2);
      var prime;

      for(var i = 2; i <= num; i++) {
        if(num % i === 0){
          num /= i;
          prime = i;
        }
      }
      return prime;
    };

    expect(largestPrimeFactor(50)).toBe(5);
  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {
    var reverse = function(str){
      var result = '';
      for(var i = str.length-1; i >= 0; i--){
        result += str[i];
      }
      return result;
    }
    
    var largestPalindrome = function(num1, num2){
      var sum;
      var largest = 0;

      for(var i = num1; i >= 100; i--){
        for(var j = num2; j >= 100; j--){

          sum = i * j;
          sum += '';
          if(sum === reverse(sum)){
            sum = parseInt(sum);
            if(sum > largest){
              largest = sum;
            }
          }
        }
      }

      return largest;
    };

    expect(largestPalindrome(999,999)).toBe(906609);
  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {
    var gcd = function(n1, n2){
      if(n1 === n2){
        return n1;
      }

      var r;
      while(n2 != 0){
        r = n1 % n2;
        n1 = n2;
        n2 = r;
      }
      return n1;
    }

    var lcm = function(n1,n2){
      return n1 * n2 / gcd(n1, n2);
    }

    var t = 1;
    for(var i = 2; i <= 20; i++){
      t = lcm(i, t);
    }

    expect(t).toEqual(232792560);
  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {
    var square = function(num){
      return num * num;
    }

    var squareDifference = function(a, b){
      return Math.abs((square(a) + square(b) ) - square(a+b));
    }

    expect(squareDifference(3, 2)).toBe(12);
  });

  it("should find the 10001st prime", function () {
    var isPrime = function(number){
      if(number <= 1){
        return false;
      }

      index = 2;
      while(index < number){
        if(number % index === 0){
          return false;
        }
        index++;
      }
      return true;
    }

    var count = 1;
    var result;
    var i = 0;

    while(count <= 10001){
      if(isPrime(i) === true){
        result = i;
        count++;
      }
      i++;
    }

    expect(result).toBe(104743);
  });
  
});
