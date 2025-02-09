async function compareResume() {
        const resumeFile = document.getElementById('resume-upload').files[0];
        const jobDescription = document.getElementById('job-post').value;

        if (!resumeFile || !jobDescription) {
            document.getElementById('result').innerText = 'Please upload your resume and paste the job description.';
            return;
        }

        const fileExtension = resumeFile.name.split('.').pop().toLowerCase();

        if (fileExtension === 'txt') {
            readTextFile(resumeFile);
        } else if (fileExtension === 'pdf') {
            readPDFFile(resumeFile);
        } else if (fileExtension === 'docx') {
            readDOCXFile(resumeFile);
        } else {
            document.getElementById('result').innerText = 'Unsupported file type. Please upload a .txt, .pdf, or .docx file.';
        }
    }

    function readTextFile(file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const content = event.target.result;
            displayFileContent(content);
            analyzeResume(content);
        };
        reader.readAsText(file);
    }

    function readPDFFile(file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const typedarray = new Uint8Array(event.target.result);
            pdfjsLib.getDocument(typedarray).promise.then(pdf => {
                let textContent = '';
                let pagesPromises = [];

                for (let i = 1; i <= pdf.numPages; i++) {
                    pagesPromises.push(
                        pdf.getPage(i).then(page => page.getTextContent().then(text => {
                            text.items.forEach(item => {
                                textContent += item.str + ' ';
                            });
                        }))
                    );
                }

                Promise.all(pagesPromises).then(() => {
                    displayFileContent(textContent);
                    analyzeResume(textContent);
                });
            });
        };
        reader.readAsArrayBuffer(file);
    }

    function readDOCXFile(file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            mammoth.extractRawText({arrayBuffer: event.target.result})
                .then(result => {
                    const content = result.value;
                    displayFileContent(content);
                    analyzeResume(content);
                })
                .catch(err => {
                    document.getElementById('result').innerText = 'Error reading DOCX file.';
                });
        };
        reader.readAsArrayBuffer(file);
    }

    function displayFileContent(content) {
        document.getElementById('file-content').innerText = content;
    }

    async function analyzeResume(resumeText) {
        document.getElementById('result').innerText = 'Analyzing...';

        const jobDescription = document.getElementById('job-post').value;
        try {
            const model = await window.transformers.load('Xenova/all-MiniLM-L6-v2');
            const resumeEmbedding = await model.embed(resumeText);
            const jobEmbedding = await model.embed(jobDescription);
            const similarityScore = cosineSimilarity(resumeEmbedding, jobEmbedding);
            document.getElementById('result').innerText = `Match Score: ${(similarityScore * 100).toFixed(2)}%`;
        } catch (error) {
            console.error("Error analyzing the resume:", error);
            document.getElementById('result').innerText = 'Error analyzing the resume. Check console for details.';
        }
    }

    function cosineSimilarity(vec1, vec2) {
        const dotProduct = vec1.reduce((sum, val, i) => sum + val * vec2[i], 0);
        const magnitudeA = Math.sqrt(vec1.reduce((sum, val) => sum + val * val, 0));
        const magnitudeB = Math.sqrt(vec2.reduce((sum, val) => sum + val * val, 0));
        return dotProduct / (magnitudeA * magnitudeB);
    }