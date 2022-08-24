module.exports = {
  cc: {
    file: 'https://map.aurorastation.org/mapimages/Aurorastation/Aurora.3/master/sccv_horizon-4_centcomm-1.png',
    name: 'Central Command'
  },
  h1: {
    file: 'https://map.aurorastation.org/mapimages/Aurorastation/Aurora.3/master/sccv_horizon-1_deck_1-1.png',
    name: 'Deck 1 - Hangar',
    bounds: [[1, 1], [201, 201]],
    next: 'h2'
  },
  h2: {
    file: 'https://map.aurorastation.org/mapimages/Aurorastation/Aurora.3/master/sccv_horizon-2_deck_2-1.png',
    name: 'Deck 2',
    bounds: [[1, 1], [201, 201]],
    prev: 'h1',
    next: 'h3'
  },
  a3: {
    file: 'https://map.aurorastation.org/mapimages/Aurorastation/Aurora.3/master/sccv_horizon-3_deck_3-1.png',
    name: 'Deck 3 - Bridge',
    bounds: [[1, 1], [201, 201]],
    prev: 'h2'
  },
}