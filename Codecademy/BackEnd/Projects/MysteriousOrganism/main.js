// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

function pAequorFactory(id_int, DNA_arr) {
  return {
    //properties
    specimenNum: id_int,
    dna: DNA_arr,
    //Methods
    mutate() {
      let base = "";
      let i = 0;

      for (i = 0; i < this.dna.length; i++){
        base = returnRandBase();
        if (base !== this.dna[i]) { this.dna[i] = base }
        else { i--; }
      }
    },
    compareDNA(pAequor) {
      let i, equal_DNA_count, equal_DNA_percentage;
      i = equal_DNA_count = equal_DNA_percentage = 0;
      let size = this.dna.length;

      for (i = 0; i < size; i++) {
        if (this.dna[i] === pAequor.dna[i]) { equal_DNA_count++; }
      }
      equal_DNA_percentage = equal_DNA_count * 100 / size;
      console.log(`specimen ${this.specimenNum} and specimen ${pAequor.specimenNum} have ${equal_DNA_percentage}% DNA in common`)
  },
  willLikelySurvive(){
    let i, CGcount, CGpercentage;
    i = CGcount = CGpercentage = 0;
    let size = this.dna.length;

    for (i = 0; i < size; i++) {
      if (this.dna[i] === "C" || this.dna[i] === "G") { CGcount++; }
    }
    CGpercentage = CGcount * 100 / size;
    if (CGpercentage >= 60) { return true; }
    else { return false; }
  }
}
}

function pAequorBatch(num) {
  let i = 0;
  let pAequorArray = [];

  for (i = 0; i < num; i++) {
    let DNA = mockUpStrand();
    let organism = pAequorFactory(i+1, DNA);
    if (organism.willLikelySurvive()) { pAequorArray.push(organism); }
    else { i--; }
  }

  return pAequorArray;
}

const batch1 = pAequorBatch(30);
console.log(batch1);