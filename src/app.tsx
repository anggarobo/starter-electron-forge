import { createRoot } from 'react-dom/client';
import Container from './ui/components/container';

const App = () => {
    return (
        <Container>
            <h1>Welcome to Starter Electron Forge</h1>
            <p>This is a simple React application.</p>
            <p>Feel free to modify the code and see the changes live!</p>
            <p>Enjoy coding!</p>
        </Container>
    )
}

const root = createRoot(document.body);
root.render(<App />);