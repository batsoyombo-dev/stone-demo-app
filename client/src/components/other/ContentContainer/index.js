import { Container, Inner, Title } from "./styles"

const ContentContainer = ({ children, ...props }) => {
    return (
        <Container { ...props } >
            { children }
        </Container>
    )
}

ContentContainer.Inner = Inner;
ContentContainer.Title = Title;

export default ContentContainer