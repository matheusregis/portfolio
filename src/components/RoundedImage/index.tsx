import { StyledImage } from "./styles";

interface RoundedImageProps {
  src: string;
  width?: string | number;
  height?: string | number;
  alt?: string;
}

const RoundedImage: React.FC<RoundedImageProps> = ({
  src,
  width,
  height,
  alt,
}) => {
  return <StyledImage src={src} width={width} height={height} alt={alt} />;
};

export default RoundedImage;
