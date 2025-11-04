interface SkillBadgeProps {
  name: string;
  color?: string; // optional background color
}

export const SkillBadge = ({
  name,
  color = "bg-indigo-500",
}: SkillBadgeProps) => {
  return (
    <span
      className={`${color} text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm`}
    >
      {name}
    </span>
  );
};
