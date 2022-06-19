var stats = {
    HP: { cost: 1, },
    ATK: { cost: 0.2, },
    SPD: { cost: 0.1, },
}
var effects = {
    NONE: { cost: 0 },
    BURN: { cost: 5, amount: 5, run(i,e){
        players[e].stats.HP.amount -= 1
    } },
    LEECH: { cost: 5, amount: 5, run(i,e){
        players[e].stats.HP.amount -= 0.5
        players[i].stats.HP.amount += 0.5
    } },
}