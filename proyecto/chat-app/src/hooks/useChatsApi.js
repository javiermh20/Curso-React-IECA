import { onSnapshot, query, collection, addDoc, deleteDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../main";

export const useChatsApi = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // Obtener los chats
    const getChats = async () => {
        setLoading(true);
        try {
            const chatsQuery = query(collection(db, "chats"));
            const unsubscribe = onSnapshot(chatsQuery, (querySnapshot) => {
                setData(querySnapshot.docs.map(
                    (doc) => ({ id: doc.id, ...doc.data() })
                ));
            });
            return unsubscribe;
        } catch (error) {
            setError("Error al obtener los chats");
        } finally {
            setLoading(false);
            setError(null);
        }
    };

    // Agregar un chat
    const addChat = async (chatName) => {
        try {
            const newChatRef = await addDoc(collection(db, "chats"), {
                name: chatName,
            });
            return newChatRef.id;
        } catch (error) {
            setError("Error al agregar el chat");
        }
    };

    // eliminar un chat
    const deleteChat = async (chat) => {
        try {
            await deleteDoc(doc(db, "chats", chat.id));
        } catch (error) {
            setError(error);
        }
    };

    return { data, error, loading, getChats, addChat, deleteChat };
};
