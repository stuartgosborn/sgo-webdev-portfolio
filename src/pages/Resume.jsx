export default function Resume() {
  return (
    <section>
      <div className="resumeContainer" >
        <object
          data="sgoOnlineReusme.pdf"
          type="application/pdf"
          frameBorder="0"
          width="100%"
          height="600px"
          style={{ padding: "0px" }}
        >
          <embed
            src="/sgoOnlineResume.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
          />
          <p>
            <a href="https://drive.google.com/file/d/1bqSUQb1_G4vchPrYFPidGC94z_pZVj3z/view?usp=drive_link" download="sgoOnlineResume.pdf">
              Download PDF
            </a>
          </p>

        
        </object>
      </div>
    </section>
  );
}
