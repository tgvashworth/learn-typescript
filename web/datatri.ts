export interface Attribute {
    name: string;
    value: string;
}

export class AttributeCollector {
    public collection: Attribute[] = [];
    public collect(): Attribute[] {
      return this.collection.slice(0, this.collection.length);
    };
    public push(attribute: Attribute): any {
      return this.collection.push(attribute);
    };
}
