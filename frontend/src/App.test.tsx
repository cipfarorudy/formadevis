import { render, screen } from '@testing-library/react';
import App from './App';

test('affiche le titre FormaDevis Frontend', () => {
  render(<App />);
  expect(screen.getByText(/FormaDevis Frontend/i)).toBeInTheDocument();
});
