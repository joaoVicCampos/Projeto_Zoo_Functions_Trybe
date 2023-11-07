const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('retorna quantidade de elefates correta', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5, 2);
  });
  it('retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).not.toEqual(['Monday']);
  });
  it('retorna undefined se não forem passados argumentos', () => {
    expect(handlerElephants()).toBe(undefined);
  });
});
