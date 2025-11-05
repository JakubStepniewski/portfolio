import React from "react";

interface ExperienceItemProps {
  title: string;
  organization: string;
  organizationLink?: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  organization,
  organizationLink,
  startDate,
  endDate,
  location,
  description,
}) => {
  return (
    <div className="relative pl-6 border-l border-gray-700">
      {/* Zielona kropka */}
      <span className="absolute left-[-5px] top-1 w-3 h-3 bg-[#1057bb] rounded-full"></span>

      <h3 className="text-lg font-semibold text-gray-100">{title}</h3>

      <p className="text-sm text-[#1057bb] mb-1">
        {organizationLink ? (
          <a
            href={organizationLink}
            target="_blank"
            className="hover:underline"
          >
            {organization}
          </a>
        ) : (
          organization
        )}
      </p>

      <div className=" flex-wrap items-center gap-4 text-zinc-300 text-sm mb-2">
        <span className=" items-center gap-1">
          <span /> {startDate} – {endDate}
        </span>
        <span className=" items-center gap-1">
          <span /> {location}
        </span>
      </div>

      <p className="text-zinc-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default ExperienceItem;
