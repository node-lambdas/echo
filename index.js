import { lambda } from 'node-lambdas/v1.js';

lambda(function(input, output) {
    input.pipe(output);
});