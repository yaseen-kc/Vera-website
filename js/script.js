// Replace Texy In Header
const checkReplace = document.querySelector(".replace-me");

if (checkReplace !== null) {
const replace = new ReplaceMe(checkReplace,{
    animation: 'animated fadeIn',
    speed:500,
    separator:',',
    loopCount: 'infinite',
    autoRun: true,
})
}
