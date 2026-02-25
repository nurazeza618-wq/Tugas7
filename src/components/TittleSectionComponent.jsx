function TittleSectionComponent({ title, description }) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                margin: "0px 100px",
                alignItems: "center"
            }}
        >
            <h1
                style={{
                    backgroundColor: "#B9FF66",
                    padding: "5px",
                    borderRadius: "10px"
                }}
            >
                {title}
            </h1>

            <p>{description}</p>
        </div>
    );
}

export default TittleSectionComponent;