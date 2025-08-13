import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  console.log('Oi');

  return (
    <>
      <Heading attr={123} attr2="String">Ola Mundo1</Heading>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi adipisci magnam, officia voluptatibus veritatis qui mollitia facere nulla eveniet beatae aliquid, corporis non quaerat repudiandae odio voluptas. Inventore, natus sapiente?
      </p>
    </>
  );
}
