function gridColumnRowAutoLayout(){
    const potentialMatches = document.querySelectorAll('[class*="grid-"]');
    const gridRegex = /grid-(\d+)x(\d+)/;
    Array.from(potentialMatches).reduce((item, element) => {
        const gridClass = Array.from(element.classList).find(elementClass => gridRegex.test(elementClass));
        if (gridClass) {
            const match = gridClass.match(gridRegex);
            item.push({
                element: element,
                columns: parseInt(match[1], 10),
                rows: parseInt(match[2], 10)
            });
        }
        return item;
    }, []).forEach(item => {
        item.element.style.display = 'grid';
        item.element.style.gridTemplateColumns = `repeat(${item.columns}, 1fr)`;
        item.element.style.gridTemplateRows = `repeat(${item.rows}, 1fr)`;
    });
}

gridColumnRowAutoLayout();