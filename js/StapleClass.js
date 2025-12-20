class StapleClass {
    gridColumnRowAutoLayout(){
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

    autoBottom(){
        const potentialMatches = document.querySelectorAll('[class*="bottom-"]');
        const bottomRegex = /bottom-(\d+)/;
        Array.from(potentialMatches).reduce((item, element) => {
            const bottomClass = Array.from(element.classList).find(elementClass => bottomRegex.test(elementClass));
            if (bottomClass) {
                const match = bottomClass.match(bottomRegex);
                item.push({
                    element: element,
                    size: parseInt(match[1], 10)
                });
            }
            return item;
        }, []).forEach(item => {
            item.element.style.bottom = `${item.size}px`;
        });
    }

    autoLeft(){
        const potentialMatches = document.querySelectorAll('[class*="left-"]');
        const leftRegex = /left-(\d+)/;
        Array.from(potentialMatches).reduce((item, element) => {
            const leftClass = Array.from(element.classList).find(elementClass => leftRegex.test(elementClass));
            if (leftClass) {
                const match = leftClass.match(leftRegex);
                item.push({
                    element: element,
                    size: parseInt(match[1], 10)
                });
            }
            return item;
        }, []).forEach(item => {
            item.element.style.left = `${item.size}px`;
        });
    }

    autoRight(){
        const potentialMatches = document.querySelectorAll('[class*="right-"]');
        const rightRegex = /right-(\d+)/;
        Array.from(potentialMatches).reduce((item, element) => {
            const rightClass = Array.from(element.classList).find(elementClass => rightRegex.test(elementClass));
            if (rightClass) {
                const match = rightClass.match(rightRegex);
                item.push({
                    element: element,
                    size: parseInt(match[1], 10)
                });
            }
            return item;
        }, []).forEach(item => {
            item.element.style.right = `${item.size}px`;
        });
    }

    autoTop(){
        const potentialMatches = document.querySelectorAll('[class*="top-"]');
        const topRegex = /top-(\d+)/;
        Array.from(potentialMatches).reduce((item, element) => {
            const topClass = Array.from(element.classList).find(elementClass => topRegex.test(elementClass));
            if (topClass) {
                const match = topClass.match(topRegex);
                item.push({
                    element: element,
                    size: parseInt(match[1], 10)
                });
            }
            return item;
        }, []).forEach(item => {
            item.element.style.top = `${item.size}px`;
        });
    }

    autoHeight(){
        const potentialMatches = document.querySelectorAll('[class*="height-"]');
        const heightRegex = /height-(\d+)/;
        Array.from(potentialMatches).reduce((item, element) => {
            const heightClass = Array.from(element.classList).find(elementClass => heightRegex.test(elementClass));
            if (heightClass) {
                const match = heightClass.match(heightRegex);
                item.push({
                    element: element,
                    size: parseInt(match[1], 10)
                });
            }
            return item;
        }, []).forEach(item => {
            item.element.style.height = `${item.size}px`;
        });
    }

    autoMargin(){
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

    autoPadding(){
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

    autoWidth(){
        const potentialMatches = document.querySelectorAll('[class*="width-"]');
        const widthRegex = /width-(\d+)/;
        Array.from(potentialMatches).reduce((item, element) => {
            const widthClass = Array.from(element.classList).find(elementClass => widthRegex.test(elementClass));
            if (widthClass) {
                const match = widthClass.match(widthRegex);
                item.push({
                    element: element,
                    size: parseInt(match[1], 10)
                });
            }
            return item;
        }, []).forEach(item => {
            item.element.style.width = `${item.size}px`;
        });
    }
}

const init_StapleClass = new StapleClass();
init_StapleClass.gridColumnRowAutoLayout();
init_StapleClass.autoBottom();
init_StapleClass.autoLeft();
init_StapleClass.autoRight();
init_StapleClass.autoTop();
init_StapleClass.autoHeight();
init_StapleClass.autoMargin();
init_StapleClass.autoPadding();
init_StapleClass.autoWidth();