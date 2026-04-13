import { Navigate, useParams } from "react-router-dom";

/** Deep links open the themes gallery modal instead of a separate page. */
export default function ThemeDetailPage() {
  const { slug } = useParams();
  const to = slug ? `/themes?theme=${encodeURIComponent(slug)}` : "/themes";
  return <Navigate to={to} replace />;
}
