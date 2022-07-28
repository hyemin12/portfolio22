export interface WorkType {
  filter: string;
  id: string;
  title: string;
  img?: string;
  describtion: string[];
  date: string;
  tool: string[];
  features?: string[] | undefined;
  git?: string | undefined;
  url: string;
  ect?: string | undefined;
}
