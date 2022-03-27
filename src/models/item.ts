export interface Item {
  id: number;
  bluePick: boolean;
  disable: boolean;
  img: string;
  name: string;
  pickAction: boolean;
  redPick: boolean;
}
export interface Ban {
  [banBlue1:string]: number;
  banBlue2: number;
  banRed1: number;
  banRed2: number;
}
export interface Pick{
  pickSlot1:number,
  pickSlot2:number,
  pickSlot3:number,
  pickSlot4:number,
  pickSlot5:number,
}
export interface ChooseOnmy{
  blue:number;
  red:number
}