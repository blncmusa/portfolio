// app/learning/layout.tsx
import { createClient } from "@/utils/supabase/server";
import Tabs from "@/components/learning/Tabs";

export const metadata = {
  title: "Learning",
};

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
    <div className="flex h-screen">
        <div className="learning-layout mt-10 mx-10 border h-[90%] overflow-hidden w-screen">

        {/* Use the Tabs client component */}
        <Tabs topics={topics} />

        {/* Render children (specific topic content) */}
        <div className="tab-content">{children}</div>
        </div>
    </div>
  );
}
