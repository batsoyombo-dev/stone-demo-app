import { Container, Title } from './styles';

const NoteContainer = ({ note }) => {
    return (
        <Container>
            { note != null ? (
                <>
                    <Title> { note.title } </Title>
                    <div dangerouslySetInnerHTML={{ __html: note.body }}></div>
                </>
            ) : <h1>please select</h1> }
        </Container>
    )
}

export default NoteContainer;