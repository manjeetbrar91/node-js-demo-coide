import { ServiceObject } from "../ServiceObject";
import { InventoryCostCenterStockReportBaseModel } from "./InventoryCostCenterStockReportBaseModel";


export class InventoryStockIssueReportResponse extends ServiceObject {
    private restaurant: string;
    private totalNumberOfItems: number;
    private page: number;
    private limit: number;
    private totalPages: number;
    private currentPageItemCount: number;
    private data: Array<InventoryCostCenterStockReportBaseModel>;


    public getData(): Array<InventoryCostCenterStockReportBaseModel> {
        return this.data;
    }

    public setData(data: Array<InventoryCostCenterStockReportBaseModel>): void {
        this.data = data;
    }

    public getRestaurant(): string {
        return this.restaurant;
    }

    public setRestaurant(restaurant: string): void {
        this.restaurant = restaurant;
    }


    public getTotalNumberOfItems(): number {
        return this.totalNumberOfItems;
    }

    public setTotalNumberOfItems(totalNumberOfItems: number): void {
        this.totalNumberOfItems = totalNumberOfItems;
    }

    

    public getPage(): number {
        return this.page;
    }

    public setPage(page: number): void {
        this.page = page;
    }

    public getLimit(): number {
        return this.limit;
    }

    public setLimit(limit: number): void {
        this.limit = limit;
    }

    public getTotalPages(): number {
        return this.totalPages;
    }

    public setTotalPages(totalPages: number): void {
        this.totalPages = totalPages;
    }

    public getCurrentPageItemCount(): number {
        return this.currentPageItemCount;
    }

    public setCurrentPageItemCount(currentPageItemCount: number): void {
        this.currentPageItemCount = currentPageItemCount;
    }



}