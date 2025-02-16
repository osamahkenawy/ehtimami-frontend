declare module "d3-org-chart" {
    export class OrgChart {
      container(value: HTMLElement): this;
      data(value: any[]): this;
      nodeWidth(value: () => number): this;
      nodeHeight(value: () => number): this;
      childrenMargin(value: () => number): this;
      compactMarginBetween(value: () => number): this;
      compactMarginPair(value: () => number): this;
      onNodeClick(callback: (node: any) => void): this;
      nodeContent(callback: (node: any) => string): this;
      render(): this;
      zoomIn(): this;
      zoomOut(): this;
    }
  }
  