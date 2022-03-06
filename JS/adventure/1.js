var round = 0;

var log = [
    '',
    '',
    '',
    '',
    ''
]

var stats = {
    hp: 5,
    atk: 1,
    def: 0
}


var choice = [
    [
        { Main: 'A RUSTY SWORD LAYS ON THE GROUND' },
        { Button: 'Pick Up', Run: function() {
                if ( Math.floor(Math.random() * 2) == 0 ) {
                    stats.atk += 2;
                    Msg = 'A RUSTY BROKEN SWORD, HOWS THIS GOING TO HELP +2 ATK';
                } else {
                    stats.hp -= 2;
                    Msg = 'YOU CONTRACTED TETANUS -2 HP';
                }
                return(Msg)
            } 
        },
        { Button: 'Run', Msg: 'YOU RUN AWAY FROM THE RUSTY SWORD, GLANCING BEHIND YOU INCASE IT MAY BE FOLLOWING, YOUR SCARED, AFRAID, AND ALONE. THE SWORD WILL FIND YOU, IT ALWAYS DOES.', Run: 0 }
    ],
    [
        { Main: 'AHH A VERY UGLY GOBLIN', stats: 'GOBLIN<br>HP:4' },
        { Button: 'Fight', Run: function() {
                if ( stats.atk > 3 ) {
                    stats.def += 2
                    Msg = 'YOUR A TERRIBLE PERSON +2 DEF'
                } else {
                    stats.hp -= 2
                    Msg = 'DONT JUDGE A BOOK BY ITS COVER -2 HP'
                }
                return(Msg)
            } 
        },
        { Button: 'Run', Msg: 'YOU FLED (coward)', Run: 0 }
    ],
    [
        { Main: 'A SPIKE TRAP APPEARS' },
        { Button: 'Jump Into', Msg: 'YOU IDIOT -2 HP', Run: function() { stats.hp -= 2 } },
        { Button: 'Jump Into', Msg: 'YOU STUPID -2 HP', Run: function() { stats.hp -= 2 } }
    ],
    [
        { Main: 'A GIANT RED CROSS LAYS ON THE GROUND' },
        { Button: 'Pick Up', Msg: 'IT EVAPORATED, YOU FEEL BETTER +3 HP', Run: function() { stats.hp += 3 } },
        { Button: 'Leave', Msg: 'THAT WAS A HEALTH POWERUP IDIOT', Run: 0 }
    ],
    [
        { Main: 'THE CRYSTAL BALL IS BACK BABYYY!', stats: 'TURN YOUR DEFENCE INTO HEALTH' },
        { Button: 'Look Into The Ball', Run: function() {
                if ( 0 < stats.def ) {
                    Msg = 'YOUR DEFENSE TURNED INTO HP -'+ stats.def +' DEF +'+ stats.def * 2 +' HP'
                    stats.hp += stats.def * 2
                    stats.def -= stats.def
                } else {
                    Msg = 'YOU NEED MORE DEFENSE FOR THIS'
                }
                return(Msg)
            }
        },
        { Button: 'Leave', Msg: 'SAVING UP YOUR DEFENSE FOR LATER', Run: 0 }
    ],
    [
        { Main: 'MUSCLE REMEDY EXTREME VITAMINS B3, C8, F69, AND L01' },
        { Button: 'Eat', Run: function() {
                if ( Math.floor(Math.random() * 2) == 0 ) {
                    stats.atk += 2;
                    Msg = 'TASTES KINDA GROSS +2 ATK'
                } else {
                    stats.hp -= 4;
                    Msg = 'TURNS OUT YOUR NOT SUPPOSE TO EAT ALL OF IT IN 1 SITTING -4 HP';
                }
                return(Msg)
            } 
        },
        { Button: 'Leave', Msg: 'I GUESS YOUR JUST NOT READY FOR MUSCLE REMEDY EXTREME VITAMINS B3, C8, F69, AND L01', Run: 0 }
    ],
    [
        { Main: 'A EVIL WIZARD APPEARS', stats: 'EVIL WIZARD<br>HP:10' },
        { Button: 'Fight It', Run: function() { 
                if ( stats.atk > 9 ) {
                    stats.def += 4
                    Msg = 'ACHEVIEMENT UNLOCKED: FAMILY SLAYER +4 DEF'
                } else {
                    stats.hp -= 4
                    Msg = 'EVIL WIZARDS AND STUFF -4 HP'
                }
                return(Msg)
            } 
        },
        { Button: 'Run', Msg: 'NO LOL -2 HP', Run: function() { stats.hp -= 2 } }
    ],
    [
        { Main: 'THAT DUMB TUNNEL BLOCKS THE WAY AGAIN' },
        { Button: 'Go Inside', Run: function() { 
                if ( stats.hp > 6 ) {
                    Msg = 'THIS SUCKS, NO ONE LIKES THE TUNNEL -'+ Math.round((stats.hp - 7)/2) +' HP'
                    stats.hp -= Math.round((stats.hp - 7))
                } else {
                    Msg = 'YOU EASILY FIT INSIDE THAT DUMB TUNNEL'
                }
                return(Msg)
            } 
        },
    ],
    [
        { Main: 'AN EVEN MORE EVIL WIZARD APPEARS', stats: 'EVEN MORE EVIL WIZARD<br>HP:26' },
        { Button: 'Attack', Run: function() { 
                if ( stats.atk > 25 ) {
                    stats.def += 8
                    Msg = 'NOICE, YOU BEAT GURFUMBLEBIBLE THE GREAT +8 DEF'
                    ascend()
                } else {
                    stats.hp -= 8
                    Msg = 'LOL YOU SUCK AT THIS -sincerly yours, evil wizard xoxo -8 HP'
                }
                return(Msg)
            }
        },
        { Button: 'Hug', Msg: 'SERIOUSLY, FRIENDSHIP SUCKS, DONT EVEN TRY -2 HP', Run: function() { stats.hp -= 2 } },
        { Button: 'Run', Run: function() {
            if ( Math.floor(Math.random() * 2) == 0 ) {
                Msg = 'YOU ACTUALLY MADE IT OUT ALIVE';
            } else {
                stats.hp -= 4;
                Msg = 'BRUH -4 HP';
            }
            return(Msg)
            }
        },
    ],
    [
        { Main: 'HEY WANT SOME DAMAGE' },
        { Button: 'SURE', Run: function() { 
                if ( Math.floor(Math.random() * 2) == 0 ) {
                    stats.atk += 2;
                    Msg = 'HERE YA GO +2 ATK';
                } else {
                    stats.hp -= 2;
                    Msg = 'AW MAN SORRY DUDE -2 HP';
                }
                return(Msg)
            }
        },
        { Button: 'NAH BRUH', Msg: 'ALR DUDE, CYA L8tr', Run: 0 },
    ],
    [
        { Main: 'A EVEN MORE FRIENDLY WIZARD APPEARS' },
        { Button: 'Attack', Run: function() {
            if ( stats.atk > 12 ) {
                stats.def = 0;
                stats.atk = 0;
                Msg = 'YOU KILLED AN EVEN MORE AMAZING PERSON +9999 SHAME -9999 DEF -9999 ATK'
            } else {
                stats.hp -= 2
                Msg = 'YOU FORTUNATELY FAILED AT ATTACKING -2 HP'
            }
            return(Msg)
        }
        },
        { Button: 'Crystal Ball', Run: function() {
            if ( Math.floor(Math.random() * 2) == 0 ) {
                stats.hp += 4;
                Msg = 'SOMETHING GOOD HAPPENED +4 HP';
            } else {
                stats.hp -= 2;
                Msg = 'THATS NOT GOOD -2 HP';
            }
            return(Msg)
        }     
        },
        { Button: 'Leave', Msg: 'SEE YOU NEXT TIME',Run: 0 }
    ],
    [
        { Main: 'A SASSY ANGEL APPEARS FROM THE HEAVENS', stats: 'HELPS YOU IF YOUR LOW ON HP.. OR NOT' },
        { Button: 'Ask For Help', Run: function() {
                if ( stats.hp < 2 ) {
                    stats.hp += 10;
                    Msg = 'WHAT ARE THE ODDS +10 HP';
                } else {
                    Msg = 'THE ANGEL FLEW AWAY AFTER BLOWING A RASPBERRY';
                }
                return(Msg)
            } 
        },
    ],
]