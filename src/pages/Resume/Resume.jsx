function Resume({ resumeRef }) {
  return (
    <main className="page-component-container" ref={resumeRef}>
      <h1>Resume</h1>
      <p>
        View <a href="/carlos-salguera-resume.pdf" target="_blank">here</a> or download <a href="/carlos-salguera-resume.pdf" download>here.</a>
      </p>
    </main>
  )
}

export default Resume
