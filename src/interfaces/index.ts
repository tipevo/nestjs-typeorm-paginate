export interface IPaginationOptions {
  /**
   * the amount of items to be requested per page
   */
  limit: number;
  /**
   * the page that is requested
   */
  page: number;
  /**
   * a babasesic route for generating links (i.e., WITHOUT query params)
   */
  route?: string;
}

export interface IPaginationMeta {
  /**
   * the amount of items on this specific page
   */
  item_count: number;
  /**
   * the total amount of items
   */
  total_items: number;
  /**
   * the amount of items that were requested per page
   */
  items_per_page: number;
  /**
   * the total amount of pages in this paginator
   */
  total_pages: number;
  /**
   * the current page this paginator "points" to
   */
  current_page: number;
}

export interface IPaginationLinks {
  /**
   * a link to the "first" page
   */
  first?: string;
  /**
   * a link to the "previous" page
   */
  previous?: string;
  /**
   * a link to the "next" page
   */
  next?: string;
  /**
   * a link to the "last" page
   */
  last?: string;
}
