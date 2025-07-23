export const getNavLinks = ({ isActive }) => {
  return isActive ? "text-lm-primary dark:text-dm-primary underline underline-offset-6 font-bold text-sm" : "text-lm-text-primary dark:text-dm-text-primary text-sm"
} 