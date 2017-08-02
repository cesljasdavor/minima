import {PriceDescription} from "./priceDescription";

export class Service {
  constructor(
    public title: string,
    public description: string,
    public prices?: PriceDescription[],
    public images?: string[]
  ) {}
}
