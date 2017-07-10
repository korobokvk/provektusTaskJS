function findUnic(...a) {

    const sortingStr = a.map((n) => {
    //remove spaces
        if(n.includes(" ")) {
            let d = n.toLowerCase().split("");
            d.sort().splice(d.indexOf(" "), 1);
            return d.join("")
        }

        return n.toLowerCase().split("").sort().join("");
    });
    //find unic string
    let result = [...sortingStr];
    const index = result.sort((a,b) => a !== b)[0];
    return a[sortingStr.indexOf(index)];
}


