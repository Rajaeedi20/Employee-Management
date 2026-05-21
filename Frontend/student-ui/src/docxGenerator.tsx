import { Document, Packer, Paragraph, TextRun } from 'docx'
import { saveAs } from 'file-saver'

export default function DocxGenerator() {
  const generateDocx = async () => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [
                new TextRun({ text: 'Student Report', bold: true, size: 48 }),
              ],
            }),
            new Paragraph({
              text: 'This document was generated from the React frontend using the docx library.',
            }),
            new Paragraph({
              children: [
                new TextRun('Name: '),
                new TextRun({ text: 'John Doe', bold: true }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun('Course: '),
                new TextRun({ text: 'Spring Boot + React', italics: true }),
              ],
            }),
          ],
        },
      ],
    })

    const blob = await Packer.toBlob(doc)
    saveAs(blob, 'student-report.docx')
  }

  return (
    <section id="docx-generator" style={{ marginBottom: '2rem' }}>
      <h2>Generate DOCX</h2>
      <p>Click the button to download a generated Word document from your React app.</p>
      <button type="button" onClick={generateDocx} style={{ padding: '0.75rem 1.2rem', fontSize: '1rem' }}>
        Download DOCX
      </button>
    </section>
  )
}
