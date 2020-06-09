import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroInfoContainer  } from '././HeroInfoContainer.js';
import { BrowserRouter } from 'react-router-dom';



describe('Hero Info Container', () => {
    it.skip('should Render hero details to the page', () => {
            const { getByText, getAllByText } = render(
                <BrowserRouter>
                    <HeroInfoContainer 
                        foundHero={ 
                            {
                                    "Aatrox": {
                                    "version": "10.9.1",
                                    "id": "Aatrox",
                                    "key": "266",
                                    "name": "Aatrox",
                                    "title": "the Darkin Blade",
                                    "blurb": "Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find...",
                                    "info": {
                                    "attack": 8,
                                    "defense": 4,
                                    "magic": 3,
                                    "difficulty": 4
                                    },
                                    "image": {
                                    "full": "Aatrox.png",
                                    "sprite": "champion0.png",
                                    "group": "champion",
                                    "x": 0,
                                    "y": 0,
                                    "w": 48,
                                    "h": 48
                                    },
                                    "tags": [
                                    "Fighter",
                                    "Tank"
                                    ],
                                    "partype": "Blood Well",
                                    "stats": {
                                    "hp": 580,
                                    "hpperlevel": 90,
                                    "mp": 0,
                                    "mpperlevel": 0,
                                    "movespeed": 345,
                                    "armor": 38,
                                    "armorperlevel": 3.25,
                                    "spellblock": 32.1,
                                    "spellblockperlevel": 1.25,
                                    "attackrange": 175,
                                    "hpregen": 3,
                                    "hpregenperlevel": 1,
                                    "mpregen": 0,
                                    "mpregenperlevel": 0,
                                    "crit": 0,
                                    "critperlevel": 0,
                                    "attackdamage": 60,
                                    "attackdamageperlevel": 5,
                                    "attackspeedperlevel": 2.5,
                                    "attackspeed": 0.651}
                                    }
                                }
                            }
                        favorites={[]}
                    />
                </BrowserRouter>
        )

        const nameOneEl = getByText('Hip RiNo Party Spot');
        expect(nameOneEl).toBeInTheDocument(); 
    });
    it('should Render hero details to the page', () => {
        const { getByText, getAllByText } = render(
            <BrowserRouter>
                <HeroInfoContainer 
                    foundHero={
                        {
                        Aatrox: {
                            version: '10.9.1',
                            id: 'Aatrox',
                            key: '266',
                            name: 'Aatrox',
                            title: 'the Darkin Blade',
                            blurb: 'Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find...',
                            info: { attack: 8, defense: 4, magic: 3, difficulty: 4 },
                            image: {
                                full: 'Aatrox.png',
                                sprite: 'champion0.png',
                                group: 'champion',
                                x: 0,
                                y: 0,
                                w: 48,
                                h: 48
                            },
                            tags: [ 'Fighter', 'Tank' ],
                            partype: 'Blood Well',
                            stats: {
                                hp: 580,
                                hpperlevel: 90,
                                mp: 0,
                                mpperlevel: 0,
                                movespeed: 345,
                                armor: 38,
                                armorperlevel: 3.25,
                                spellblock: 32.1,
                                spellblockperlevel: 1.25,
                                attackrange: 175,
                                hpregen: 3,
                                hpregenperlevel: 1,
                                mpregen: 0,
                                mpregenperlevel: 0,
                                crit: 0,
                                critperlevel: 0,
                                attackdamage: 60,
                                attackdamageperlevel: 5,
                                attackspeedperlevel: 2.5,
                                attackspeed: 0.651
                            }
                        }  
                    }                    
                    }
                    favorites={['266']}
                />
            </BrowserRouter>
    )

    const nameOneEl = getByText('Hip RiNo Party Spot');
    expect(nameOneEl).toBeInTheDocument(); 
});
});



