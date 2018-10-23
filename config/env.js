const fs = require('fs');
const path = require('path');
const DotenvExpand = require('dotenv-expand');
const Dotenv = require('dotenv');
const paths = require('./paths');

delete require.cache[require.resolve('./paths')];

const { NODE_ENV } = process.env;
if (!NODE_ENV) {
  throw new Error(
    'A variável de ambiente NODE_ENV é necessária mas não foi especificada.',
  );
}

const dotenvFiles = [
  `${paths.dotenv}.${NODE_ENV}.local`,
  `${paths.dotenv}.${NODE_ENV}`,
  NODE_ENV !== 'test' && `${paths.dotenv}.local`,
  paths.dotenv,
].filter(Boolean);

dotenvFiles.forEach((dotenvFile) => {
  if (fs.existsSync(dotenvFile)) {
    DotenvExpand(
      Dotenv.config({
        path: dotenvFile,
      }),
    );
  }
});

const appDirectory = fs.realpathSync(process.cwd());
process.env.NODE_PATH = (process.env.NODE_PATH || '')
  .split(path.delimiter)
  .filter(folder => folder && !path.isAbsolute(folder))
  .map(folder => path.resolve(appDirectory, folder))
  .join(path.delimiter);

const REACT_APP = /^REACT_APP_/i;

function getClientEnvironment(publicUrl) {
  const raw = Object.keys(process.env)
    .filter(key => REACT_APP.test(key))
    .reduce(
      (env, key) => ({ ...env, key: process.env[key] }),
      {
        NODE_ENV: process.env.NODE_ENV || 'development',
        PUBLIC_URL: publicUrl,
      },
    );
  const stringified = {
    'process.env': Object.keys(raw).reduce((env, key) => ({ ...env, [key]: JSON.stringify(raw[key]) }), {}),
  };
  return { raw, stringified };
}

module.exports = getClientEnvironment;
