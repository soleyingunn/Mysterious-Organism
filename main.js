// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}
// console.log(returnRandBase());

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (orgNumber, strand) => {
  let newPAequor = {
    specimenNum: orgNumber, 
    dna: strand,
    mutate() {
      let selectRandom = Math.floor(Math.random() * 15);
      console.log(selectRandom);
      let currentBase = this.dna[selectRandom];
      console.log(currentBase);
      // This section changes the currentBase of if is the same as newBase
      let newBase = returnRandBase();
      while(newBase === currentBase) {
        newBase = returnRandBase();
      }
      console.log('newBase = ' + newBase);
      // Here we simulate dna change by changing the value of the selceted base 
      this.dna[selectRandom] = newBase;
      return this.dna;
    },
    compareDNA(pAequorCompare) {
      let compareDna = pAequorCompare.dna;
      let numPairs = 0;
      // Here we compare the dna of this pAqeuor to compareDna
      for (let i = 0; i < 15; i++) {
        let isMatching = this.dna[i] === compareDna[i];
        if (isMatching) {
          numPairs++;
        }
      }
      let percentage = (numPairs / 15) * 100;

      console.log(`specimen #${this.specimenNum} and specimen #${pAequorCompare.specimenNum}  have ${percentage}% DNA in common.`)
    },
    // P. aequor have a likelier chance of survival if their DNA is made up of at least 60% 'C' or 'G' bases
    willLikelySurvive() {
      let cGBases = 0;
      for (let i = 0; i < 15; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          cGBases++;
        }
      }
      if (cGBases >= 9) {
        return true;
      } else {
        return false;
      }
    }
  }
  return newPAequor;
};
// 30 instances that are likely to survive it's environment
let colony = [];
while (colony.length < 30) {
  let organism = pAequorFactory(colony.length, mockUpStrand());
  if (organism.willLikelySurvive()) {
    colony.push(organism);
  }
}
console.log(colony);

//Test zone 

// for (let i = 0; i < 2; i++) {
//   // let myOrgNumber = 4;
//   let myStrand = mockUpStrand();
//   let myOrganism = pAequorFactory(i, myStrand);
//   console.log(myOrganism);
// }

// let newDna = myOrganism.mutate(); 
// console.log(newDna);


// let organismOne = pAequorFactory(1, mockUpStrand());
// let organismTwo = pAequorFactory(2, mockUpStrand());
// organismOne.compareDNA(organismTwo);

// console.log(organismOne.willLikelySurvive());








