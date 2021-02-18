export type IFaction = {
    title: string,
}

const factions = new Map<string, IFaction>();

factions.set('bos', {
    title: 'Brotherhood of steel',
});

factions.set('survivors', {
    title: 'Survivors',
});

export default factions;
