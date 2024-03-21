import myResume from '../assets/sgoresume.pdf';

export default function Resume() {
  return (
    <section>
      
      <div style={{ width: '100%', height: '100vh' }}>

      <embed src={myResume}  type="application/pdf" width="100%" height="100%"/>
      </div>
    </section>
  );
}