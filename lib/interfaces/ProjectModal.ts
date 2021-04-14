export interface DefaultModalSize {
  width: number;
  height: number;
}

export interface ProjectModalProps {
  title: string;
  desc: string;
  img?: string;
  isViewing: boolean;
  wasViewing: string;
  setIsViewing(title: string): void;
  viewingTitle: string;
}
