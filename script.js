function openPDF(pdfName) {
    // Concatenar la ruta del archivo PDF local
    var localFilePath = 'pdfs/' + pdfName;
    
    // Abrir el PDF usando window.open
    window.open(localFilePath, '_blank', 'location=no');
}