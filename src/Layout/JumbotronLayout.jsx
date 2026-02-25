function JumbotronLayout() {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '80px 60px',
        }}>

            {/* KIRI - TEKS */}
            <div style={{ flex: 1 }}>
                <h1 style={{
                    fontSize: '48px',
                    fontWeight: '700',
                    lineHeight: '1.2',
                    marginBottom: '20px'
                }}>
                    Navigating the digital landscape for success
                </h1>

                <p style={{
                    fontSize: '18px',
                    lineHeight: '1.6',
                    marginBottom: '30px'
                }}>
                    Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                </p>

                <button style={{
                    padding: '12px 24px',
                    backgroundColor: '#111',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer'
                }}>
                    Book a consultation
                </button>
            </div>

            {/* KANAN - GAMBAR */}
            <div style={{ flex: 1, textAlign: 'right' }}>
                <img
                    src="/image/Jumbotron.png"
                    alt="Jumbotron"
                    style={{ width: '500px', borderRadius: '10px' }}
                />
            </div>

        </div>
    )
}

export default JumbotronLayout;