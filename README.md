If using windows switch export for set in the root package.json in the start:app-one and start-app-two scripts.
```
npm i
cd app-one
npm i
cd ../app-two
npm i
cd ../
npm run start
```

What is Happening:
Electron is loading localhost:3003 which then uses window.open to localhost:3004. Localhost:3004 has an undefined document.referrer

Expected Behaviour:
document.referrer should be set to localhost:3003