const fs = require("fs-extra");
const { EOL } = require("os");
const shell = require("shelljs");
const version = require("../package.json").version;
const intro = require("./intro.cjs");

// prettier-ignore
const distName = process.env.mode === "demo" ? "dist-demo" : process.env.mode === "docs" ? "dist-docs" : "dist";

if (process.env.mode === "demo" || process.env.mode === "docs") {
  // demo build
  fs.copy(`./src/demo-files`, `./${distName}`, (err) => {
    if (err) throw err;
  });
} else {
  // add disclaimer to js files
  const umdJsWithDisclaimer =
    intro(version) +
    fs.readFileSync(`./${distName}/js/tw-elements-react.umd.min.js`, {
      encoding: "utf-8",
    });

  fs.writeFileSync(
    `./${distName}/js/tw-elements-react.umd.min.js`,
    umdJsWithDisclaimer,
    {
      encoding: "utf-8",
    }
  );

  const esJsWithDisclaimer =
    intro(version) +
    fs.readFileSync(`./${distName}/js/tw-elements-react.es.min.js`, {
      encoding: "utf-8",
    });

  fs.writeFileSync(
    `./${distName}/js/tw-elements-react.es.min.js`,
    esJsWithDisclaimer,
    {
      encoding: "utf-8",
    }
  );

  // build index.min.css from tailwind.scss
  // const command1 = `npx tailwindcss -i ./src/scss/tailwind.scss -o ./${distName}/css/tw-elements-react.min.css --minify`;
  const result1 = shell.exec(
    `npx tailwindcss -i ./src/scss/tailwind.scss -o ./${distName}/css/tw-elements-react.min.css --minify`
  );
  console.log(result1);

  // .map file
  // const command2 =`sass ./${distName}/css/tw-elements-react.min.css ./${distName}/css/tw-elements-react.min.css --style compressed`;
  const result2 = shell.exec(
    `sass ./${distName}/css/tw-elements-react.min.css ./${distName}/css/tw-elements-react.min.css --style compressed`
  );
  console.log(result2);

  if(result1.code === 0 && result2.code === 0) {
    console.log("CSS build success");

    // add disclaimer to css file
    const cssWithDisclaimer =
    intro(version) +
    fs.readFileSync(`./${distName}/css/tw-elements-react.min.css`, {
      encoding: "utf-8",
    });

    fs.writeFileSync(
      `./${distName}/css/tw-elements-react.min.css`,
      cssWithDisclaimer,
      {
        encoding: "utf-8",
      }
    );
  } else {
    console.log("Error: CSS build failed");
  }

  // build
  fs.copy(`./src/files/package.json`, `./${distName}/package.json`, (err) => {
    if (err) throw err;

    // package.json version update
    const contentApp = fs.readFileSync(`./${distName}/package.json`, {
      encoding: "utf-8",
    });
    const lines = contentApp.split(/\r?\n/g);
    const versionIndex = lines.findIndex((line) => line.match(/version/));

    lines[versionIndex] = `  "version": "${version}",`;
    fs.writeFileSync(`./${distName}/package.json`, lines.join(EOL), {
      encoding: "utf-8",
    });
  });

  fs.copy(`./src/files/README.md`, `./${distName}/README.md`, (err) => {
    if (err) throw err;
  });
  fs.copy(`./src/plugin.cjs`, `./${distName}/plugin.cjs`, (err) => {
    if (err) throw err;
  });
  fs.copy(`./src/lib`, `./${distName}/src/lib`, (err) => {
    if (err) throw err;
  });
  fs.copy(`./src/scss`, `./${distName}/src/scss`, (err) => {
    if (err) throw err;
  });
}
