// code your solution here
function superbowlWin(record) {
    const results = record.find(x => x.result === "W");
    console.log(results);
    if (results) {
        return results.year;
    } else {
        return undefined;
    }
}