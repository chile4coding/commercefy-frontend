import { useRouter } from "next/router";
import Link from "next/link";

const ActiveLink = ({ href, children }) => {
  const router = useRouter();

  // Check if the current route matches the link's href
  const isActive = router.pathname === href;


  // Define the class names based on isActive
  const className = isActive ? "active" : "non-active";

  return (
    <Link
      href={href}
      className={`flex p-2 link  no-underline items-center gap-2   my-4  normal-case ${className}`}>
      {children}
    </Link>
  );
};

export default ActiveLink;
