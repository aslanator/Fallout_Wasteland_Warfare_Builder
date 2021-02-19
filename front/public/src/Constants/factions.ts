export type IFaction = {
    title: string,
}

const factions = new Map<FACTIONS, IFaction>();

factions.set('bos', {
    title: 'Brotherhood of steel',
});

factions.set('survivors', {
    title: 'Survivors',
});

export type FACTIONS = 'bos' | 'survivors';

export default factions;
