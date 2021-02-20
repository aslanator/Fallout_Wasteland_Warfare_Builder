import {Card} from 'Components/Cards/dataCards';
import {Unit} from 'Requests/UnitRequest';

export type crewBuilderOnPick = (unit: Card<Unit>) => void;
