"use client";

interface MenuItemProps {
  onClick: () => void;
  label: string;
  href?: string;
  largePadding?: boolean;
  fontBold?: boolean;
  border?: boolean;
  borderType?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  label, href, largePadding, fontBold, border, borderType, onClick
}) => {
  return (
    <div onClick={onClick} className={`${largePadding ? 'py-3' : 'py-1'} ${border ? borderType : 'border-none'}`}>
      <a href={href} className={`cursor-pointer ${fontBold ? 'font-bold' : 'font-normal'}`}>
        {label}
      </a>
    </div>
  )
}

export default MenuItem;