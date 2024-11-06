import styled from 'styled-components';

// Define shared styles with more efficient props for responsive design
export const Div = styled.div`
    width: 100%;
    max-width: 600px;
    height: 100%;
    max-height: 500px;
    background-color: ${({ theme }) => theme.bg};          // Dynamic background
    color: ${({ theme }) => theme.text_primary};           // Dynamic text color
    border-radius: 8px;                                    // Slight rounding for a modern look
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);            // Light shadow for depth
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

// Example usage in a component:
export const Container = styled(Div)`
    background-color: ${({ theme }) => theme.card};        // Inherit and customize
    color: ${({ theme }) => theme.text_secondary};         // Override for custom text color
    transition: all 0.3s ease-in-out;                      // Smooth transition for theme change
`;
