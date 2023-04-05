// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// My Solution: 

function DNAStrand(dna) {
    let newDna = [];
    for (i = 0; i < dna.length; i++) {
        if (dna[i] === 'A') newDna.push('T');
        else if (dna[i] === 'T') newDna.push('A');
        else if (dna[i] === 'C') newDna.push('G');
        else if (dna[i] === 'G') newDna.push('C');
    }
    return newDna.join('')
}