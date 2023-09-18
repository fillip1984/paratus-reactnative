/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  // this isn't working... at least for me even though it should.
  // See: https://github.com/tailwindlabs/prettier-plugin-tailwindcss#sorting-classes-in-template-literals
  // tailwindFunctions: ["tw", "clsx"],
  bracketSameLine: true,
};

module.exports = config;
