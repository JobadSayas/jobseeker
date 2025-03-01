const copyToClipboard = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
        console.log("Copied to clipboard!"); // Puedes cambiar esto por una alerta o notificación
    } catch (err) {
        console.error("Failed to copy: ", err);
    }
};

export default copyToClipboard;