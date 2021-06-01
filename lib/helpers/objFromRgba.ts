const opacityNames = [
	"0",
	"5",
	"10",
	"15",
	"20",
	"25",
	"30",
	"35",
	"40",
	"45",
	"50",
	"55",
	"60",
	"65",
	"70",
	"75",
	"80",
	"85",
	"90",
	"95",
];

export const objFromRgba = (rgbaValue: string, increment = 0.05) => {
	const result = { solid: rgbaValue };
	for (let i = 0; i <= 20; i++) {
		let value = rgbaValue.replace(
			/rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,
			`rgba$1,${(i * increment).toFixed(2)})`
		);
		result[opacityNames[i]] = value;
	}
	return result;
};
