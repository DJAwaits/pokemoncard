module.exports.pokemonCard = function(req, res, next) {
    const pokemon = {
        id: 1,
        name: 'Gardevoir',
        hitpoints: 'HP 140',
        type: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w3p6-aa8c3894-d7bf-450b-99be-f608d14e1e4a.png/v1/fill/w_720,h_720,strp/psychic_energy_by_humac1_d50w3p6-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYWJhMWE3NTYtZDk1NS00M2Y2LWEyZTktNWI3ZDYwNDA2ODU0XC9kNTB3M3A2LWFhOGMzODk0LWQ3YmYtNDUwYi05OWJlLWY2MDhkMTRlMWU0YS5wbmciLCJ3aWR0aCI6Ijw9NzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.X66lXufkAxkVXIW4UYQjAbHyGeoKZ9pBYVr-q8__wHo',
        pokemonimage: 'https://www.pinclipart.com/picdir/big/191-1912730_imagenes-de-gardevoir-pokemon-clipart.png',
        move1cost: 'https://4.bp.blogspot.com/-TMPkLxLUmNE/WTKfe7alwdI/AAAAAAAAA9o/QUOFITjB1B8v9_I-HH4vQhE9On-CR9_vACLcB/s400/%25D0%259D%25D0%25BE%25D1%2580%25D0%25BC%25D0%25B0%25D0%25BB%25D1%258C%25D0%25BD%25D1%258B%25D0%25B9.png',
        move1name: 'Brainwave',
        move1damage: '60+'
        move2cost1: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w3p6-aa8c3894-d7bf-450b-99be-f608d14e1e4a.png/v1/fill/w_720,h_720,strp/psychic_energy_by_humac1_d50w3p6-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYWJhMWE3NTYtZDk1NS00M2Y2LWEyZTktNWI3ZDYwNDA2ODU0XC9kNTB3M3A2LWFhOGMzODk0LWQ3YmYtNDUwYi05OWJlLWY2MDhkMTRlMWU0YS5wbmciLCJ3aWR0aCI6Ijw9NzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.X66lXufkAxkVXIW4UYQjAbHyGeoKZ9pBYVr-q8__wHo',
        move2cost2: 'https://4.bp.blogspot.com/-TMPkLxLUmNE/WTKfe7alwdI/AAAAAAAAA9o/QUOFITjB1B8v9_I-HH4vQhE9On-CR9_vACLcB/s400/%25D0%259D%25D0%25BE%25D1%2580%25D0%25BC%25D0%25B0%25D0%25BB%25D1%258C%25D0%25BD%25D1%258B%25D0%25B9.png',
        move2name: 'Swelling Pulse',
        move2damage: '120+',
        weakness: 'weakness',
        weaknesstype: 'https://tiermaker.com/images/templates/3164311591018335.png',
        resistance: 'resistance',
        resistancetype: 'https://www.pokebeach.com/news/1211/pokemon-tcg-dragon-type-symbol.png',
        retreat: 'retreat',
        retreatcost: 'https://4.bp.blogspot.com/-TMPkLxLUmNE/WTKfe7alwdI/AAAAAAAAA9o/QUOFITjB1B8v9_I-HH4vQhE9On-CR9_vACLcB/s400/%25D0%259D%25D0%25BE%25D1%2580%25D0%25BC%25D0%25B0%25D0%25BB%25D1%258C%25D0%25BD%25D1%258B%25D0%25B9.png'
    };

    res.render('index', {pokemon});
}