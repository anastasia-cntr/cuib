"use client";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
  title, subtitle, center }) => {
  return (
    <div className={center ? 'text-center' : 'text-start'}>
      <h3 className="font-extrabold text-lg">
        {title}
      </h3>
      <p>
        {subtitle}
      </p>
    </div>
  )
}

export default Heading;