import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroContainer  } from '././HeroContainer.js';
import { BrowserRouter } from 'react-router-dom';



describe('Hero Container', () => {
    it('should Render heros to the page', () => {

            const { getByText, getAllByText } = render(
            <BrowserRouter>
                <HeroContainer 
                    allHeroInfo = { 
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

        const nameEl = getByText('Aatrox');
        expect(nameEl).toBeInTheDocument();
        
        const favoriteEl = getByText('Favorite');
        expect(favoriteEl).toBeInTheDocument(); 

        const viewMoreEl = getByText('View More');
        expect(viewMoreEl).toBeInTheDocument(); 

        const championImageAlt = screen.getByAltText("Aatrox-image")
        expect(championImageAlt).toBeInTheDocument(); 

        const favoriteAlt = screen.getByAltText("favorite-image")
        expect(favoriteAlt).toBeInTheDocument(); 

        const viewMoreAlt = screen.getByAltText("wiew-more-image")
        expect(viewMoreAlt).toBeInTheDocument(); 
    });
    it('should show if the hero has been favorited', () => {

        const { getByText, getAllByText } = render(
        <BrowserRouter>
            <HeroContainer 
                allHeroInfo = { 
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
                    favorites={['266']}
                
            />
        </BrowserRouter>
    )

    const nameEl = getByText('Aatrox');
    expect(nameEl).toBeInTheDocument(); 

    const viewMoreEl = getByText('View More');
    expect(viewMoreEl).toBeInTheDocument(); 

    const championImageAlt = screen.getByAltText("Aatrox-image")
    expect(championImageAlt).toBeInTheDocument(); 

    const unFavoriteAlt = getByText("Un-favorite")
    expect(unFavoriteAlt).toBeInTheDocument(); 

    const viewMoreAlt = screen.getByAltText("wiew-more-image")
    expect(viewMoreAlt).toBeInTheDocument(); 
});
});