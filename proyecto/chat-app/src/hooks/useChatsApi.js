import { onSnapshot, query, collection, doc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../main";

export const useChatsApi = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // Obtener los chats
    const getChats = async () => {
        try {
            const chatsQuery = query(collection(db, "chats"));

            return onSnapshot(chatsQuery, (querySnapshot) => {
                setData(querySnapshot.docs.map(
                    (doc) => ({ id: doc.id, ...doc.data() })
                ));
            });
        } catch (error) {
            setError("Error al obtener los chats");
        } finally {
            setLoading(false);
        }
    };

    // Obtener mensajes para un chat específico
    const getMessagesForChat = async (chatId) => {
        try {
            const messagesQuery = query(collection(db, "chats", chatId, "messages"));

            return onSnapshot(messagesQuery, (querySnapshot) => {
                // Puedes manejar los mensajes aquí
                setData(querySnapshot.docs.map(
                    (doc) => ({ id: doc.id, ...doc.data() })
                ));
            });
        } catch (error) {
            setError("Error al obtener los mensajes del chat");
        } finally {
            setLoading(false);
        }
    };

    return { data, error, loading, getChats, getMessagesForChat };
};
