var round = 0;

var log = [
    '',
    '',
    '',
    '',
    ''
]

var stats = {
    hp: 1,
    atk: 3,
    def: 0
}


var choice = [
    [
        { Main: 'A SLEEPING DRAGON GUARDS A SWORD' },
        { Button: 'Take', Run: function() {
                if ( Math.floor(Math.random() * 2) == 0 ) {
                    stats.atk += 2;
                    Msg = 'YOU ACQUIRED A SWORD +2 ATK';
                } else {
                    stats.hp -= 8;
                    Msg = 'THE DRAGON HAS AWAKEN -8 HP';
                }
                return(Msg)
            } 
        },
        { Button: 'Run', Msg: 'NO, NOPE, ABSOLUTELY NOT, NO DRAGONS FOR ME.', Run: 0 }
    ],
    [
        { Main: 'A EVEN MORE EVIL WIZARD APPEARS', stats: 'EVEN MORE EVIL WIZARD<br>HP:3' },
        { Button: 'Fight', Run: function() {
                if ( stats.atk > 2 ) {
                    stats.def += 4
                    Msg = 'NICE, YOU BEAT AN EVEN MORE EVIL WIZARD +4 DEF'
                } else {
                    stats.hp -= 2
                    Msg = 'FIREBALLS, OH SO MUCH FIREBALLS -4 HP'
                }
                return(Msg)
            } 
        },
        { Button: 'Run', Msg: 'YOU MANAGED TO ESCAPE UNSCATHED', Run: 0 }
    ],
    [
        { Main: 'A PIECE OF CANDY APPEARS' },
        { Button: 'Eat', Msg: 'UUGH DISGUSTING -4 HP', Run: function() { stats.hp -= 4 } },
        { Button: 'Eat', Msg: 'UUGH DISGUSTING -4 HP', Run: function() { stats.hp -= 4 } }
    ],
    [
        { Main: 'A RANDOM PIECE OF ARMOR APPEARS' },
        { Button: 'Pick Up', Msg: 'THE ARMOR PIECE SOMEHOW GIVES YOU ABS +3 DEF', Run: function() { stats.def += 3 } },
        { Button: 'Leave', Msg: 'YOU LEFT THAT REALLY USEFUL POWERUP', Run: 0 }
    ],
    [
        { Main: 'THE CRYSTAL BALL GOT AN UPDATE 2.0', stats: 'TURN YOUR DEFENCE INTO HEALTH' },
        { Button: 'Look Into The Ball', Run: function() {
                if ( 0 < stats.def ) {
                    Msg = 'YOUR DEFENSE TURNED INTO HP -'+ stats.def +' DEF +'+ stats.def * 3 +' HP'
                    stats.hp += stats.def * 3
                    stats.def -= stats.def
                } else {
                    Msg = 'YOUR NOT WORTHY ENOUGH FOR THE CRYSTAL BALL'
                }
                return(Msg)
            }
        },
        { Button: 'Leave', Msg: 'SMART MOVE?', Run: 0 }
    ],
    [
        { Main: 'SUPER DAMAGING POTION', stats: 'CAN HURT ALOT IF YOUR UNLUCKY<br>BUT CAN GIVE YOU ALOT OF ATTACK' },
        { Button: 'Eat', Run: function() {
                if ( Math.floor(Math.random() * 2) == 0 ) {
                    stats.atk += 2;
                    Msg = 'TASTES KINDA GROSS +4 ATK'
                } else {
                    stats.hp -= 12;
                    Msg = 'TURNS OUT YOUR NOT SUPPOSE TO EAT ALL OF IT IN 1 SITTING -12 HP';
                }
                return(Msg)
            } 
        },
        { Button: 'Leave', Msg: 'TOO RISKY FOR YOU', Run: 0 }
    ],
    [
        { Main: 'THE DRAGONS MOM APPEARS', stats: 'Ms. DRAGON<br>HP:10' },
        { Button: 'Fight It', Run: function() { 
                if ( stats.atk > 9 ) {
                    stats.def += 8
                    Msg = 'YOUR MOM +8 DEF'
                } else {
                    stats.hp -= 8
                    Msg = 'DONT MESS WITH SINGLE MOTHERS -8 HP'
                }
                return(Msg)
            } 
        },
        { Button: 'Run', Msg: 'OUCH IT BURNS -4 HP', Run: function() { stats.hp -= 4 } }
    ],
    [
        { Main: 'A SASSY ANGEL APPEARS FROM THE HEAVENS', stats: 'HELPS YOU IF YOUR LOW ON HP.. OR NOT' },
        { Button: 'Ask For Help', Run: function() {
                if ( stats.hp < 2 ) {
                    stats.hp += 15;
                    Msg = 'WHAT ARE THE ODDS +15 HP';
                } else {
                    stats.def += 1;
                    Msg = 'THE ANGEL FLEW AWAY AFTER HURTING YOUR FEELINGS +1 DEF';
                }
                return(Msg)
            } 
        },
    ],
    [
        { Main: 'THE DRAGON KING APPEARS', stats: 'DRAGON KING<br>HP:26' },
        { Button: 'Attack', Run: function() { 
                if ( stats.atk > 25 ) {
                    stats.def += 16
                    Msg = 'WHAT THE HECK HOWD YOU DO THAT +16 DEF'
                    ascend()
                } else {
                    stats.hp -= 24
                    Msg = 'THERES NO STOPPING THE DRAGON KING -24 HP'
                }
                return(Msg)
            }
        },
        { Button: 'Hug', Msg: 'STOP HUGGING EVIL BEASTS -4 HP', Run: function() { stats.hp -= 4 } },
        { Button: 'Run', Msg: 'YOU RAN AS FAST AS YOUR STUBBY LEGS COULD TAKE YOU',  Run: 0 },
    ],
    [
        { Main: 'WANT A SPOON' },
        { Button: 'Sure', Run: function() { 
                if ( Math.floor(Math.random() * 2) == 0 ) {
                    stats.atk += 2;
                    Msg = 'HERE YA GO +2 ATK';
                } else {
                    stats.hp -= 8;
                    Msg = 'THE SPOON IS EVIL -8 HP';
                }
                return(Msg)
            }
        },
        { Button: 'No Why?', Msg: 'TO IMPROVE YOUR DAMAGE DUH.', Run: 0 },
    ],
    [
        { Main: 'AN INSANELY SUPER DUPER EVEN MORE FRIENDLY WIZARD APPEARS' },
        { Button: 'Attack', Run: function() {
            if ( stats.atk > 12 ) {
                stats.def = -99;
                stats.atk = -99;
                Msg = 'YOU KILLED AN EVEN MORE AMAZING PERSON +999999 SHAME -999999 DEF -999999 ATK'
            } else {
                stats.hp -= 4
                Msg = 'YOU FORTUNATELY FAILED AT ATTACKING -4 HP'
            }
            return(Msg)
        }
        },
        { Button: 'Crystal Ball', Run: function() {
            if ( Math.floor(Math.random() * 2) == 0 ) {
                stats.hp += 4;
                Msg = 'SOMETHING GOOD HAPPENED +4 HP';
            } else {
                stats.hp -= 4;
                Msg = 'THATS NOT GOOD -4 HP';
            }
            return(Msg)
        }     
        },
        { Button: 'Leave', Msg: 'BA BAI',Run: 0 }
    ],
    [
        { Main: 'A REALLY ANNOYING ANGEL APPEARS FROM THE HEAVENS', stats: 'HELPS YOU IF YOUR LOW ON HP.. OR NOT' },
        { Button: 'Ask For Help', Run: function() {
                if ( stats.hp < 2 ) {
                    stats.hp += 15;
                    Msg = 'WHAT ARE THE ODDS +15 HP';
                } else {
                    stats.def += 1;
                    Msg = 'THE ANGEL FLEW AWAY AFTER HURTING YOUR FEELINGS +1 DEF';
                }
                return(Msg)
            } 
        },
    ],
]