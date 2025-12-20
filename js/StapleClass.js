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

function autoMargin(){
    const potentialMatches = document.querySelectorAll('[class*="margin-"]');
    const marginRegex = /margin-(\d+)/;
    Array.from(potentialMatches).reduce((item, element) => {
        const marginClass = Array.from(element.classList).find(elementClass => marginRegex.test(elementClass));
        if (marginClass) {
            const match = marginClass.match(marginRegex);
            item.push({
                element: element,
                size: parseInt(match[1], 10)
            });
        }
        return item;
    }, []).forEach(item => {
        item.element.style.margin = `${item.size}px`;
    });
}

function autoPadding(){
    const potentialMatches = document.querySelectorAll('[class*="padding-"]');
    const paddingRegex = /padding-(\d+)/;
    Array.from(potentialMatches).reduce((item, element) => {
        const paddingClass = Array.from(element.classList).find(elementClass => paddingRegex.test(elementClass));
        if (paddingClass) {
            const match = paddingClass.match(paddingRegex);
            item.push({
                element: element,
                size: parseInt(match[1], 10)
            });
        }
        return item;
    }, []).forEach(item => {
        item.element.style.padding = `${item.size}px`;
    });
}

gridColumnRowAutoLayout();
autoMargin();
autoPadding();