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
                this.atk *= 1.5
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
                break;
            case 'Mage':
                this.special = 'MAGIC'
                break;
            case 'Archer':
                this.spd *= 5
                break;
        }
    }
}
