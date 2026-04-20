'use client';

import Sidebar from '@/components/Sidebar';
import styles from './CourseDetail.module.css';

export default function CourseDetailPage() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.mainContent}>
        
        {/* Video Section */}
        <section className={styles.card}>
          <h2 className={styles.cardTitle}>Belajar Hiragana Dasar</h2>
          
          <div className={styles.videoContainer}>
            {/* Dummy YouTube Embed for prototype */}
            <iframe 
              className={styles.videoPlayer}
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&showinfo=0&modestbranding=1" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
          
          <p className={styles.description}>
            Pelajari dasar huruf Hiragana untuk pemula.
          </p>
        </section>

        {/* PDF/Slides Section */}
        <section className={styles.card}>
          <h2 className={styles.cardTitle}>Belajar Hiragana Dasar</h2>
          
          <div className={styles.pdfViewer}>
            {/* Mock PDF Toolbar */}
            <div className={styles.pdfToolbar}>
              <div className={styles.pdfControls}>
                <span>1 / 5</span>
                <span>— 83% +</span>
              </div>
              <div className={styles.pdfControls}>
                <span>📄</span>
                <span>⬇️</span>
                <span>🖨️</span>
                <span>⋮</span>
              </div>
            </div>
            
            {/* Mock PDF Content Area */}
            <div className={styles.pdfArea}>
               <div style={{ textAlign: 'center', background: 'white', padding: '2rem', width: '80%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                 <h1 style={{ marginBottom: '2rem', textDecoration: 'underline' }}>HIRAGANA</h1>
                 {/* This could be replaced with an actual image export from their assets later */}
                 <div style={{ border: '1px solid #ccc', flex: 1, width: '100%', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px', fontSize: '24px' }}>
                    <div>a あ</div><div>i い</div><div>u う</div><div>e え</div><div>o お</div>
                 </div>
               </div>
            </div>
          </div>
          
          <button className={styles.downloadButton}>
            Download PDF
          </button>
        </section>
        
      </main>
    </div>
  );
}
