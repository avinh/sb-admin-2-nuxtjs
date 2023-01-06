export interface ISidebarConfig {
    id: string;
    name?: string;
    icon?: string;
    link?: string;
    sub?: Sub[];
  }
  
  export interface Sub {
    name?: string;
    items: Item[];
  }
  
  export interface Item {
    id: string;
    name?: string;
    link?: string;
  }
  