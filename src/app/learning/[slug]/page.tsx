// app/learning/[slug]/page.tsx
import { createClient } from "@/utils/supabase/server";
import CourseList from "@/components/learning/CourseList"

type TopicPageProps = {
  params: {
    slug: string;
  };
};

// Helper function to generate slug (same as in layout)
function generateSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default async function TopicPage({ params }: TopicPageProps) {
  const supabase = createClient();
  const { slug } = params;

  // Fetch all topics and find the one matching the slug
  const { data: topics, error: topicsError } = await supabase.from("topics").select("id, name");

  if (topicsError || !topics) {
    console.error("Error fetching topics:", topicsError);
    return <div>Error loading topic</div>;
  }

  // Find the topic whose slug matches the URL
  const topic = topics.find((topic) => generateSlug(topic.name) === slug);

  if (!topic) {
    return <div>Topic not found</div>;
  }

  // Fetch courses for the specific topic ID
  const { data: courses, error: coursesError } = await supabase
    .from("courses")
    .select("id, name")
    .eq("topic_id", topic.id);

  if (coursesError) {
    console.error("Error fetching courses:", coursesError);
    return <div>Error loading courses</div>;
  }

  // Fetch modules for all courses within this topic
  const { data: modules, error: modulesError } = await supabase
    .from("modules")
    .select("id, name, course_id");

  if (modulesError) {
    console.error("Error fetching modules:", modulesError);
    return <div>Error loading modules</div>;
  }

  return (
    <div>
      <h2 className="text-white text-xl mb-2">{topic.name} Courses</h2>
      {/* Pass all data to the client component */}
      <CourseList courses={courses} modules={modules} />
    </div>
  );
}
