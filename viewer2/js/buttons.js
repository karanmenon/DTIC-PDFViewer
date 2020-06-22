/**
 * Zoom in
 */
function zoomIn() {
    var pdf = document.getElementById("the-pdf");
  }
  document.getElementById('zoom-in').addEventListener('click', zoomIn);

  /**
 * Displays previous page.
 */
function onPrevPage() {
    if (pageNum <= 1) {
      return;
    }
    pageNum--;
    queueRenderPage(pageNum);
  }
  document.getElementById('prev').addEventListener('click', onPrevPage);
  
  /**
   * Displays next page.
   */
  function onNextPage() {
    if (pageNum >= pdfDoc.numPages) {
      return;
    }
    pageNum++;
    queueRenderPage(pageNum);
  }
  document.getElementById('next').addEventListener('click', onNextPage);
  