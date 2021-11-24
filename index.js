// function findMatching(driver, name) {
//     return driver.filter(doesItMatch =>
//         doesItMatch.toLowerCase() === name.toLowerCase()
//     )
// }
function findMatching(driver, name) {
    return driver.filter(function (doesItMatch) {
        return doesItMatch.toLowerCase() === name.toLowerCase();
    })
}
function fuzzyMatch(driver, letters) {
    return driver.filter(doesItMatch => doesItMatch.toLowerCase().indexOf(letters.toLowerCase()) === 0);
}

function matchName(driver, person) {
    return driver.filter(doesItMatch => doesItMatch.name.toLowerCase() === person.toLowerCase());
}