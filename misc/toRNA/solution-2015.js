const toRna = (dna) => {
	const transcription = {
		'A': 'U',
		'C': 'G',
		'G': 'C',
		'T': 'A'
	};

	return dna.split('')
		.reduce((rna, nucl) => rna += transcription[nucl], '');
};