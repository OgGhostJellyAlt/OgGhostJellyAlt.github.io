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
        { Main: 'A CHEST APPEARS' },
        { Button: 'Open', Run: function() {
                if ( Math.floor(Math.random() * 2) == 0 ) {
                    stats.atk += 1;
                    Msg = 'COOL A SWORD +1 ATK';
                } else {
                    stats.hp -= 1;
                    Msg = 'ITS A TRAP! -1 HP';
                }
                return(Msg)
            } 
        },
        { Button: 'Leave', Msg: 'YOU LET THE CHEST DO ITS CHEST THINGS', Run: 0 }
    ],
    [
        { Main: 'AHH A GOBLIN', stats: 'GOBLIN<br>HP:2' },
        { Button: 'Fight', Run: function() {
                if ( stats.atk > 1 ) {
                    stats.def += 1
                    Msg = 'MURDER AAHAHAHAHA! +1 DEF'
                } else {
                    stats.hp -= 1
                    Msg = 'YOUR TOO WEAK -1 HP'
                }
                return(Msg)
            } 
        },
        { Button: 'Run', Msg: 'YOU FLED', Run: 0 }
    ],
    [
        { Main: 'A HOT BABE APPEARS' },
        { Button: 'Run', Msg: 'SOCIAL ANXIETY -1 HP', Run: function() { stats.hp -= 1 } },
        { Button: 'Run', Msg: 'SOCIAL ANXIETY -1 HP', Run: function() { stats.hp -= 1 } }
    ],
    [
        { Main: 'A SHIELD SWEET' },
        { Button: 'Pick Up', Msg: 'POGGERS (who says that anymore) +1 DEF', Run: function() { stats.def += 1 } },
        { Button: 'Leave', Msg: 'WOW SO SMART. YOU LEFT THE SHIELD, THAT COULD OF BEEN USEFUL YOU IDIOT. DID YOU ACTAULLY JUST LEAVE A VALUABLE PIECE OF LOOT BEHIND WITHOUT THINKING TWICE. WHAT A JOKE', Run: 0 }
    ],
    [
        { Main: 'A CRYSTAL BALL, LAYING ON THE GROUND.. NOT WIERD AT ALL', stats: 'TURN YOUR DEFENCE INTO HEALTH' },
        { Button: 'Look Into The Ball', Run: function() {
                if ( 0 < stats.def ) {
                    Msg = 'ABRACADABRA YOUR DEFENSE IS GONE -'+ stats.def +' DEF +'+ stats.def * 2 +' HP'
                    stats.hp += stats.def * 2
                    stats.def -= stats.def
                } else {
                    Msg = 'ONLY COOL PEOPLE CAN LOOK INTO THE BALL'
                }
                return(Msg)
            }
        },
        { Button: 'Leave', Msg: 'PLAYING IT SAFE', Run: 0 }
    ],
    [
        { Main: 'A MAGICAL POTION APPEARS OUT OF THIN AIR' },
        { Button: 'Eat', Run: function() {
                if ( Math.floor(Math.random() * 2) == 0 ) {
                    stats.atk += 1;
                    Msg = 'TASTES KINDA GROSS +1 ATK'
                } else {
                    stats.hp -= 2;
                    Msg = 'DRUUUUGS WHOO WHOOOO -2 HP';
                }
                return(Msg)
            } 
        },
        { Button: 'Drop And Run', Msg: 'NOT EVEN ONCE', Run: 0 }
    ],
    [
        { Main: 'A BIG SCARY DRAGON APPEARS', stats: 'DRAGON<br>HP:5' },
        { Button: 'Fight It', Run: function() { 
                if ( stats.atk > 4 ) {
                    stats.def += 2
                    Msg = 'WOW THIS FIGHT IS REALLY STARTING TO DRA- +2 DEF'
                } else {
                    stats.hp -= 2
                    Msg = 'DONT MESS WITH FIRE BREATHING BEASTS -2 HP'
                }
                return(Msg)
            } 
        },
        { Button: 'Run', Msg: 'YOU CANT OUT RUN SOMETHING THAT CAN FLY -1 HP', Run: function() { stats.hp -= 1 } }
    ],
    [
        { Main: 'A TUNNEL BLOCKS THE WAY' },
        { Button: 'Go Inside', Run: function() { 
                if ( stats.hp > 6 ) {
                    Msg = 'YOUR TOO STRONG, YOU CANT FIT -'+ Math.round((stats.hp - 7)/2) +' HP'
                    stats.hp -= Math.round((stats.hp - 7)/2)
                } else {
                    Msg = 'YOUR SMALL AND FLEXIBLY I MEAN FLEXIBALE- FLEXIBUL- FLA- FLEXIBLE'
                }
                return(Msg)
            } 
        },
    ],
    [
        { Main: 'A EVIL WIZARD APPEARS', stats: 'EVIL WIZARD<br>HP:13' },
        { Button: 'Attack', Run: function() { 
                if ( stats.atk > 12 ) {
                    stats.def += 4
                    Msg = 'NOICE, YOU BEAT GURFUMBLEBIBLE THE GREAT +4 DEF'
                    ascend()
                } else {
                    stats.hp -= 4
                    Msg = 'LOL YOU SUCK AT THIS -sincerly yours, evil wizard xoxo -4 HP'
                }
                return(Msg)
            }
        },
        { Button: 'Hug', Msg: 'THE WIZARD IS EVIL, EVIL! DID YOU NOT HEAR ME? -1 HP', Run: function() { stats.hp -= 1 } },
        { Button: 'Run', Msg: 'YOU MADE THE WIZARD SAD +1 MEAN', Run: function() {
            if ( Math.floor(Math.random() * 2) == 0 ) {
                Msg = 'YOU MADE THE WIZARD SAD +1 MEAN';
            } else {
                stats.hp -= 2;
                Msg = 'YOU MADE THE WIZARD SAD -2 HP';
            }
            }
        },
    ],
    [
        { Main: 'A SWORD IN A ROCK SITS THERE, ARE YOU WORTHY' },
        { Button: 'Pick Up', Run: function() { 
                if ( Math.floor(Math.random() * 2) == 0 ) {
                    stats.atk += 1;
                    Msg = 'COOL A SWORD +1 ATK';
                } else {
                    stats.hp -= 1;
                    Msg = 'OUCH YOU HURT YOUR HANDS! -1 HP';
                }
                return(Msg)
            }
        },
        { Button: 'Leave', Msg: 'YOU LEFT', Run: 0 },
    ],
    [
        { Main: 'A FRIENDLY WIZARD APPEARS' },
        { Button: 'Attack', Run: function() {
            if ( stats.atk > 12 ) {
                stats.def = 0;
                stats.atk = 0;
                Msg = 'YOU KILLED AN AMAZING PERSON +99 SHAME -99 DEF -99 ATK'
            } else {
                stats.hp -= 1
                Msg = 'YOU FORTUNATELY FAILED AT ATTACKING -1 HP'
            }
            return(Msg)
        }
        },
        { Button: 'Crystal Ball', Run: function() {
            if ( Math.floor(Math.random() * 2) == 0 ) {
                stats.hp += 2;
                Msg = 'SOMETHING GOOD HAPPENED +2 HP';
            } else {
                stats.hp -= 1;
                Msg = 'THATS NOT GOOD -1 HP';
            }
            return(Msg)
        }     
        },
        { Button: 'Run', Msg: 'WELL THAT WAS KINDA RUDE',Run: 0 }
    ],
    [
        { Main: 'AN ANGEL APPEARS FROM THE HEAVENS', stats: 'HELPS YOU IF YOUR LOW ON HP' },
        { Button: 'Ask For Help', Run: function() {
                if ( stats.hp < 3 ) {
                    stats.hp += 5;
                    Msg = 'LUCKY YOU! +5 HP';
                } else {
                    Msg = 'THE ANGEL FLEW AWAY (i think its the body spray)';
                }
                return(Msg)
            } 
        },
    ],
]