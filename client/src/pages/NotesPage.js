import { useState, useEffect } from "react";
import Editor from "../components/notes/Editor";
import NoteContainer from "../components/notes/NoteContainer";
import NotesNavigation from "../components/notes/NotesNavigation";
import ContentContainer from "../components/other/ContentContainer";
import { getCookie } from '../context/auth.context';

const NotesPage = () => {

    const [ newNoteData, setNewNoteData ] = useState({
        title: "",
        body: ""
    })

    const [ notes, setNotes ] = useState([]);

    const [ note, setNote ] = useState(null);

    useEffect(() => {
        getItemList();
    }, [])

    const getItemList = async () => {
        const res = await fetch("/api/note/get");
        const data = await res.json();
        setNotes(data);
    }

    const handleNoteDataChange = (tag, data) => {
        setNewNoteData({
            ...newNoteData,
            [ tag ]: data
        });
    }

    const handleNewNoteClick = e => {
        if(newNoteData.body.length == 0 && newNoteData.title.length == 0)
            return;
        fetch("/api/note/add/", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie("csrftoken")
            },
            body: JSON.stringify(newNoteData)
        })
            .then(res => res.json())
            .then(data => {
                if(data.success) {
                    setNotes([ ...notes, data.note ])
                }
            })
            .catch(e => {
                console.log(e);
            })
    }

    const handleNoteNavClick = async (id, e) => {
        const res = await fetch(`/api/note/get/${ id }/`);
        const data = await res.json();
        if(data.success)
            setNote(data.note);
    }

    return (
        <ContentContainer>
            <ContentContainer.Title>stone</ContentContainer.Title>
            <Editor handleNoteDataChange={ handleNoteDataChange } handleNewNoteClick={ handleNewNoteClick } />
            <ContentContainer.Inner
                styleCustom={{ "margin-top": "5vh", "display": "flex", "gap": "2rem" }}>
                <NotesNavigation notes={ notes } handleNoteNavClick={ handleNoteNavClick } />
                <NoteContainer note={ note } />
            </ContentContainer.Inner>
        </ContentContainer>
    )
}

export default NotesPage