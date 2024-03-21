import myResume from '../assets/sgoresume.pdf';

export default function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <div style={{ width: '100%', height: '100vh' }}>

      <embed src={myResume}  type="application/pdf" width="400%" height="100%"/>
      </div>
    </section>
  );
}