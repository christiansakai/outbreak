// These are the special actions available as events, with a verb. nouns are indicated as well in the comments because I'm not sure how this will be stored/used.

const events = {
  airlift: {
  	verb: 'Move',
  	//noun: <name of the city to move to>
  	//directObject: <name of the Role to be moved>
    name: 'Airlift',
    text: 'Move any one pawn to any city. Get permission before moving another players pawn.'
  },
  oneQuietNight: {
  	verb: 'Mitigate',
  	//noun: <the next infect city step>
    name: 'One Quiet Night',
    text: 'Skip the next infect city step (do not flip over any infection cards).'
  },
  governmentGrant: {
  	verb: 'Build',
  	//noun: <name of the city to build a station in (any city without research center)>
    name: 'Government Grant',
    text: 'Add one research station to any city (no discard needed).'
  },
  forecast: {
  	verb: 'Mitigate',
  	//noun: <top 6 cards in the infection deck>
    name: 'Forecast',
    text: 'Draw, look at, and rearrange the top six cards of the infection deck and put them back on top.'
  },
  resilientPopulation: {
  	verb: 'Mitigate',
  	//noun: <any 1 card in the infection discard pile>
    name: 'Resilient Population',
    text: 'Remove any one card in the infection discard pile from the game. You may play this between the infect and intensify steps of an epidemic.'
  }
};
