import { db } from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { TitleForm } from "./_components/TitleForm";

const CourseIdpage = async ({ params }: { params: { courseId: string } }) => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }
  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
    },
  });

  if (!course) {
    return redirect("/");
  }
  const requireFields = [
    course.title,
    course.description,
    course.imageUrl,
    course.price,
    course.categoryId,
  ];

  const totalFields = requireFields.length;
  const completedFields = requireFields.filter(Boolean).length;

  const completionText = `(${completedFields} / ${totalFields})`;

  return (
    <div>
      <div>CourseId:{params.courseId}</div>
      <div>Complete all fields{completionText}</div>
      <div>Customise your Course</div>
      <TitleForm initialData={course} courseId={course.id} />
    </div>
  );
};

export default CourseIdpage;
