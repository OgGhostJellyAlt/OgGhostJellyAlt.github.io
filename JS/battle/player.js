class Player {
    hp = 25
    atk = 8
    def = 5
    spd = 5
    special = []
    shield = 1

    constructor(player_class, player_stats) {
        switch ( player_stats ) {
            case 'HP':
                this.hp *= 1.3
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
            case 'Thief':
                this.special.push('STEAL')
                this.special.push('WACKY POTION')
                this.hp /= 1.3
                break;
            case 'Mage':
                this.special.push('MAGIC')
                this.special.push('DARK ARTS')
                this.ammo = 1
                this.def /= 1.1
                this.hp /= 1.1
                break;
            case 'Knight':
                this.special.push('SHIELD')
                this.special.push('REST')
                this.atk /= 1.1
                break;
            case 'Ninja':
                this.special.push('STEALTH')
                this.special.push('BREATHING TECHNIQUE')
                this.spd *= 5
                break;
        }
        this.hp = (Math.round(this.hp*100)/100)
        this.atk = (Math.round(this.atk*100)/100)
        this.def = (Math.round(this.def*100)/100)
        this.spd = (Math.round(this.spd*100)/100)
    }
}
