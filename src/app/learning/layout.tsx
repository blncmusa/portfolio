// app/learning/layout.tsx
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export const metadata = {
  title: "Learning",
};

function generateSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default async function LearningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();
  
  // Fetch topics with just name and id
  const { data: topics, error } = await supabase.from("topics").select("name, id");

  if (error) {
    console.error("Error fetching topics:", error);
    return <div>Error loading topics</div>;
  }

  return (
    <div className="learning-layout">
      <h1 className="text-white text-2xl mb-4">Learning</h1>

      {/* Tabs */}
      <div className="tabs-header flex space-x-4 border-b border-gray-600 mb-4">
        {topics?.map((topic) => (
          <Link
            key={topic.id}
            href={`/learning/${generateSlug(topic.name)}`}
            className="tab-button p-2 text-gray-400 hover:text-white"
          >
            {topic.name}
          </Link>
        ))}
      </div>

      {/* Render children (specific topic content) */}
      <div className="tab-content">{children}</div>
    </div>
  );
}
