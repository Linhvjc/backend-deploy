import axios from 'axios';
const instance = axios.default.create({
    baseURL: 'http://127.0.0.1:8000'
});
export const getResponse = async (chats, message) => {
    try {
        const history = { content: JSON.stringify(chats.slice(-8)) };
        const res = await instance.post("/chatbot/e2e_response", { history, query: { content: message } });
        const data = await res.data;
        const embedding_query = data[0];
        const result = data[1];
        return { embedding_query, result };
    }
    catch (error) {
        console.log(error);
        throw new Error("Unable to get response from AI services");
    }
};
//# sourceMappingURL=ai-service.js.map