```
# Use ES entry point (with ES support)
node --experimental-modules index.mjs
# Simulate transpilation of `ok.mjs`
mv _ok.js ok.js
# Use cjs entry point (without ES support)
node index.js
```
