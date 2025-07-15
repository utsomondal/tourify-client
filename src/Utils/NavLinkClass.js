export const getNavLinks = ({ isActive }) => {
  return isActive ? "text-blue-500 underline underline-offset-6 font-bold" : "text-gray-600 hover:text-blue-500"
} 