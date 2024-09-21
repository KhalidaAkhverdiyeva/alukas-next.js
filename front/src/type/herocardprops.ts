export interface HeroCardProps {
    imageUrl: string;
    title: string;
    subtitle: string;
    buttonText: string;
    onButtonClick?: () => void;
  }