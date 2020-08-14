import { lambda } from 'node-lambdas';

lambda(function(input, output) {
    input.pipe(output);
});
