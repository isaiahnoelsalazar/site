function gridColumnRowAutoLayout(){
    const potentialMatches = document.querySelectorAll('[class*="grid-"]');
    const gridRegex = /grid-(\d+)x(\d+)/;
    Array.from(potentialMatches).reduce((item, el) => {
        const gridClass = Array.from(el.classList).find(c => gridRegex.test(c));
        if (gridClass) {
            const match = gridClass.match(gridRegex);
            item.push({
                element: el,
                n1: parseInt(match[1], 10),
                n2: parseInt(match[2], 10)
            });
        }
        return item;
    }, []).forEach(item => {
        item.element.style.display = 'grid';
        item.element.style.gridTemplateColumns = `repeat(${item.n1}, 1fr)`;
        item.element.style.gridTemplateRows = `repeat(${item.n2}, 1fr)`;
    });
}

gridColumnRowAutoLayout();