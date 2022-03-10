class Player {
    hp = 25
    atk = 8
    def = 5
    spd = 5
    special = ''
    shield = 1

    constructor(player_class, player_stats) {
        switch ( player_stats ) {
            case 'HP':
                this.hp *= 1.2
                break;
            case 'ATTACK':
                this.atk *= 1.2
                break;
            case 'DEFENSE':
                this.def *= 1.2
            case 'SPEED':
                this.spd *= 2
                break;
        }

        switch ( player_class ) {
            case 'Knight':
                this.special = 'SHIELD'
                this.def /= 1.1
                break;
            case 'Mage':
                this.special = 'MAGIC'
                break;
            case 'Archer':
                this.spd *= 5
                break;
        }
        this.hp = (Math.round(this.hp*100)/100)
        this.atk = (Math.round(this.atk*100)/100)
        this.def = (Math.round(this.def*100)/100)
        this.spd = (Math.round(this.spd*100)/100)
    }
}
