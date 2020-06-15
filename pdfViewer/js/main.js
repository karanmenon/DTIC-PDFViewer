// Code adapted from https://www.youtube.com/watch?v=ydCSSgwZjzs
const url = '/../docs/pdf2.pdf';

let pdfDoc = null,
    pageNum = 1,
    pageIsRendering = false,
    pageNumIsPending = null;

const scale = 1.5,
    canvas = document.querySelector('#pdf-render')
    ctx = canvas.getContext('2d');

//Render the Page
const renderPage = num => {
    pageIsRendering = true;

    // Get Page
    pdfDoc.getPage(num).then(page => {
        // Set scale
        const viewport = page.getViewport({ scale });
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderCtx = {
            canvasContext: ctx,
            viewport
        }

        page.render(renderCtx).promise.then(() => {
            pageIsRendering = false;

            if (pageNumIsPending !== null){
                renderPage(pageNumIsPending);
                pageNumisPending = null;
            }
        });

        // Output Current Page
        document.querySelector('#page-num').textContent = num
        
    });
};

//Check for pages rendering
const queueRenderPage = num => {
    if(pageIsRendering){
        pageNumIsPending = num;
    } else{
        renderPage(num);
    }
}

//Show Prev Page
const showPrevPage = () => {
    if (pageNum <= 1){
        return;
    }
    pageNum--;
    queueRenderPage(pageNum);
}

//Show Prev Page
const showNextPage = () => {
    if (pageNum >= pdfDoc.numPages){
        return;
    }
    pageNum++;
    queueRenderPage(pageNum);
}

// Get the Document
pdfjsLib.getDocument(url).promise.then(pdfDoc_ => {
    pdfDoc = pdfDoc_;

    //sets the page number on the site
    document.querySelector('#page-count').textContent=pdfDoc.numPages

    renderPage(pageNum);
})
    .catch(err => {
        // Display error
        const div = document.createElement('div');
        div.className = 'error';
        div.appendChild(document.createTextNode(err.messge));
        document.querySelector('body').insertBefore(div, canvas);
        //Remove top bar
        document.querySelector('.top-bar').style.display = 'none';
    })

//Prev-Next Button Events
document.querySelector('#prev-page').addEventListener('click',showPrevPage);
document.querySelector('#next-page').addEventListener('click',showNextPage);

//Share button Events
document.getElementById('share-btn').addEventListener('click', 
function(){
    document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click',
function(){
    document.querySelector('.bg-modal').style.display='none';
});