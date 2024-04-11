// Define String.prototype.toAlternatingCase such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.  


String.prototype.toAlternatingCase = function () {
    let result = '';
    for (i = 0; i < this.length; i++) {
        if (this[i] == this[i].toUpperCase()) {
            result += this[i].toLowerCase();
        } else result += this[i].toUpperCase();
    }
    return result
}