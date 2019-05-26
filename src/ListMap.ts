import { IObject, find, findIndex } from "@daybrush/utils";

/**
 *
 */
class ListMap<T> {
    private obj: IObject<T> = {};
    private objKeys: Array<number | string> = [];

    /**
     *
     */
    public has(key: string | number): boolean {
        return key in this.obj;
    }
    /**
     *
     */
    public get(key: string | number): T {
        return this.obj[key];
    }
    /**
     *
     */
    public set(key: string | number, value: T): this {
        if (!this.has(key)) {
            this.objKeys.push(key);
        }
        this.setItem(key, value);
        return this;
    }
    /**
     *
     */
    public size(): number {
        return this.objKeys.length;
    }
    /**
     *
     */
    public keys(): Array<number | string> {
        return this.objKeys.slice();
    }
    /**
     *
     */
    public values(): T[] {
        const obj = this.obj;
        const keys = this.objKeys;

        return keys.map(key => obj[key]);
    }
    /**
     *
     */
    public getIndex(key: string | number) {
        return this.objKeys.indexOf(key);
    }
    /**
     *
     */
    public findIndex(
        callback: (value: T, key: number | string, index: number, obj: IObject<T>) => boolean,
    ): number {
        const obj = this.obj;

        return findIndex(this.objKeys, (key, i) => callback(obj[key], key, i, obj));
    }
    /**
     *
     */
    public find(
        callback: (value: T, key: number | string, index: number, obj: IObject<T>) => boolean,
    ): T {
        const obj = this.obj;
        const result = find(this.objKeys, (key, i) => callback(obj[key], key, i, obj));

        return obj[result];
    }
    /**
     *
     */
    public remove(key: string | number): this {
        if (this.has(key)) {
            const index = this.getIndex(key);

            this.removeItem(key);
            this.spliceKeys(index, 1);
        }
        return this;
    }
    /**
     *
     */
    public splice(
        index: number,
        deleteCount: number,
        ...items: Array<[number | string, T]>
    ): Array<[number | string, T]> {
        const added = items.filter(([key, value]) => {
            const hasItem = this.has(key);

            this.setItem(key, value);

            return !hasItem;
        });
        const deletedKeys = this.spliceKeys(index, deleteCount, ...added.map(([key]) => key));

        deletedKeys.forEach(key => {
            this.removeItem(key);
        });

        const obj = this.objKeys;
        return deletedKeys.map(key => [key, obj[key]]);

    }
    /**
     *
     */
    public forEach(callback: (value: T, key: number | string, index: number, obj: IObject<T>) => void): this {
        const obj = this.obj;
        this.objKeys.forEach((key, i) => callback(obj[key], key, i, obj));
        return this;
    }
    private setItem(key: string | number, value: T) {
        this.obj[key] = value;
    }
    private removeItem(key: string | number): void {
        delete this.obj[key];
    }
    private spliceKeys(
        index: number,
        deleteCount: number,
        ...items: Array<number | string>): Array<number | string> {
        return this.objKeys.splice(index, deleteCount, ...items);
    }
}

export default ListMap;
