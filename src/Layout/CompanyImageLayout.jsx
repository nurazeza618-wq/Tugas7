

function CompanyImageLayout() {
    const Company = [
        'Amazon',
        'driblle',
        'hubspot',
        'Netflix',
        'Noton',
        'Zoom'
    ];

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '40px 60px'
        }}>
            {Company.map((item, index) => (
                <div key={index}>
                    <img
                        src={`/image/${item}.png`}
                        alt={item}
                        style={{ height: '40px' }}
                    />
                </div>
            ))}
        </div>
    );
}

export default CompanyImageLayout;

