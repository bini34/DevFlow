import QuestionForm  from "@/components/forms/QuestionForm";


function page() {
  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask Question</h1>
      <div className="mt-9">
        <QuestionForm />
      </div>
    </div>
  );
}

export default page;
