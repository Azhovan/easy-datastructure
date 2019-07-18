

function permute() {

    if (str.length === output.length) {
        console.log(output);
        return;
    }

    for (let i = 0; i < str.length; ++i) {
        if (used[i])
            continue;

        else {
            used[i] = true;
            output = output.concat(str[i]);
            permute();
            used[i] = false;
            output = output.slice(0, -1);
        }
    }
}

var used = [];
var str = 'abcd';
var output = '';

permute();
