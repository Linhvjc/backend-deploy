import axios from 'axios';
const instance = axios.default.create({
  baseURL: 'https://b7a1-167-179-48-114.ngrok-free.app/'
});

export const getResponse = async (chats, message) => {
    try {
        const history = { content: JSON.stringify(chats.slice(-8)) };
        const res = await instance.post("/chatbot/e2e_response", { history, query: { content: message } });
        const data = await res.data;
        const embedding_query = data[0]
        const result = data[1]
        return { embedding_query, result };
    } catch (error) {
        console.log(error);
        throw new Error("Unable to get response from AI services");
    }
};
