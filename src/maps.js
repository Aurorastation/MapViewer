module.exports = {
  h1: {
    file: 'https://map.aurorastation.org/mapimages/Aurorastation/Aurora.3/master/sccv_horizon-1.png',
    name: 'Deck 1 - Hangar',
    bounds: [[1, 1], [201, 201]],
    next: 'h2'
  },
  h2: {
    file: 'https://map.aurorastation.org/mapimages/Aurorastation/Aurora.3/master/sccv_horizon-2.png',
    name: 'Deck 2',
    bounds: [[1, 1], [201, 201]],
    prev: 'h1',
    next: 'h3'
  },
  a3: {
    file: 'https://map.aurorastation.org/mapimages/Aurorastation/Aurora.3/master/sccv_horizon-3.png',
    name: 'Deck 3 - Bridge',
    bounds: [[1, 1], [201, 201]],
    prev: 'h2'
  },
  cc: {
    file: 'https://map.aurorastation.org/mapimages/Aurorastation/Aurora.3/master/sccv_horizon-4.png',
    name: 'Central Command'
  },
}