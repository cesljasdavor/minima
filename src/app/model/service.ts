import {PriceDescription} from "./priceDescription";

export class Service {
  constructor(
    public title: string,
    public description: string,
    public representationPhoto: string,
    public priceDescriptions?: PriceDescription[],
    public images?: string[]
  ) {}
}
