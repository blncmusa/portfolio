// app/learning/[slug]/page.tsx
import { createClient } from "@/utils/supabase/server";
import CourseList from "@/components/learning/CourseList";
import Books from "@/components/learning/Books";

type TopicPageProps = {
  params: {
    slug: string;
  };
};

type Book = {
  id: string;
  title: string;
  author: string;
  image_url: string;
};

type Lesson = {
  id: string;
  name: string;
  module_id: string;
};

// Helper function to generate slug (same as in layout)
function generateSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default async function TopicPage({ params }: TopicPageProps) {
  const supabase = createClient();
  const { slug } = params;

  // Fetch all topics and find the one matching the slug
  const { data: topics, error: topicsError } = await supabase
    .from("topics")
    .select("id, name, has_books");

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

  // Fetch lessons for all modules within this topic
  const { data: lessons, error: lessonsError } = await supabase
    .from("lessons")
    .select("id, name, module_id");

  if (lessonsError) {
    console.error("Error fetching lessons:", lessonsError);
    return <div>Error loading lessons</div>;
  }

  // Fetch books if `has_books` is true
  let books: Book[] = [];
  if (topic.has_books) {
    const { data: booksData, error: booksError } = await supabase
      .from("books")
      .select("id, title, author, image_url")
      .eq("topic_id", topic.id);

    if (booksError) {
      console.error("Error fetching books:", booksError);
      return <div>Error loading books</div>;
    }

    books = booksData || [];
  }

  return (
    <div className="flex justify-between">
      {/* Left Side: Courses and Modules */}
      <div className="ml-10 text-[30px]">
        <CourseList courses={courses} modules={modules} lessons={lessons} />
      </div>

      {/* Right Side: Books Section (if `has_books` is true) */}
      <div className="w-1/4">
        {topic.has_books && (
          <div className="font-thin">
            <Books books={books} />
          </div>
        )}
      </div>
    </div>
  );
}
