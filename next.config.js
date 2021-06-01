// const fs = require("fs");
// const path = require("path");
// const glob = require("glob");
const withSvgr = require("@newhighsco/next-plugin-svgr");

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

module.exports = withSvgr({
	svgrOptions: {
		/* config options here */
	},
});
