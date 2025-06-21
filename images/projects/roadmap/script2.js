function showRoadmap(skill) {
    var pdfPath = ''; // Add the path to your PDF file here

    // Example PDF paths based on the skill
    if (skill === 'Frontend') {
        pdfPath = '1.pdf';
    } else if (skill === 'Backend') {
        pdfPath = '2.pdf';
    } else if (skill === 'DevOps') {
        pdfPath = '3.pdf';
    } else if (skill === 'FullStack') {
        pdfPath = '4.pdf';
    } else if (skill === 'AI') {
        pdfPath = '5.pdf';
    } else if (skill === 'DataAnalyst') {
        pdfPath = '6.pdf';
    } else if (skill === 'Android') {
        pdfPath = '7.pdf';
    } else if (skill === 'PostgreSQL') {
        pdfPath = '8.pdf';
    } else if (skill === 'Blockchain') {
        pdfPath = '9.pdf';
    } else if (skill === 'QA') {
        pdfPath = '10.pdf';
    } else if (skill === 'SoftwareArchitecture') {
        pdfPath = '11.pdf';
    } else if (skill === 'Flutter') {
        pdfPath = '12.pdf';
    } else if (skill === 'CyberSecurity') {
        pdfPath = '13.pdf';
    } else if (skill === 'UXDesign') {
        pdfPath = '14.pdf';
    } else if (skill === 'ReactNative') {
        pdfPath = '15.pdf';
    } else if (skill === 'GameDeveloper') {
        pdfPath = '16.pdf';
    } else if (skill === 'TechnicalWriter') {
        pdfPath = '17.pdf';
    } else if (skill === 'MLOps') {
        pdfPath = '18.pdf';
    }
    // Add more conditions for other skills

    // Open the PDF in a new tab without allowing download
    var newTab = window.open(pdfPath, '_blank');
    newTab.document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
    });
}
