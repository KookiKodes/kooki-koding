// const fs = require("fs");
// const path = require("path");
// const glob = require("glob");
// const genImportThemeConfig = async () => {
// 	const srcDir = path.resolve("lib", "static", "themes");
// 	outputDir = path.resolve("lib", "configs");

// 	try {
// 		const themeDirs = glob.sync(srcDir + "/**/*.ts");

// 		if (!fs.existsSync(outputDir)) {
// 			fs.mkdirSync(outputDir, { recursive: true });
// 		}

// 		fs.writeFileSync(
// 			path.join(outputDir, "importThemeConfig.ts"),
// 			`export default ${JSON.stringify(themeDirs)} as string[]`
// 		);
// 	} catch (err) {
// 		console.log(err);
// 	}
// };

// genImportThemeConfig();

module.exports = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
};
