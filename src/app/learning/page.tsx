import { createClient } from "@/utils/supabase/server";

export default async function Learning() {
  const supabase = createClient();

  const { data: topics, error } = await supabase.from("topics").select("*");

  // Log data to the server console
  console.log("Fetched topics:", topics);

  if (error) {
    console.error("Error fetching topics:", error);
    return <div>Error loading topics</div>;
  }

  return (
    <div>

    </div>
  );
}
