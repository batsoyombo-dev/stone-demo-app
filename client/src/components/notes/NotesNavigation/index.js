import { useEffect, useState } from 'react';
import { Container, NavigationItem } from './styles';

const NotesNavigation = ({ notes, handleNoteNavClick }) => {

    return (
        <Container>
            { notes.length > 0 ? (
                notes.map((item, index) => (
                    <NavigationItem key={ index } onClick={ handleNoteNavClick.bind(this, item.id) }> { item.title } </NavigationItem>
                ))
            ) : <h1>dwq</h1> }
        </Container>
    )
}

export default NotesNavigation;