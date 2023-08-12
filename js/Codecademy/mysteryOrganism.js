// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (uniqueNum, dnaBasesArr) => {
  function specimen() {
    return {
      specimenNum: uniqueNum,
      dna: dnaBasesArr,

      mutate() {
				randBase = returnRandBase();
				thisRandBase = Math.floor(Math.random() * dnaBasesArr.length);
				while (randBase === this.dna[thisRandBase]) {
					randBase = returnRandBase();
				}
				this.dna[thisRandBase] = randBase;
			},

      compareDNA(that) {
        let same = 0;
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === that.dna[i]) {
            same++;
          }
        }
					return ((same / this.dna.length) * 100).toFixed(2);
			},

			willLikelySurvive() { // bool
				let minimum = 0.6
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === 'C' || this.dna[i] === 'G') {
            minimum++;
          }
        }
				return minimum / this.dna.length >= 0.6
			},

			complementStrand() { //arr
				const complement = [];
				for (let i = 0; i < this.dna.length; i++) {
					switch (this.dna[i]) {
						case 'A':
							complement.push('T')
							break;
						case 'T':
							complement.push('A')
							break;
						case 'G':
							complement.push('C')
							break;
						default:
							complement.push('G')
					};
				}
			}
		};
	}
	return specimen();
};

const organisms = []
let i = 1
while (organisms.length < 30){
	let newOrganism = pAequorFactory(i, mockUpStrand());
	if (newOrganism.willLikelySurvive()){
		organisms.push(newOrganism)
		i++
	}
}
for (let i = 0; i < 30; i++) {
}
organisms.forEach((organism) => {
  console.log(`Specimen #${organism.specimenNum}: DNA - ${organism.dna.join(', ')}`);
});
