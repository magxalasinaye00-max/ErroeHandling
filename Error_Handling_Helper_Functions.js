function validateUserInput(input, type) {
    if (input === undefined || input === null) {
        throw new Error("Input cannot be null or undefined");
    }


  switch (type) {
    case "string":
        if (typeof input !== "string") throw new TypeError("Expected a string");
        if (input.trim()  ==="") throw new Error("String cannot be empty");
        break;    

    case "number":
      if (typeof input !== "number" || isNaN(input)) {
        throw new TypeError("Expected a valid number");
      }
        break;
    case "email":
      if (
        typeof input !== "string" ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)
      ) {
        throw new Error("Invalid email format");
      }
      break;

    default:
      throw new Error(`Unsupported validation type: ${type}`);
    }
  return true;
  
}

function demonstrateErrors() {
    try{
        console.log(nonExistentVariable);
    } catch(err) {
        console.error("Caught a ReferenceError:", err.message);
    }

    try {
        const num = 42;
        num.topUperCase();
    } catch (err) {
        console.error("TypeError caught:", err.message);
    }

    try {
        throw new Error("Custom Application error");
    } catch (err) {
        console.error("Custom Error caught:", err.message);
    }
}

const stringUtils = {
    capitalize(str) {
        validateUserInput(str, "string");
        return str.charAt(0).toUpperCase() + str.slice(1);
    },

    reverse(str) {
        validateUserInput(str, "string");
    return str.split("").reverse().join("");
    },

    isPalindrome(str) {
        validateUserInput(str, "string");
        const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return nomrmalised === narmalized.split("").reverse().join("");
    },

    truncate(str, length) {
        validateUserInput(str, "string");
        if (str.length <=length) return str;
        return str.slice(0, length) + "...";
    },
};

const arrayUtils = {
  unique(arr) {
    if (!Array.isArray(arr)) throw new TypeError("Expected an array");
    return [...new Set(arr)];
  },

  flatten(arr) {
    if (!Array.isArray(arr)) throw new TypeError("Expected an array");
    return arr.flat(Infinity);
  },

  chunk(arr, size) {
    if (!Array.isArray(arr)) throw new TypeError("Expected an array");
    if (typeof size !== "number" || size <= 0)
      throw new Error("Chunk size must be a positive number");

    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  },

  average(arr) {
    if (!Array.isArray(arr)) throw new TypeError("Expected an array");
    const nums = arr.filter((n) => typeof n === "number");
    if (nums.length === 0) return 0;
    return nums.reduce((a, b) => a + b, 0) / nums.length;
  },
};

try {
  validateUserInput("test@example.com", "email");
  console.log(stringUtils.capitalize("hello world"));
  console.log(arrayUtils.chunk([1, 2, 3, 4, 5], 2));
  demonstrateErrors();
} catch (err) {
  console.error("Validation error:", err.message);
}