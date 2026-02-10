export interface Link {
  href: string;
  text: string;
}
export interface toggleLink extends Link {
  name: string;
}

type ItemContent = {
  content: string;
};

export interface Items {
  name: string;
  id: string;
  content: ItemContent;
  date: string;
}
