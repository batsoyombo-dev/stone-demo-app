import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Container, Header, Title, AddBtn, NoteTitleField } from './styles';

const Editor = ({ handleNoteDataChange, handleNewNoteClick }) => {
    return (
        <Container className="Editor" style={{ margin: "5vh 0" }}>
            <Header>
                <Title>New Note</Title>
                <NoteTitleField placeholder="Title..." type="text" name="title" onChange={ e => handleNoteDataChange("title", e.target.value) } />
                <AddBtn onClick={ handleNewNoteClick }>add</AddBtn>
            </Header>
            <CKEditor
                editor={ ClassicEditor }
                data="Your note here..."
                config={{
                    height: "50vh"
                }}
                onReady={ editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log( 'Editor is ready to use!', editor );
                } }
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    handleNoteDataChange("body", data);
                } }
                onBlur={ ( event, editor ) => {
                    console.log( 'Blur.', editor );
                } }
                onFocus={ ( event, editor ) => {
                    console.log( 'Focus.', editor );
                } }
            />
        </Container>
    );
}

export default Editor;