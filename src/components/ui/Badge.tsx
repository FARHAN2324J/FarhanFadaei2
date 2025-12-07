import type { Card } from "../../data/cards";

interface BadgeProps {
  type: Card["category"];
}

const Badge = ({ type }: BadgeProps) => {
  const styles = {
    learning:
      "px-2 py-1 border rounded-md text-xs text-blue-500",
    featured:
      "px-2 py-1 border rounded-md text-xs text-yellow-300",
  };

  return (
    <span
      className={styles[type]}
      title={`This project is in the ${type} category`}
      aria-label={`category: ${type}`}
    >
      {type}
    </span>
  );
};

export default Badge;
