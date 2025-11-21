import React from "react";

interface Props {
  title: string;
  subtitle?: string;
}

const PageHeader: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
      {subtitle && (
        <p className="mt-2 text-lg text-gray-600 max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
};

export default PageHeader;
