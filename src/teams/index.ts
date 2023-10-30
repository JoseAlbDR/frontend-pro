import { getCharacters } from './api';
import { renderCharacters } from './view';

const HOUSES = ['gryffindor', 'hufflepuff', 'ravenclaw', 'slytherin'];

function loadCharacters() {
  HOUSES.forEach((house) => {
    getCharacters(house).then((data) => {
      renderCharacters(
        house,
        data.filter((i: { image: string }) => i.image).slice(0, 8)
      );
    });
  });
}

loadCharacters();
