import { IPaginationLinks, IPaginationMeta } from './interfaces';
export declare class Pagination<PaginationObject> {
    /**
     * a list of items to be returned
     */
    readonly items: PaginationObject[];
    /**
     * associated meta information (e.g., counts)
     */
    readonly meta: IPaginationMeta;
    /**
     * associated links
     */
    readonly links: IPaginationLinks;
    /**
    * a list of raw items when queried raw with entities
    */
    readonly raw_items?: any[];
    constructor(
    /**
     * a list of items to be returned
     */
    items: PaginationObject[], 
    /**
     * associated meta information (e.g., counts)
     */
    meta: IPaginationMeta, 
    /**
     * associated links
     */
    links: IPaginationLinks, 
    /**
    * a list of raw items when queried raw with entities
    */
    raw_items?: any[]);
}
