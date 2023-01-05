const panels = document.querySelectorAll('.panel');
    // puts all elements w/ panel class into a NodeList which can be accessed like an array
    // console.log(panels[0])



panels.forEach(panel => {
    // loop through and add the active class via click to each panel
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
});

function removeActiveClasses () {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
};