export default function generateMessage(id, session, sender, message) {
    return {
        id : id|| null,
        session : session || null,
        timeStamp : new Date().toISOString(),
        sender : sender || null,
        message : message || "no message provided"
    };

}
