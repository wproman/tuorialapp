import { db } from "@/lib/prismadb";

const CourseIdpage = async ({ params }: { params: { courseId: string } }) => {
  try {
    const course = await db.course.findUnique({
      where: {
        id: params.courseId,
      },
    });

    if (course) {
      console.log("Found course:", course);
    } else {
      console.log("Course not found");
    }
  } catch (error) {
    console.error("Error finding course:", error);
  } finally {
    await db.$disconnect();
  }

  return (
    <div>
      <div>CourseId:{params.courseId}</div>
    </div>
  );
};

export default CourseIdpage;
