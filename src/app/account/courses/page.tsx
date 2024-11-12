// app/account/course-management/page.tsx
import CourseForm from "@/components/courses/CoursesForm";
import TopicForm from "@/components/courses/TopicsForm";
import ModulesForm from "@/components/courses/ModulesForm"

export default function CourseManagement() {
    return (
        <div className="p-6 flex flex-col gap-10">
            {/* <h1 className="text-2xl font-bold mb-4">Course Management</h1> */}
            <TopicForm/>
            <CourseForm />
            <ModulesForm/>
            {/* Add other forms or list of courses here */}
        </div>
    );
}
