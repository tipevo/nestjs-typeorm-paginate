"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = void 0;
class Pagination {
    constructor(
    /**
     * a list of items to be returned
     */
    items, 
    /**
     * associated meta information (e.g., counts)
     */
    meta, 
    /**
     * associated links
     */
    links, 
    /**
    * a list of raw items when queried raw with entities
    */
    raw_items) {
        this.items = items;
        this.meta = meta;
        this.links = links;
        this.raw_items = raw_items;
    }
}
exports.Pagination = Pagination;
